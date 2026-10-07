"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { appUrl } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";

const SHARED = [
  "Instant push alerts + 1-tap WhatsApp",
  "Kanban pipeline + follow-ups + meetings",
  "Web + mobile + offline lead capture",
  "Android call logging + Caller ID",
];

const PLANS = [
  {
    id: "free",
    name: "FREE",
    monthly: 0,
    yearly: 0,
    caption: "Forever Free",
    banner: null as string | null,
    bannerClass: "",
    features: ["Up to 300 leads", "1 user", "1 lead source", "2 automations", "1 follow-up sequence", "15 AI credits / month", ...SHARED],
    cta: "Start Free Forever",
    href: appUrl("/signup"),
    primary: false,
  },
  {
    id: "starter",
    name: "STARTER",
    monthly: 249,
    yearly: 2490,
    banner: "Most Popular",
    bannerClass: "bg-highlight text-black",
    features: [
      "Up to 5,000 leads",
      "3 team seats",
      "5 lead sources",
      "15 automations",
      "10 follow-up sequences",
      "300 AI credits / month",
      ...SHARED,
      "Remove “Powered by Ridhzo” from forms",
    ],
    cta: "Start 14-Day Free Trial",
    href: appUrl("/signup?plan=starter"),
    primary: true,
  },
  {
    id: "unlimited",
    name: "UNLIMITED",
    monthly: 449,
    yearly: 4490,
    banner: "Best Value",
    bannerClass: "bg-white text-black",
    features: [
      "Unlimited leads",
      "Unlimited team seats",
      "Unlimited lead sources",
      "Unlimited automations",
      "Unlimited follow-up sequences",
      "2,000 AI credits / month",
      ...SHARED,
      "Remove “Powered by Ridhzo” from forms",
      "Dashboards + SLA tracking + team leaderboards",
    ],
    cta: "Go Unlimited",
    href: appUrl("/signup?plan=unlimited"),
    primary: false,
  },
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function PricingHomeSection() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <HomeSection id="pricing">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>Simple pricing</Eyebrow>
          <SectionTitle className="mt-1 max-w-[600px]">
            Start free. Upgrade when you <Accent>grow.</Accent>
          </SectionTitle>
          <Lead className="max-w-[644px]">
            Start with the core tools you need to manage inbound leads and test the workflow with your team. Upgrade when your
            lead volume, team size, or automation needs grow.
          </Lead>
        </div>

        <div role="group" aria-label="Billing cycle" className="flex gap-2 rounded-full bg-white/[0.16] p-1">
          {(["monthly", "yearly"] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cycle === c}
              onClick={() => setCycle(c)}
              className={cn(
                "focus-ring flex h-12 items-baseline justify-center gap-1 rounded-full px-6 text-lg capitalize transition-colors",
                cycle === c ? "items-center bg-[#f5f5f5] font-semibold text-black" : "items-center text-white",
              )}
            >
              {c}
              {c === "yearly" && <span className="text-sm font-normal text-black/80">-2 months Free</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1160px] items-stretch gap-6 lg:grid-cols-3 lg:gap-10">
        {PLANS.map((p) => {
          const monthlyEquivalent = cycle === "yearly" ? Math.round(p.yearly / 12) : p.monthly;
          return (
            <div
              key={p.id}
              className={cn(
                "flex flex-col justify-between overflow-hidden rounded-[30px] bg-white/[0.04]",
                p.primary && "border-2 border-highlight/50",
              )}
            >
              <div>
                {p.banner && (
                  <p className={cn("py-1 text-center text-lg font-semibold leading-[26px] tracking-[-0.015em]", p.bannerClass)}>
                    {p.banner}
                  </p>
                )}
                <div className={cn("flex flex-col gap-3 px-6 pb-8", p.banner ? "pt-4" : "pt-8")}>
                  <p className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">{p.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-4xl font-extrabold leading-[42px] tracking-[-0.015em] text-white">{inr(monthlyEquivalent)}</p>
                    <div className="text-xs leading-[18px] text-white/50">
                      {p.id === "free" ? (
                        <p>{p.caption}</p>
                      ) : (
                        <>
                          <p>/month</p>
                          {cycle === "yearly" && <p>Billed annually ({inr(p.yearly)}/year)</p>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 px-6 pb-10">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm leading-5 text-white/65">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-highlight" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-8">
                <Link
                  href={p.href}
                  className={cn(
                    "focus-ring flex h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-medium transition-colors",
                    p.primary
                      ? "border-white bg-white/80 text-black hover:bg-white"
                      : "border-white/12 bg-white/[0.04] text-white hover:bg-white/10",
                  )}
                >
                  {p.cta}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-[992px] text-center text-sm leading-5 text-white/30">
        Prices exclude 18% GST. Yearly plans include 2 months free. Every new workspace starts on a 14-day Starter trial — no
        card needed — and moves to Free unless you subscribe. Nothing is ever deleted.
      </p>
    </HomeSection>
  );
}
