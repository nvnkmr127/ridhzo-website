"use server";

import { headers } from "next/headers";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<ContactField, string>> };

type ContactField = "name" | "phone" | "email" | "businessType" | "message";

const MAX = { name: 100, phone: 25, email: 200, businessType: 60, message: 3000 } as const;

// Best-effort per-instance throttle. Serverless instances don't share memory, so this only blunts
// bursts from one client; the honeypot and minimum fill time do most of the spam filtering.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function field(form: FormData, name: ContactField): string {
  const v = form.get(name);
  return typeof v === "string" ? v.trim().slice(0, MAX[name]) : "";
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Delivers a contact-form enquiry. Configure at least one channel:
 * - CONTACT_WEBHOOK_URL: receives a JSON POST (e.g. the Ridhzo app's lead webhook, Zapier or Make).
 * - RESEND_API_KEY + CONTACT_TO_EMAIL (+ optional CONTACT_FROM_EMAIL): sends an email via Resend.
 * Success is only reported when at least one channel accepted the message.
 */
export async function submitContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  const honeypot = form.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }
  // Bots submit instantly; people take a few seconds.
  const startedAt = Number(form.get("startedAt"));
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 2500) {
    return { status: "success" };
  }

  const data = {
    name: field(form, "name"),
    phone: field(form, "phone"),
    email: field(form, "email"),
    businessType: field(form, "businessType"),
    message: field(form, "message"),
  };

  const fieldErrors: Partial<Record<ContactField, string>> = {};
  if (data.name.length < 2) fieldErrors.name = "Please enter your name.";
  if (data.phone.replace(/\D/g, "").length < 8) fieldErrors.phone = "Please enter a valid WhatsApp number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) fieldErrors.email = "Please enter a valid email address.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return { status: "error", message: "Too many messages in a short time. Please try again in a few minutes." };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const payload = { ...data, source: "ridhzo.com/contact", submittedAt: new Date().toISOString() };

  const deliveries: Promise<Response>[] = [];
  if (webhook) {
    deliveries.push(
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      }),
    );
  }
  if (resendKey && to) {
    const rows = Object.entries(data)
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${escapeHtml(v || "—")}</td></tr>`)
      .join("");
    deliveries.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "Ridhzo Website <website@ridhzo.com>",
          to: to.split(",").map((s) => s.trim()),
          reply_to: data.email,
          subject: `New website enquiry — ${data.name}`,
          html: `<table>${rows}</table>`,
        }),
        signal: AbortSignal.timeout(8000),
      }),
    );
  }

  if (deliveries.length === 0) {
    console.error("[contact] No delivery channel configured (set CONTACT_WEBHOOK_URL or RESEND_API_KEY + CONTACT_TO_EMAIL).");
    return {
      status: "error",
      message: "Our contact form is temporarily unavailable. Please reach us on WhatsApp or by email instead.",
    };
  }

  const results = await Promise.allSettled(deliveries);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value.ok);
  if (!delivered) {
    console.error(
      "[contact] Delivery failed",
      results.map((r) => (r.status === "fulfilled" ? r.value.status : String(r.reason))),
    );
    return {
      status: "error",
      message: "We couldn't send your message just now. Please try again, or reach us on WhatsApp or by email.",
    };
  }
  return { status: "success" };
}
