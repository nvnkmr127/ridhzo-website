"use client";

import { useState } from "react";
import { BillingFrequencyToggle, PricingCardsGrid, type BillingCycle } from "./PricingCards";

/** Figma Pricing page Plans section (639:14548): "PLANS THAT FIT." */
export function PricingPlansSection() {
  const [cycle, setCycle] = useState<BillingCycle>("yearly");

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

        <PricingCardsGrid cycle={cycle} />
      </div>
    </section>
  );
}

