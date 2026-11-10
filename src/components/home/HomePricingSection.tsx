"use client";

import { useState } from "react";
import { SectionEyebrowBar } from "./SectionEyebrowBar";
import { BillingFrequencyToggle, PricingCardsGrid, type BillingCycle } from "@/components/pricing/PricingCards";

/** Figma Pricing section (573:24941): "START FREE. STAY FAST." */
export function HomePricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("yearly");

  return (
    <section
      id="pricing"
      className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <SectionEyebrowBar left="SMALL COMMITMENT. BIG MOMENTUM." right="PRICING" theme="light" />

        <div className="flex w-full flex-col items-start justify-between gap-6 pt-[48px] lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.15]">
            <span className="flex items-start gap-[0.18em] lg:gap-[16px]">
              <span className="tracking-[-0.05em] text-black lg:tracking-[-5px]">START</span>
              <span className="text-outline-black">FREE.</span>
            </span>
            <span className="flex items-start gap-[0.18em] lg:gap-[16px]">
              <span className="tracking-[-0.05em] text-black lg:tracking-[-5px]">STAY</span>
              <span className="text-outline-black">FAST.</span>
            </span>
          </h2>

          <div className="flex flex-col items-start gap-[16px] pb-[12px] lg:items-end">
            <p className="w-full max-w-[290px] text-[16px] font-normal leading-[26px] text-black/[0.64] sm:text-[18px] sm:leading-[28px]">
              One straight forward price for your workspace.
            </p>
            <BillingFrequencyToggle cycle={cycle} onChange={setCycle} />
          </div>
        </div>

        <PricingCardsGrid cycle={cycle} />
      </div>
    </section>
  );
}
