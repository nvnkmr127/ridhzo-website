import Link from "next/link";
import { SectionEyebrowBar } from "./SectionEyebrowBar";

const INTEGRATIONS = [
  {
    name: "Meta Lead Ads",
    tag: "CAPTURE",
    icon: "/figma/b35d4.svg",
    href: "/features/lead-capture",
    cornerClass: "lg:rounded-tl-[16px]",
    borderClass: "border-t border-l border-r lg:border-r-0",
  },
  {
    name: "Google Lead Forms",
    tag: "CAPTURE",
    icon: "/figma/cef7a.svg",
    href: "/features/lead-capture",
    cornerClass: "",
    borderClass: "border-t border-l border-r lg:border-r-0",
  },
  {
    name: "WhatsApp",
    tag: "CONVERSATION",
    icon: "/figma/8a045.svg",
    href: "/features/whatsapp",
    cornerClass: "",
    borderClass: "border-t border-l border-r lg:border-r-0",
  },
  {
    name: "Webhooks & API",
    tag: "CUSTOM FLOWS",
    icon: "/figma/110d3.svg",
    href: "/features/integrations",
    cornerClass: "lg:rounded-tr-[16px]",
    borderClass: "border-t border-l border-r",
  },
  {
    name: "Google Calendar",
    tag: "SCHEDULING",
    icon: "/figma/ac6c1.svg",
    href: "/features/meetings",
    cornerClass: "lg:rounded-bl-[16px]",
    borderClass: "border-t border-l border-r lg:border-b lg:border-r-0",
  },
  {
    name: "Email (SMTP)",
    tag: "OUTREACH",
    icon: "/figma/026ae.svg",
    href: "/features/sequences",
    cornerClass: "",
    borderClass: "border-t border-l border-r lg:border-b lg:border-r-0",
  },
  {
    name: "Web forms",
    tag: "CAPTURE",
    icon: "/figma/91853.svg",
    href: "/features/lead-capture",
    cornerClass: "",
    borderClass: "border-t border-l border-r lg:border-b lg:border-r-0",
  },
  {
    name: "CSV Import",
    tag: "BRING IT ALL IN",
    icon: "/figma/e7f6a.svg",
    href: "/features/lead-capture",
    cornerClass: "rounded-b-[16px] lg:rounded-bl-none lg:rounded-br-[16px]",
    borderClass: "border",
  },
] as const;

/** Figma Integrations Grid section (573:24662 + hover 587:8339): "ALL YOUR SOURCES. IN SYNC." */
export function IntegrationsHomeSection() {
  return (
    <section
      id="integrations"
      className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <SectionEyebrowBar left="IT PLAYS WELL WITH OTHERS" right="CONNECTED BY DESIGN" theme="light" />

        <div className="flex w-full flex-col items-start justify-between gap-6 pt-[48px] lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.15]">
            <span className="flex items-start gap-[0.18em] tracking-[-0.05em] text-black lg:gap-[18px] lg:tracking-[-5px]">
              <span>ALL</span>
              <span>YOUR</span>
            </span>
            <span className="text-outline-black block tracking-normal">SOURCES.</span>
            <span className="flex items-start gap-[0.14em] lg:gap-[14px]">
              <span className="text-black">in</span>
              <span className="text-outline-black">SYNC.</span>
            </span>
          </h2>

          <p className="type-body-lg w-full max-w-[323px] pb-[12px] text-black/[0.64]">
            Link the platforms that generate enquiries to the workspace where your team manages them. No exports or
            scattered spreadsheets.
          </p>
        </div>

        {/* 4×2 Bordered Grid */}
        <div className="w-full pt-[48px] lg:pt-[72px]">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {INTEGRATIONS.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={`focus-ring group flex h-[231px] flex-col items-start justify-between border-black/20 p-[20px] transition-colors hover:bg-[#5ee878]/[0.12] hover:shadow-[inset_0_0_0_1px_rgba(94,232,120,0.32)] ${
                  idx === 0 ? "max-lg:rounded-t-[16px]" : ""
                } ${item.cornerClass} ${item.borderClass}`}
              >
                <span className="relative size-[48px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src={item.icon} className="block size-full max-w-none" />
                </span>

                <div className="flex w-full items-start gap-[16px]">
                  <div className="flex min-w-0 flex-1 flex-col items-start">
                    <h3 className="py-[2px] font-inter text-[24px] font-semibold leading-[normal] tracking-[-0.36px] text-black">
                      {item.name}
                    </h3>
                    <p className="pt-[12px] text-[16px] font-normal leading-[24px] text-black/[0.64]">
                      {item.tag}
                    </p>
                  </div>

                  {/* Arrow swaps from dark arrow-up-right to green arrow-right per Figma 587:8339 */}
                  <span className="relative size-[32px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      src="/figma/cd658.svg"
                      className="block size-full max-w-none transition-opacity group-hover:opacity-0"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      src="/figma/hover-19107.svg"
                      className="absolute inset-0 block size-full max-w-none opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
