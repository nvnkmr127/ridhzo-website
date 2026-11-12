"use client";

import { useState } from "react";
import { PRICING_SUMMARY } from "@/lib/plans";
import { SectionEyebrowBar } from "./SectionEyebrowBar";

const FAQS = [
  {
    q: "Can I use Ridhzo for free?",
    a: "Yes. The Free plan is ₹0 forever and gives you a practical way to start capturing and managing inbound leads before you upgrade.",
  },
  {
    q: "Is there a trial for paid plans?",
    a: "Yes. Every new workspace starts on a 14-day Starter trial with no card required. When the trial ends it moves to the Free plan unless you subscribe, and nothing is ever deleted.",
  },
  {
    q: "How does Ridhzo pricing work?",
    a: PRICING_SUMMARY,
  },
  {
    q: "Is pricing per company or per user?",
    a: "Pricing is per workspace, and each plan includes a set number of team seats: 1 user on Free, 3 team seats on Starter and unlimited seats on Unlimited.",
  },
  {
    q: "Can my team use WhatsApp with Ridhzo?",
    a: "Yes. Tap WhatsApp on any lead and your own WhatsApp opens with the chat and a personalised template ready. You can connect the official WhatsApp Business API later for automatic welcome messages, sequences and bulk campaigns.",
  },
  {
    q: "Is my sales data secure?",
    a: "Ridhzo enforces workspace boundaries in the application on every request, and you stay in control of your data, including when it leaves Ridhzo. The security page has the full details.",
  },
  {
    q: "Are there limits on leads and automation?",
    a: "Free includes up to 300 leads and 2 automations, Starter up to 5,000 leads and 15 automations, and Unlimited has no limits on leads, lead sources, automations or follow-up sequences.",
  },
] as const;

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Figma FAQ section (573:25373): "EVERYTHING YOU NEED TO KNOW." */
export function FaqHomeSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[80px]"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <SectionEyebrowBar left="GOOD QUESTIONS" right="STRAIGHT ANSWERS" theme="light" />

        <div className="flex w-full flex-col items-start gap-[44px] pt-[48px] lg:flex-row lg:pt-[72px]">
          {/* Left Heading */}
          <div className="flex shrink-0 flex-col items-start">
            <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.15]">
              <span className="block tracking-[-0.05em] text-black lg:tracking-[-5px]">
                EVERYTHING
                <br />
                YOU NEED TO
              </span>
              <span className="text-outline-black block tracking-normal">KNOW.</span>
            </h2>
            <p className="type-body-lg pb-[16px] pt-[24px] text-black/[0.64]">
              A few quick answers before your next lead comes in.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="w-full flex-1 border-t border-black/20">
            {FAQS.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={item.q} className="w-full border-b border-black/20 py-[20px]">
                  <div className="flex flex-col gap-[4px] px-[8px]">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`home-faq-panel-${idx}`}
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
                        id={`home-faq-panel-${idx}`}
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
      </div>
    </section>
  );
}
