"use client";

import { useState } from "react";
import { appUrl } from "@/lib/config";
import {
  BillingFrequencyToggle,
  PricingCardsGrid,
  type BillingCycle,
  type FigmaPlanDef,
} from "./PricingCards";

const PRICING_PAGE_PLANS: readonly FigmaPlanDef[] = [
  {
    id: "free",
    name: "FREE",
    subtitle: "For individuals getting started",
    badge: null,
    badgeVariant: null,
    monthly: 0,
    yearly: 0,
    features: [
      "300 leads",
      "1 user",
      "15 AI credits a month",
      "2 automations",
      "1 follow-up sequence",
      "1 lead source",
      { label: "AI spots hot replies for you", included: false },
      { label: "No Ridhzo branding on your forms", included: false },
    ],
    cta: "Start Free Forever",
    href: appUrl("/signup"),
    featured: false,
  },
  {
    id: "starter",
    name: "STARTER",
    subtitle: "For solo agents & growing teams",
    badge: "Most Popular",
    badgeVariant: "green",
    monthly: 249,
    yearly: 2490,
    features: [
      "5,000 leads",
      "3 users",
      "300 AI credits a month",
      "15 automations",
      "10 follow-up sequences",
      "5 lead sources",
      "AI spots hot replies for you",
      "No Ridhzo branding on your forms",
    ],
    cta: "Start 14-Day Free Trial",
    href: appUrl("/signup?plan=starter"),
    featured: true,
  },
  {
    id: "unlimited",
    name: "UNLIMITED",
    subtitle: "Unlimited leads, seats & full access",
    badge: "Best Value",
    badgeVariant: "muted",
    monthly: 449,
    yearly: 4490,
    features: [
      "Unlimited leads",
      "Unlimited users",
      "2,000 AI credits a month",
      "Unlimited automations",
      "Unlimited follow-up sequences",
      "Unlimited lead sources",
      "AI spots hot replies for you",
      "No Ridhzo branding on your forms",
    ],
    cta: "Go Unlimited",
    href: appUrl("/signup?plan=unlimited"),
    featured: false,
  },
];

const PRICING_PAGE_FOOTNOTE =
  "Prices include 18% GST. Yearly plans include 2 months free. Every new workspace starts on a 14-day Starter trial — no card needed — and moves to Free unless you subscribe. Nothing is ever deleted.";

/** Figma Pricing page Plans section (639:14548): "PLANS THAT FIT." */
export function PricingPlansSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section
      id="pricing"
      className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]"
    >
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex flex-col items-start">
            <p className="type-label text-black">CHOOSE YOUR PACE</p>
            <h2 className="type-h2 pt-[20px]">
              <span className="block text-black">PLANS</span>
              <span className="block text-[#5ee878]">THAT FIT.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-[16px] pb-[12px] lg:items-end">
            <p className="type-body-lg w-full max-w-[259px] text-black/[0.64]">
              One straight forward price for your workspace.
            </p>
            <BillingFrequencyToggle cycle={cycle} onChange={setCycle} />
          </div>
        </div>

        <PricingCardsGrid
          cycle={cycle}
          plans={PRICING_PAGE_PLANS}
          inclGst
          footnote={PRICING_PAGE_FOOTNOTE}
        />
      </div>
    </section>
  );
}

