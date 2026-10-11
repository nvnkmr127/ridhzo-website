"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { MessageSquare, Mail, Clock, Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { SUPPORT, whatsappUrl } from "@/lib/config";
import { SOLUTION_NAV } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { HomeSection } from "@/components/site/primitives";

const INPUT =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:border-highlight/60 focus:outline-none focus:ring-2 focus:ring-highlight/30 aria-[invalid=true]:border-red-400/70";
const LABEL = "mb-1.5 block text-sm font-medium text-white";

const BUSINESS_TYPES = [...SOLUTION_NAV.map((s) => s.label), "Other sales team"];

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-300">
      {message}
    </p>
  );
}

export function ContactUsSection() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });
  const [startedAt, setStartedAt] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => setStartedAt(Date.now()), []);
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setDismissed(false);
    }
  }, [state]);

  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};
  const showSuccess = state.status === "success" && !dismissed;

  return (
    <HomeSection className="pt-4 sm:pt-6">
      <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
        {/* Direct channels */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <a
            href={whatsappUrl("Hi Ridhzo team, I have a question about the CRM.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group flex items-start gap-4 rounded-3xl border-2 border-highlight/50 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-highlight text-black">
              <MessageSquare className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="flex items-center justify-between gap-2 text-lg font-semibold text-white">
                Chat on WhatsApp
                <ArrowRight className="h-5 w-5 text-highlight transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="mt-1 block text-sm text-white/65">Fastest way to reach us during business hours.</span>
              <span className="mt-2 block text-sm font-medium text-highlight">{SUPPORT.whatsappDisplay}</span>
            </span>
          </a>

          <a
            href={`mailto:${SUPPORT.email}`}
            className="focus-ring group flex items-start gap-4 rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] border border-white/12 bg-white/[0.06] text-white">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold text-white">Email us</span>
              <span className="mt-1 block text-sm text-white/65">We reply within one business day.</span>
              <span className="mt-2 block text-sm font-medium text-white">{SUPPORT.email}</span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-3xl border border-white/12 bg-white/[0.04] p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] border border-white/12 bg-white/[0.06] text-white">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold text-white">Hours</span>
              <span className="mt-1 block text-sm text-white/65">{SUPPORT.hours}</span>
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white/[0.12] p-3 sm:p-4 lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-[#0a0b0c] p-6 sm:p-8">
            {showSuccess ? (
              <div className="py-12 text-center" role="status">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-highlight text-black">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-white">Message sent</h2>
                <p className="mx-auto mt-2 max-w-sm text-base text-white/65">
                  Thanks for reaching out. Our team will get back to you on WhatsApp or email within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setDismissed(true)}
                  className="focus-ring mt-6 inline-flex h-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                // Submitted via onSubmit (not the action prop) so React doesn't clear the fields when validation fails.
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  startTransition(() => formAction(data));
                }}
                noValidate className="space-y-5" aria-describedby="contact-form-status">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.015em] text-white">Send us a message</h2>
                  <p className="mt-1 text-sm text-white/65">Tell us about your team and we&apos;ll get back to you directly.</p>
                </div>

                {state.status === "error" ? (
                  <p
                    id="contact-form-status"
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {state.message}{" "}
                      {!state.fieldErrors ? (
                        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                          Open WhatsApp
                        </a>
                      ) : null}
                    </span>
                  </p>
                ) : null}

                {/* Spam guards: hidden honeypot + time-to-fill */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="contact-company">Company</label>
                  <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <input type="hidden" name="startedAt" value={startedAt} />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={LABEL}>
                      Your name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={INPUT}
                    />
                    <FieldError id="contact-name-error" message={errors.name} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className={LABEL}>
                      WhatsApp number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={25}
                      autoComplete="tel"
                      placeholder="e.g. +91 98765 43210"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className={INPUT}
                    />
                    <FieldError id="contact-phone-error" message={errors.phone} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className={LABEL}>
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      autoComplete="email"
                      placeholder="rahul@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={INPUT}
                    />
                    <FieldError id="contact-email-error" message={errors.email} />
                  </div>
                  <div>
                    <label htmlFor="contact-business-type" className={LABEL}>
                      Industry
                    </label>
                    <select id="contact-business-type" name="businessType" defaultValue="" className={cn(INPUT, "appearance-none")}>
                      <option value="" className="bg-[#0a0b0c]">
                        Select (optional)
                      </option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[#0a0b0c]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={LABEL}>
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    maxLength={3000}
                    placeholder="Tell us about your lead sources, monthly lead volume, or questions…"
                    className={cn(INPUT, "resize-none")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="focus-ring inline-flex h-14 w-full items-center justify-center gap-2 rounded-[14px] border border-white bg-white/80 px-6 text-sm font-medium text-black transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {pending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
