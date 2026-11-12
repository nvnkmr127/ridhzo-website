import { SectionEyebrowBar } from "./SectionEyebrowBar";

const PILLARS = [
  {
    icon: "/figma/160a8.svg",
    title: "Respond while it matters.",
    titleTracking: "tracking-[-0.36px]",
    bodyLine1: "Know when a new lead arrives. Reach out from your",
    bodyLine2: "phone in a tap.",
  },
  {
    icon: "/figma/877c1.svg",
    title: "Give every lead an owner.",
    titleTracking: "tracking-[-1.5px]",
    bodyLine1: "Route enquiries automatically so nobody has to ask",
    bodyLine2: "who's on it.",
  },
  {
    icon: "/figma/f98b9.svg",
    title: "Keep the story moving.",
    titleTracking: "tracking-[-1.5px]",
    bodyLine1: "Follow-ups, reminders and sequences keep the next",
    bodyLine2: "action in view.",
  },
] as const;

/** Figma Ridhzo Mindset section (573:24399): "MORE SELLING. LESS SOFTWARE." */
export function MindsetSection() {
  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[80px]">
      <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-start">
        {/* Left ambient green glow (573:24400) */}
        <div
          className="pointer-events-none absolute left-[-258px] top-[392px] flex h-[622.243px] w-[390.816px] items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex-none rotate-[-18.88deg]">
            <div className="relative h-[584.755px] w-[213.078px]">
              <div className="absolute inset-[-54.72%_-150.18%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/6ac77.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <SectionEyebrowBar left="THE REAL PROBLEM" right="THE RIDHZO MINDSET" theme="dark" />

        <div className="relative flex w-full flex-col items-start justify-between gap-10 pt-[48px] lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.15]">
            <span className="block tracking-[-0.05em] text-white lg:tracking-[-5px]">MORE</span>
            <span className="text-outline-white block tracking-normal">SELLING.</span>
            <span className="block tracking-[-0.05em] text-white lg:tracking-[-5px]">LESS</span>
            <span className="text-outline-white block tracking-normal">SOFTWARE.</span>
          </h2>

          <div className="flex w-full max-w-[510px] flex-col items-start gap-[24px] pb-[8px] lg:pl-[90px]">
            <span className="relative h-[75px] w-[64px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/f8580.svg" className="block size-full max-w-none" />
            </span>

            <p className="type-body-lg text-white/[0.64]">
              NO EXTRA BUSY WORK, THANKS.
            </p>

            <p className="w-full max-w-[414px] font-inter text-[22px] font-medium leading-[34px] tracking-[-1.1px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.296px]">
              Because your best people should be{" "}
              <span className="italic text-[#5ee878]">talking to customers </span>
              — not feeding a CRM.
            </p>
          </div>
        </div>

        <div className="relative w-full pt-[48px] lg:pt-[72px]">
          <div className="grid w-full grid-cols-1 border-t border-white/20 lg:grid-cols-3">
            {PILLARS.map((p, idx) => (
              <div
                key={p.title}
                className={`flex flex-col items-start py-[32px] ${
                  idx === 0
                    ? "border-b border-white/20 lg:border-b-0 lg:border-r lg:pr-[24px]"
                    : idx === 1
                      ? "border-b border-white/20 lg:border-b-0 lg:border-r lg:px-[18px]"
                      : "lg:pl-[24px]"
                }`}
              >
                <div className="pb-[16px]">
                  <span className="relative block size-[56px]" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src={p.icon} className="block size-full max-w-none" />
                  </span>
                </div>
                <h3
                  className={`py-[2px] font-inter text-[24px] font-semibold leading-[normal] text-white ${p.titleTracking}`}
                >
                  {p.title}
                </h3>
                <p className="pt-[12px] text-[16px] font-normal leading-[24px] text-white/[0.64]">
                  {p.bodyLine1}
                  <br className="hidden xl:inline" /> {p.bodyLine2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

