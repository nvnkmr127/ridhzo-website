"use client";

import { useState } from "react";
import { APP_URL } from "@/lib/config";
import { SectionEyebrowBar } from "./SectionEyebrowBar";
import { PhoneDashboardScreen } from "./PhoneDashboardMockup";

const APP_LINK_DISPLAY = "app.ridhzo.com/";

/** Figma The Mobile Experience section (573:25114): "BIG MOMENTUM. SMALL SCREEN." */
export function MobileExperienceSection() {
  const [copied, setCopied] = useState(false);

  const appHref = APP_URL.replace(/\/$/, "") + "/";
  const waShareHref = `https://wa.me/?text=${encodeURIComponent(`Open Ridhzo CRM on your phone: ${appHref}`)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(appHref);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignore clipboard failures in restricted environments.
    }
  };

  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <SectionEyebrowBar left="THE MOBILE EXPERIENCE" right="SALES DOESN'T SIT STILL" theme="dark" />

        <div className="flex w-full flex-col items-center gap-[48px] pt-[48px] lg:flex-row lg:gap-[24px] lg:pt-[72px]">
          {/* Left Content */}
          <div className="relative z-10 flex w-full shrink-0 flex-col items-start lg:w-auto">
            <p className="text-[16px] font-normal leading-[26px] text-white/[0.64] sm:text-[18px] sm:leading-[28px]">
              YOUR TEAM. ANYWHERE.
            </p>
            <h2 className="mt-1 max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.15]">
              <span className="block tracking-[-0.05em] text-white lg:tracking-[-5px]">
                BIG
                <br />
                MOMENTUM.
              </span>
              <span className="text-outline-white block tracking-normal lg:whitespace-nowrap">SMALL SCREEN.</span>
            </h2>

            <p className="w-full max-w-[650px] pb-[16px] pt-[24px] text-[16px] font-normal leading-[26px] text-white/[0.64] sm:text-[18px] sm:leading-[28px]">
              Your workspace travels with you. Open the app link on your phone, keep your sales day in view and save
              enquiries even when connectivity is unreliable.
            </p>

            {/* Mobile Access Card */}
            <div className="mt-2 flex w-full max-w-[480px] flex-col items-start rounded-[12px] border border-white/[0.08] bg-white/[0.06] p-[23px]">
              <p className="text-[12px] font-normal leading-[18px] text-[#aaa]">GIVE YOUR TEAM MOBILE ACCESS</p>

              <div className="w-full pt-[19px]">
                <div className="w-full rounded-[12px] border border-white/[0.12] bg-[#111] p-[16px] text-[16px] font-normal leading-[24px] text-white">
                  {APP_LINK_DISPLAY}
                </div>
              </div>

              <div className="flex w-full flex-col gap-[12px] pb-[8px] pt-[16px] sm:flex-row">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="focus-ring flex h-[40px] flex-1 items-center justify-center gap-[8px] rounded-[10px] border border-white px-[24px] text-[14px] font-medium leading-[20px] text-white transition-colors hover:bg-white/10"
                >
                  <span className="relative size-[24px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/a2c5c.svg" className="block size-full max-w-none" />
                  </span>
                  {copied ? "Link Copied" : "Copy App Link"}
                </button>
                <a
                  href={waShareHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex h-[40px] flex-1 items-center justify-center gap-[8px] rounded-[10px] border border-white bg-white px-[16px] text-[14px] font-medium leading-[20px] text-black transition-colors hover:bg-white/90"
                >
                  <span className="relative size-[24px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/a7a8b.svg" className="block size-full max-w-none" />
                  </span>
                  Share on WhatsApp
                </a>
              </div>

              <p className="pt-[12px] text-[12px] font-normal leading-[18px] text-white/[0.48]">
                {copied
                  ? "App link copied! Paste it in your team WhatsApp group."
                  : "Open the link on a phone and use the available install option."}
              </p>
            </div>
          </div>

          {/* Right Phone & Glow */}
          <div className="relative h-[645.729px] w-full max-w-[598px] flex-1 overflow-visible">
            {/* Green Glow (573:25150) */}
            <div
              className="pointer-events-none absolute left-1/2 top-[-30.48px] flex h-[706.932px] w-[421.085px] -translate-x-1/2 items-center justify-center"
              aria-hidden="true"
            >
              <div className="flex-none rotate-[90.23deg]">
                <div className="relative h-[418.207px] w-[705.229px]">
                  <div className="absolute inset-[-76.52%_-45.38%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/941ba.svg" className="block size-full max-w-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone Hardware + Screen (573:25152) */}
            <div className="absolute left-1/2 top-1/2 flex h-[645.729px] w-[335px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden px-[31px] py-[28px]">
              <PhoneDashboardScreen />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Ridhzo mobile app executive dashboard"
                src="/figma/f1d24.png"
                className="pointer-events-none absolute inset-0 block size-full max-w-none object-cover"
              />
            </div>

            {/* Floating Notification: New Lead Alert */}
            <div className="absolute right-[4px] top-[79.5px] flex min-w-[202px] flex-col gap-[5px] rounded-[10px] border border-[#c1c1c1] bg-white px-[17px] py-[15px] drop-shadow-[0px_12px_16px_rgba(0,0,0,0.4)] sm:right-[8px]">
              <p className="font-inter text-[8.9px] font-extrabold tracking-[0.9px] text-[#5ee878]">
                ● NEW LEAD ALERT
              </p>
              <p className="pt-[3px] font-inter text-[14.6px] font-bold text-[#111]">Aarav Sharma</p>
              <p className="font-inter text-[9.4px] font-normal text-[#888]">Meta Lead Ads · Just now</p>
            </div>

            {/* Floating Notification: Follow-up Set */}
            <div className="absolute bottom-[51.2px] left-[8px] flex min-w-[202px] flex-col gap-[5px] rounded-[10px] border border-[#c1c1c1] bg-white px-[17px] py-[15px] drop-shadow-[0px_12px_16px_rgba(0,0,0,0.4)] sm:left-[24px]">
              <p className="font-inter text-[9px] font-extrabold tracking-[0.9px] text-[#5ee878]">
                ✓ FOLLOW-UP SET
              </p>
              <p className="pt-[3px] font-inter text-[14.9px] font-bold text-[#111]">Tomorrow · 11 AM</p>
              <p className="font-inter text-[9.5px] font-normal text-[#888]">Priya Kapoor · Site visit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

