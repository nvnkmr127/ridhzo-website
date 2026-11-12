"use client";

import { useState } from "react";
import type { CompareFaq as CompareFaqItem } from "@/lib/competitors";

/**
 * Interactive FAQ section matching Figma `Comparison` (`639:14491`):
 * light canvas, 407px left display column ("COMMON QUESTIONS / BEFORE YOU SWITCH."),
 * 48px gutter, and 1px-bordered accordion rows using Figma minus/plus SVGs.
 */
export function CompareFaq({ items }: { items: readonly CompareFaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start gap-10 lg:flex-row lg:gap-[48px]">
        <div className="flex w-full shrink-0 flex-col items-start lg:w-[407px]">
          <p className="font-sans text-[12px] font-normal leading-[18px] text-black">
            COMMON QUESTIONS
          </p>
          <h2 className="pt-[20px] font-inter text-[42px] font-extrabold uppercase leading-[1.06] tracking-[-0.045em] sm:text-[56px] lg:text-[72px] lg:leading-[normal] lg:tracking-[-5.7px]">
            <span className="block text-black">BEFORE YOU</span>
            <span className="block text-[#5ee878]">SWITCH.</span>
          </h2>
        </div>

        <div className="w-full flex-1 border-t border-black/20">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            const panelId = `compare-faq-panel-${idx}`;
            const buttonId = `compare-faq-button-${idx}`;
            return (
              <div key={item.q} className="w-full border-b border-black/20 py-[20px]">
                <div className="flex flex-col gap-[4px] px-[8px]">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="focus-ring flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm text-left focus-visible:ring-offset-white"
                  >
                    <span className="font-sans text-[16px] font-normal leading-[24px] text-black">
                      {item.q}
                    </span>
                    <span className="relative size-[20px] shrink-0" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt=""
                        src={isOpen ? "/figma/3918f.svg" : "/figma/e4128.svg"}
                        width={20}
                        height={20}
                        className="block size-full max-w-none"
                      />
                    </span>
                  </button>
                  {isOpen ? (
                    <p
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="font-sans text-[14px] font-normal leading-[20px] text-black/[0.48]"
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

