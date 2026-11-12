import { SectionEyebrowBar } from "./SectionEyebrowBar";

/** Figma Problem section (573:24350): "THE LEAD ISN'T THE PROBLEM." */
export function ProblemSection() {
  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <SectionEyebrowBar left="THE REAL PROBLEM" right="WHY RIDHZO" theme="dark" rightMuted />

        <div className="flex w-full flex-col items-start justify-between gap-10 pt-[48px] lg:flex-row lg:items-center lg:pt-[72px]">
          <h2 className="max-w-[920px] font-inter text-[48px] font-black uppercase leading-[1.08] sm:text-[72px] lg:text-[96px] lg:leading-[1.13]">
            <span className="block tracking-[-0.05em] text-white lg:tracking-[-5px]">THE LEAD</span>
            <span className="flex items-start gap-[0.18em] tracking-[-0.05em] text-white lg:gap-[18px] lg:tracking-[-5px]">
              <span>ISN&apos;T</span>
              <span>THE</span>
            </span>
            <span className="text-outline-white block tracking-normal">PROBLEM.</span>
          </h2>

          <div className="flex w-full max-w-[510px] flex-col items-start gap-[24px] pb-[8px] lg:pl-[90px]">
            <span className="relative size-[75px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/9de81.svg" className="block size-full max-w-none" />
            </span>

            <p className="w-full max-w-[420px] pt-[8px] font-inter text-[22px] font-medium leading-[34px] tracking-[-1.1px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.3px]">
              It&apos;s the gap between someone saying{" "}
              <span className="italic">
                “<span className="text-[#5ee878]">I&apos;m interested</span>”
              </span>{" "}
              and your team saying{" "}
              <span className="italic">
                “<span className="text-[#5ee878]">Let&apos;s talk.</span>”
              </span>
            </p>

            <p className="type-body-lg w-full max-w-[420px] text-white/[0.64]">
              Ridhzo closes that gap. New enquiries land in one place, your team gets alerted, and every follow-up has a
              next step. No lead left floating in a spreadsheet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

