"use client";

import Link from "next/link";
import { appUrl } from "@/lib/config";
import { PRICING_FOOTNOTE, inr } from "@/lib/plans";
import { cn } from "@/lib/utils";

export type BillingCycle = "monthly" | "yearly";

export interface FigmaPlanDef {
  id: "free" | "starter" | "unlimited";
  name: string;
  badge: string | null;
  badgeVariant: "green" | "muted" | null;
  monthly: number;
  yearly: number;
  features: string[];
  cta: string;
  href: string;
  featured: boolean;
}

export const FIGMA_PLANS: readonly FigmaPlanDef[] = [
  {
    id: "free",
    name: "FREE",
    badge: null,
    badgeVariant: null,
    monthly: 0,
    yearly: 0,
    features: [
      "Up to 300 leads",
      "1 user",
      "1 lead source",
      "2 automations",
      "1 follow-up sequence",
      "15 AI credits / month",
      "Instant push alerts + 1-tap WhatsApp",
      "Kanban pipeline + follow-ups + meetings",
      "Web + mobile + offline lead capture",
      "Android call logging + Caller ID",
    ],
    cta: "Start Free Forever",
    href: appUrl("/signup"),
    featured: false,
  },
  {
    id: "starter",
    name: "STARTER",
    badge: "Most Popular",
    badgeVariant: "green",
    monthly: 249,
    yearly: 2490,
    features: [
      "Up to 5,000 leads",
      "3 team seats",
      "5 lead sources",
      "15 automations",
      "10 follow-up sequences",
      "300 AI credits / month",
      "Instant push alerts + 1-tap WhatsApp",
      "Kanban pipeline + follow-ups + meetings",
      "Web + mobile + offline lead capture",
      "Android call logging + Caller ID",
      "Remove “Powered by Ridhzo” from forms",
    ],
    cta: "Start 14-Day Free Trial",
    href: appUrl("/signup?plan=starter"),
    featured: true,
  },
  {
    id: "unlimited",
    name: "UNLIMITED",
    badge: "Best Value",
    badgeVariant: "muted",
    monthly: 449,
    yearly: 4490,
    features: [
      "Unlimited leads",
      "Unlimited team seats",
      "Unlimited lead sources",
      "Unlimited automations",
      "Unlimited follow-up sequences",
      "2,000 AI credits / month",
      "Instant push alerts + 1-tap WhatsApp",
      "Kanban pipeline + follow-ups + meetings",
      "Web + mobile + offline lead capture",
      "Android call logging + Caller ID",
      "Remove “Powered by Ridhzo” from forms",
      "Dashboards + SLA tracking + team leaderboards",
    ],
    cta: "Go Unlimited",
    href: appUrl("/signup?plan=unlimited"),
    featured: false,
  },
];

/** Billing frequency pill toggle (Figma: Group - Billing frequency). */
export function BillingFrequencyToggle({
  cycle,
  onChange,
}: {
  cycle: BillingCycle;
  onChange: (next: BillingCycle) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Billing frequency"
      className="flex items-center rounded-[40px] border border-black/20 bg-white p-[4px]"
    >
      <button
        type="button"
        aria-pressed={cycle === "monthly"}
        onClick={() => onChange("monthly")}
        className={cn(
          "focus-ring flex items-center justify-center rounded-[30px] px-[17px] py-[10px] font-inter text-[12px] leading-[normal] transition-colors",
          cycle === "monthly" ? "bg-black font-extrabold text-white" : "font-bold text-black/80 hover:text-black",
        )}
      >
        Monthly
      </button>
      <button
        type="button"
        aria-pressed={cycle === "yearly"}
        onClick={() => onChange("yearly")}
        className={cn(
          "focus-ring flex items-center justify-center rounded-[30px] px-[17px] py-[10px] font-inter text-[12px] leading-[normal] transition-colors",
          cycle === "yearly" ? "bg-black font-extrabold text-white" : "font-bold text-black/80 hover:text-black",
        )}
      >
        Yearly · save 2 months
      </button>
    </div>
  );
}

/** Three dark-mode pricing cards plus GST/trial footnote shared by Home and /pricing. */
export function PricingCardsGrid({ cycle }: { cycle: BillingCycle }) {
  return (
    <div className="flex w-full flex-col items-center gap-[32px] pt-[48px] lg:pt-[72px]">
      <div className="grid w-full grid-cols-1 items-stretch gap-[24px] lg:grid-cols-3">
        {FIGMA_PLANS.map((plan) => {
          const displayPrice = cycle === "yearly" ? Math.round(plan.yearly / 12) : plan.monthly;
          return (
            <div
              key={plan.id}
              className={cn(
                "flex flex-col justify-between overflow-hidden rounded-[24px] bg-black text-white",
                plan.featured && "border-2 border-[#5ee878]/[0.48]",
              )}
            >
              <div className="flex flex-col">
                {plan.badge ? (
                  <div
                    className={cn(
                      "flex w-full items-center justify-center px-[24px] py-[4px]",
                      plan.badgeVariant === "green" ? "bg-[#5ee878] text-black" : "bg-white/[0.16] text-white",
                    )}
                  >
                    <span className="text-[18px] font-semibold leading-[26px] tracking-[-0.27px]">
                      {plan.badge}
                    </span>
                  </div>
                ) : null}

                <div
                  className={cn(
                    "flex flex-col gap-[12px] px-[32px] pb-[32px]",
                    plan.badge ? "pt-[16px]" : "pt-[50px]",
                  )}
                >
                  <h3 className="font-inter text-[32px] font-bold leading-[normal] tracking-[-0.416px] text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-[8px]">
                    <span className="font-inter text-[32px] font-bold leading-[normal] tracking-[-0.416px] text-white">
                      {inr(displayPrice)}
                    </span>
                    <div className="flex flex-col justify-center text-[12px] font-normal leading-[18px] text-white/[0.48]">
                      {plan.monthly === 0 ? (
                        <>
                          <span>A good place to begin.</span>
                          <span>Forever Free</span>
                        </>
                      ) : (
                        <>
                          <span>/month</span>
                          {cycle === "yearly" ? (
                            <span>Billed annually ({inr(plan.yearly)}/year)</span>
                          ) : (
                            <span>Billed monthly</span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-[12px] px-[32px] pb-[40px]">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-[8px]">
                      <span className="relative size-[20px] shrink-0" aria-hidden="true">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/eebef.svg" className="block size-full max-w-none" />
                      </span>
                      <span className="flex-1 text-[14px] font-normal leading-[20px] text-white/[0.64]">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-[32px] pb-[32px]">
                <Link
                  href={plan.href}
                  className={cn(
                    "focus-ring flex h-[56px] w-full items-center justify-center gap-[8px] rounded-[14px] border px-[24px] text-[14px] font-medium leading-[20px] transition-colors",
                    plan.featured
                      ? "border-white/80 bg-white text-black hover:bg-white/90"
                      : "border-white text-white hover:bg-white/10",
                  )}
                >
                  {plan.cta}
                  <span className="relative size-[24px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      src={plan.featured ? "/figma/1ef4f.svg" : "/figma/d9b5b.svg"}
                      className="block size-full max-w-none"
                    />
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="max-w-[992px] text-center text-[14px] font-normal leading-[20px] text-black/[0.48]">
        {PRICING_FOOTNOTE}
      </p>
    </div>
  );
}

