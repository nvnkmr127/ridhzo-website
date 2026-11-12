"use client";

import { useState } from "react";
import { PRICING_SUMMARY, getPlan, inr } from "@/lib/plans";

const starter = getPlan("starter");
const unlimited = getPlan("unlimited");

const PRICING_FAQS = [
  {
    q: "Can I drag leads between stages?",
    a: "Yes. The Ridhzo pipeline interface shows draggable cards and a list view.",
  },
  {
    q: "Can I open a lead from the board?",
    a: "Yes. Tap any card on the pipeline board to open the full lead profile, call history, notes, and follow-up actions.",
  },
  {
    q: "How does Ridhzo pricing work?",
    a: PRICING_SUMMARY,
  },
  {
    q: "Is pricing per company or per user?",
    a: `Per company. You pay one flat monthly price for your workspace, not per user. Starter (${inr(
      starter.monthly,
    )}/month) includes up to 3 seats; Unlimited (${inr(unlimited.monthly)}/month) has unlimited seats for larger brokerages and agencies.`,
  },
  {
    q: "Can my team use WhatsApp with Ridhzo?",
    a: "Yes. Tap WhatsApp on any lead and your own WhatsApp opens with the chat and a personalised template ready. You can connect the official WhatsApp Business API later for automatic welcome messages, sequences and bulk campaigns.",
  },
] as const;

const PRICING_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Figma Pricing FAQ section (639:15030): "GOOD QUESTIONS. CLEAR ANSWERS." */
export function PricingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[80px]"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_FAQ_JSON_LD) }} />
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start gap-[44px] lg:flex-row lg:gap-[48px]">
        <div className="flex shrink-0 flex-col items-start lg:w-[589px]">
          <p className="type-label text-black">COMMON QUESTIONS</p>
          <h2 className="type-h2 pt-[20px]">
            <span className="block text-black">GOOD</span>
            <span className="block text-black">QUESTIONS.</span>
            <span className="block text-[#5ee878] lg:whitespace-pre">CLEAR  ANSWERS.</span>
          </h2>
        </div>

        <div className="w-full flex-1 border-t border-black/20">
          {PRICING_FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q} className="w-full border-b border-black/20 py-[20px]">
                <div className="flex flex-col gap-[4px] px-[8px]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`pricing-faq-panel-${idx}`}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="focus-ring flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[16px] font-normal leading-[24px] text-black">{item.q}</span>
                    <span className="relative size-[20px] shrink-0" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt=""
                        src={isOpen ? "/figma/3918f.svg" : "/figma/e4128.svg"}
                        className="block size-full max-w-none"
                      />
                    </span>
                  </button>
                  {isOpen ? (
                    <p
                      id={`pricing-faq-panel-${idx}`}
                      className="text-[14px] font-normal leading-[20px] text-black/[0.48]"
                    >
                      {item.a}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
