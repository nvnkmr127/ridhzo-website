import Link from "next/link";
import { appUrl } from "@/lib/config";

/** Figma Pricing Hero section (639:14521): "START FREE." */
export function PricingHeroSection() {
  return (
    <section className="relative z-[1] overflow-hidden bg-[#070807] px-4 py-14 sm:px-8 lg:px-[84px] lg:py-[80px]">
      <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-start">
        {/* Ambient right-edge green glow (639:14522) */}
        <div
          className="pointer-events-none absolute left-[1140px] top-[-178px] flex h-[630.572px] w-[401.038px] items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex-none rotate-[78.77deg]">
            <div className="relative h-[292.781px] w-[584.755px]">
              <div className="absolute inset-[-109.3%_-54.72%] [mask-image:radial-gradient(closest-side,black_70%,transparent_100%)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/7257b.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb row (639:14524) */}
        <div className="relative flex w-full items-center justify-between border-b border-white/[0.08] pb-[24px]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-[2px]">
            <Link
              href="/"
              className="focus-ring rounded-sm text-[12px] font-normal leading-[18px] text-white/[0.48] transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="relative size-[16px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/24d5d.svg" className="block size-full max-w-none" />
            </span>
            <span aria-current="page" className="text-[12px] font-medium leading-[18px] text-[#5ee878]">
              Pricing
            </span>
          </nav>
        </div>

        {/* Eyebrow + H1 (639:14529) */}
        <div className="relative flex w-full flex-col items-start pt-[32px]">
          <div className="flex items-center gap-[20px]">
            <span
              className="-my-[4px] flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#5ee878]/[0.32]"
              aria-hidden="true"
            >
              <span className="size-[10px] rounded-full bg-[#5ee878]" />
            </span>
            <span className="text-[12px] font-normal leading-[18px] text-[#5ee878]">
              SIMPLE PRICING. BUILT TO SCALE
            </span>
          </div>

          <h1 className="flex flex-wrap items-baseline gap-x-[8px] pt-[32px] font-inter text-[52px] font-black uppercase leading-[1.08] tracking-[-0.05em] sm:text-[72px] lg:text-[96px] lg:leading-[normal] lg:tracking-[-5px]">
            <span className="text-white">START</span>
            <span className="text-outline-pricing">FREE.</span>
          </h1>
        </div>

        {/* Subtext + CTA row (639:14539) */}
        <div className="relative flex w-full flex-col items-start">
          <div className="flex w-full flex-col items-start justify-between gap-8 pt-[48px] lg:flex-row lg:items-end lg:pt-[72px]">
            <p className="w-full max-w-[696px] text-[18px] font-semibold leading-[26px] tracking-[-0.3px] text-white sm:text-[20px] sm:leading-[28px]">
              One flat workspace price instead of a per-seat bill. Upgrade when your lead volume and team grow.
            </p>
            <div className="w-full max-w-[486.406px] border-t border-white/20 pt-[20px]">
              <p className="text-[16px] font-normal leading-[24px] text-white/[0.64]">
                One connected system for capturing demand, following through and staying close to the next opportunity.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-4 pt-[48px] sm:flex-row sm:items-center sm:gap-[24px] lg:pt-[72px]">
            <Link
              href={appUrl("/signup")}
              className="focus-ring inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[14px] border border-white/80 bg-white px-[24px] text-[14px] font-medium leading-[20px] text-black transition-colors hover:bg-white/90"
            >
              Start 14-Day Free Trial
              <span className="relative size-[24px] shrink-0" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/1ef4f.svg" className="block size-full max-w-none" />
              </span>
            </Link>
            <Link
              href="#compare-plans"
              className="focus-ring inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[14px] border border-white px-[24px] text-[14px] font-medium leading-[20px] text-white transition-colors hover:bg-white/10"
            >
              Compare Features
              <span className="relative size-[24px] shrink-0" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/d9b5b.svg" className="block size-full max-w-none" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
