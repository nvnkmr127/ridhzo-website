"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SectionEyebrowBar } from "./SectionEyebrowBar";

const DRAFT_BODY =
  "Hi Kumar, thanks for sharing your plot details (1200 sq ft, Chandapura Anekal road). To move forward, could you please let us know the built-up area you plan to construct, any specific architectural or interior requirements, and your preferred date/time for a site visit? Looking forward to helping you with your residential G+1 project. Best, Sneha from ScrewWood";

/** Figma Product in Action section (573:24445): "THE WORK GETS LIGHTER." */
export function ProductActionSection() {
  const [copied, setCopied] = useState(false);
  const [approved, setApproved] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DRAFT_BODY);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore clipboard failures in restricted environments.
    }
  };

  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:h-[1332.35px] lg:px-[84px] lg:py-[80px]">
      <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-start">
        {/* Right ambient green glow (573:24446) */}
        <div
          className="pointer-events-none absolute left-[1189px] top-[495px] flex h-[771.838px] w-[245.391px] items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex-none rotate-[5.55deg]">
            <div className="relative h-[758.682px] w-[172.877px]">
              <div className="absolute inset-[-42.18%_-185.1%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/088b6.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <SectionEyebrowBar left="AN ACTUAL LOOK AT THE MAGIC" right="PRODUCT IN ACTION" theme="dark" />

        <div className="relative flex w-full flex-col items-start justify-between gap-6 pt-[48px] lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.15]">
            <span className="block tracking-[-0.05em] text-white lg:tracking-[-5px]">THE WORK GETS</span>
            <span className="text-outline-white block tracking-normal">LIGHTER.</span>
          </h2>

          <p className="w-full max-w-[323px] pb-[12px] text-[16px] font-normal leading-[26px] text-white/[0.64] sm:text-[18px] sm:leading-[28px]">
            Less admin shouldn&apos;t be an abstract promise. Here&apos;s what changes in the moments between a new lead
            and your next conversation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="relative flex w-full flex-col items-stretch gap-[24px] pt-[48px] lg:flex-row lg:items-start lg:pt-[72px]">
          {/* Left Tall Card: Ridhzo AI Co-Pilot */}
          <article className="flex flex-1 flex-col items-start overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] sm:p-[32px]">
            <div className="flex w-full items-center gap-[12px]">
              <span className="relative size-[20px] shrink-0" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/a62f0.svg" className="block size-full max-w-none" />
              </span>
              <span className="text-[12px] font-normal leading-[18px] text-black/[0.64]">RIDHZO AI CO-PILOT</span>
            </div>

            <h3 className="pt-[34px] font-inter text-[28px] font-bold leading-[normal] text-black sm:text-[32px]">
              More thinking.
              <br />
              Less typing.
            </h3>

            <p className="pt-[19px] text-[16px] font-normal leading-[24px] text-black/[0.64]">
              Turn conversation context into a thoughtful first draft. Your team reviews it, makes it theirs, and stays
              in control.
            </p>

            <div className="w-full pt-[40px] lg:pt-[56px]">
              <div className="flex min-h-[534px] w-full flex-col rounded-[16px] border border-[#292929] bg-[#0a0a0a] p-px drop-shadow-[0px_8px_9px_rgba(0,0,0,0.3)] lg:h-[534px]">
                {/* Assistant Header */}
                <div className="flex items-center justify-between border-b border-[#292929] px-[20px] pb-[17px] pt-[16px]">
                  <div className="flex items-center gap-[8px]">
                    <span className="relative size-[16px] shrink-0" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" src="/figma/80fbc.svg" className="block size-full max-w-none" />
                    </span>
                    <span className="text-[14px] font-semibold leading-[20px] text-[#f5f5f5]">Assistant</span>
                  </div>
                  <span className="relative size-[16px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/beed7.svg" className="block size-full max-w-none" />
                  </span>
                </div>

                {/* Assistant Body */}
                <div className="flex flex-1 flex-col px-[20px] pb-[16px] pt-[20px]">
                  <div className="flex items-center justify-between border-b border-[#292929] pb-[11px]">
                    <div className="flex items-center gap-[6px] px-[10px] py-[6px]">
                      <span className="relative size-[14px] shrink-0" aria-hidden="true">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/a5f01.svg" className="block size-full max-w-none" />
                      </span>
                      <span className="text-[12px] font-medium leading-[16px] text-[#adadad]">History</span>
                    </div>
                    <div className="flex items-center gap-[6px] px-[10px] py-[6px]">
                      <span className="relative size-[14px] shrink-0" aria-hidden="true">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/914ef.svg" className="block size-full max-w-none" />
                      </span>
                      <span className="text-[12px] font-medium leading-[16px] text-[#adadad]">New chat</span>
                    </div>
                  </div>

                  {/* Conversation Area */}
                  <div className="relative flex-1 pt-[16px]">
                    <div className="flex items-start justify-end gap-[12px]">
                      <div className="max-w-[292.8px] rounded-[16px] bg-[#f5f5f5] px-[16px] py-[10px] text-[14px] leading-[20px] text-[#0f0f0f]">
                        Draft a follow-up for my newest lead
                      </div>
                      <span className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-[#212121]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/affe6.svg" className="size-[16px]" />
                      </span>
                    </div>

                    <div className="mt-[16px] flex items-start gap-[12px]">
                      <span className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-[#f5f5f5]/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/5cdc4.svg" className="size-[16px]" />
                      </span>
                      <div className="flex flex-1 flex-col gap-[16px] rounded-[12px] border border-[#5ee878]/[0.32] bg-[#5ee878]/[0.08] p-[13px]">
                        <p className="text-[12px] font-semibold uppercase leading-[16px] tracking-[0.6px] text-[#5ee878]">
                          DRAFT WHATSAPP → KUMAR · {approved ? "APPROVED TO SEND" : "NEEDS YOUR APPROVAL"}
                        </p>
                        <p className="text-[14px] font-normal leading-[20px] text-[#f5f5f5]">{DRAFT_BODY}</p>
                        <div className="flex items-center justify-end gap-[8px]">
                          <button
                            type="button"
                            onClick={handleCopy}
                            aria-label={copied ? "Draft copied" : "Copy draft message"}
                            className="focus-ring flex h-[32px] items-center justify-center rounded-[8px] bg-[#292929] px-[12px] text-white transition-colors hover:bg-[#383838]"
                          >
                            {copied ? (
                              <Check className="size-[16px] text-[#5ee878]" aria-hidden="true" />
                            ) : (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img alt="" src="/figma/d95ca.svg" className="size-[16px]" />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => setApproved((v) => !v)}
                            className="focus-ring flex h-[32px] w-[165px] items-center justify-center gap-[12px] rounded-[8px] bg-[#f5f5f5] px-[12px] text-[12px] font-medium leading-[16px] text-[#0f0f0f] transition-colors hover:bg-white"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="" src="/figma/c71f7.svg" className="size-[16px]" />
                            {approved ? "Approved ✓" : "Review & send"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input Row */}
                  <div className="flex items-center gap-[8px] border-t border-[#292929] pt-[17px]">
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Ask about your leads…"
                      aria-label="Ask about your leads"
                      className="focus-ring h-[44px] flex-1 rounded-[12px] border border-[#292929] bg-[#121212] px-[15px] text-[14px] leading-[20px] text-[#f5f5f5] placeholder:text-[#adadad]"
                    />
                    <button
                      type="button"
                      aria-label="Send message"
                      onClick={() => setPrompt("")}
                      className={`focus-ring flex size-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[#f5f5f5] transition-opacity ${
                        prompt.trim() ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" src="/figma/98caf.svg" className="size-[16px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Right Stacked Column */}
          <div className="flex flex-1 flex-col justify-between gap-[24px] lg:h-[855px]">
            {/* Top Card: Smart Automations */}
            <article className="relative w-full overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] pb-8 sm:p-[32px] lg:h-[415.5px] lg:pb-[32px]">
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/140e6.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="text-[12px] font-normal leading-[18px] text-black/[0.64]">SMART AUTOMATIONS</span>
                </div>
                <h3 className="font-inter text-[28px] font-bold leading-[normal] text-black sm:text-[32px]">
                  Set the rule. Keep the pace.
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-black/[0.64]">
                  Create a sequence that reacts to lead status, waits, and stops once a customer replies. No manual
                  chasing.
                </p>
              </div>

              <div className="mt-7 flex justify-center lg:absolute lg:left-[24px] lg:right-[24px] lg:top-[162.21px] lg:mt-0">
                <div className="w-full max-w-[525px] -rotate-[3.26deg] lg:w-[525px]">
                  <div className="flex flex-col gap-[5px] rounded-[16px] bg-[#0a0a0a] p-[16px] drop-shadow-[0px_8px_9px_rgba(0,0,0,0.3)]">
                    <div className="flex h-[20px] w-full items-center justify-between gap-2">
                      <span className="shrink-0 font-inter text-[8.5px] font-extrabold tracking-[0.4px] text-white sm:text-[9.95px] sm:tracking-[0.796px]">
                        IF THIS HAPPENS
                      </span>
                      <span className="truncate font-inter text-[9.5px] font-extrabold tracking-[0.3px] text-white/80 sm:text-[12px] sm:tracking-[0.796px]">
                        Welcome WhatsApp on new lead
                      </span>
                    </div>
                    {[
                      { n: "01", text: "New lead arrives", glyph: "↘" },
                      { n: "02", text: "Assign to available rep", glyph: "↘" },
                      { n: "03", text: "Schedule follow-up", glyph: "✓" },
                    ].map((step) => (
                      <div
                        key={step.n}
                        className="flex w-full items-center gap-[12px] rounded-[8px] border-[1.106px] border-white/[0.08] bg-[#111] py-[8px] pl-[8px] pr-[14px] sm:pr-[20px]"
                      >
                        <span className="flex size-[28px] shrink-0 items-center justify-center rounded-[6px] border-[1.106px] border-[#5ee878]/[0.48] bg-[#5ee878]/[0.16] font-inter text-[12px] font-semibold text-white">
                          {step.n}
                        </span>
                        <span className="flex-1 font-inter text-[13px] font-semibold text-white sm:text-[14px]">
                          {step.text}
                        </span>
                        <span className="font-inter text-[14.373px] text-[#5ee878]">{step.glyph}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Bottom Card: Action-Ready Leads */}
            <article className="relative w-full overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] pb-8 sm:p-[32px] lg:h-[415.5px] lg:pb-[32px]">
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/140e6.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="text-[12px] font-normal leading-[18px] text-black/[0.64]">ACTION-READY LEADS</span>
                </div>
                <h3 className="font-inter text-[28px] font-bold leading-[normal] text-black sm:text-[32px]">
                  Keep every conversation going.
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-black/[0.64]">
                  Every lead has a next step nearby: call, WhatsApp, or schedule a meeting without leaving the record.
                </p>
              </div>

              <div className="mt-7 flex justify-center lg:absolute lg:left-[26px] lg:right-[26px] lg:top-[174px] lg:mt-0">
                <div className="w-full max-w-[552px] rotate-[3.36deg]">
                  <div className="flex flex-col overflow-hidden rounded-[16px] bg-[#0a0a0a] px-[14px] py-[12px] shadow-[0px_8px_18px_0px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center justify-between gap-2 border-b border-white/20 pb-[8px]">
                      <div className="flex min-w-0 items-center gap-[10px]">
                        <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[17px] border border-[#5ee878]/[0.32] bg-[#5ee878]/[0.12] text-[13px] font-extrabold text-white">
                          K
                        </span>
                        <div className="min-w-0">
                          <p className="text-[12px] font-black tracking-[0.72px] text-white">KUMAR</p>
                          <p className="truncate pt-[3px] text-[9px] font-normal text-white/[0.64]">
                            Residential enquiry · Chandapura
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-[6px] whitespace-nowrap rounded-full bg-amber-500/10 px-[8px] py-[6px] text-[11px] leading-[16px] text-[#fbbf24]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/a5129.svg" className="size-[14px]" />
                        Score 35 · Warm
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-1.5 pt-[12px]">
                      {[
                        { label: "Call", icon: "/figma/1f222.svg" },
                        { label: "WhatsApp", icon: "/figma/e2e9c.svg" },
                        { label: "Email", icon: "/figma/8ab13.svg" },
                        { label: "Meeting", icon: "/figma/469f0.svg" },
                        { label: "Follow-up", icon: "/figma/80507.svg", trailing: "/figma/12c93.svg" },
                      ].map((btn) => (
                        <span
                          key={btn.label}
                          className="inline-flex items-center gap-[6px] rounded-[10px] border border-[#292929] px-[10px] py-[8px] text-[11px] font-medium leading-[16px] text-[#f5f5f5]"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img alt="" src={btn.icon} className="size-[16px]" />
                          {btn.label}
                          {"trailing" in btn && btn.trailing ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img alt="" src={btn.trailing} className="size-[16px]" />
                          ) : null}
                        </span>
                      ))}
                    </div>

                    <div className="pt-[12px]">
                      <div className="flex flex-col gap-[4px] rounded-[10px] border border-white/[0.12] bg-[#111] px-[12px] py-[10px]">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] tracking-[0.45px] text-white">NEXT BEST ACTION</span>
                          <span className="text-[11px] font-medium tracking-[0.45px] text-[#5ee878]">
                            23 OCT · 10:30 AM
                          </span>
                        </div>
                        <p className="pt-[8px] text-[12px] leading-[15px] text-[#f0f0f0]">
                          Follow-up already scheduled. If there is no response, place a call or confirm the site visit on
                          WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

