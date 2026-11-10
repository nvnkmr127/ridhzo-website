import Link from "next/link";
import { appUrl } from "@/lib/config";
import { cn } from "@/lib/utils";
import { SectionEyebrowBar } from "./SectionEyebrowBar";

/** Figma Closing CTA section (573:25399 / 639:15043): "DON'T LET THE NEXT ONE WAIT." */
export function ClosingCtaSection({ showEyebrow = true }: { showEyebrow?: boolean }) {
  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        {showEyebrow ? (
          <SectionEyebrowBar left="OKAY, ENOUGH SCROLLING." right="IT'S YOUR MOVE" theme="dark" rightMuted />
        ) : null}

        <div
          className={cn(
            "flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-end",
            showEyebrow && "pt-[48px] lg:pt-[72px]",
          )}
        >
          <h2 className="max-w-[920px] font-inter text-[52px] font-black uppercase leading-[1.06] sm:text-[84px] lg:text-[112px] lg:leading-[1.13]">
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">DON&apos;T LET</span>
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">THE NEXT</span>
            <span className="text-outline-white block tracking-normal">ONE WAIT.</span>
          </h2>

          <div className="flex w-full max-w-[510px] flex-col items-start gap-[24px] pb-[12px] lg:pl-[90px]">
            <span className="relative size-[75px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/c17ed.svg" className="block size-full max-w-none" />
            </span>

            <p className="w-full max-w-[414px] pt-[8px] font-inter text-[22px] font-medium leading-[34px] tracking-[-1.1px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.3px]">
              Your next enquiry could be your next{" "}
              <span className="italic text-[#5ee878]">big customer</span>. Be ready when it{" "}
              <span className="italic text-[#5ee878]">lands</span>.
            </p>

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
          </div>
        </div>
      </div>
    </section>
  );
}

