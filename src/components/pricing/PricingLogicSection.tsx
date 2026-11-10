const STEPS = [
  {
    eyebrow: "01 / START",
    title: "Begin free.",
    body: "One place to organize leads and track workflow.",
  },
  {
    eyebrow: "02 / BUILD",
    title: "Bring your team.",
    body: "Pay per seat on a plan that matches your volume.",
  },
  {
    eyebrow: "03 / SCALE",
    title: "Keep growing.",
    body: "Increase limits as your team and workload grow.",
  },
] as const;

/** Figma Pricing Logic section (639:15001): "MORE PEOPLE. MORE MOMENTUM." */
export function PricingLogicSection() {
  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <div className="flex w-full flex-col items-start">
          <p className="pt-[4px] text-[12px] font-normal leading-[18px] text-[#5ee878]">
            THE LOGIC IS SIMPLE
          </p>
          <h2 className="max-w-[920px] pt-[24px] font-inter text-[44px] font-extrabold uppercase leading-[normal] tracking-[-0.05em] sm:text-[64px] lg:text-[72px] lg:tracking-[-5px]">
            <span className="block text-white lg:whitespace-nowrap">MORE PEOPLE.</span>
            <span className="block text-[#5ee878] lg:whitespace-nowrap">MORE MOMENTUM.</span>
          </h2>
        </div>

        <div className="w-full pt-[48px] lg:pt-[72px]">
          <div className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-3">
            {STEPS.map((step) => (
              <article
                key={step.eyebrow}
                className="flex flex-col items-start rounded-[16px] border border-white/[0.32] p-[32px]"
              >
                <p className="pt-[3.5px] text-[12px] font-normal leading-[18px] text-[#5ee878]">
                  {step.eyebrow}
                </p>
                <h3 className="pt-[24px] font-inter text-[28px] font-bold leading-[normal] tracking-[-0.416px] text-white sm:text-[32px]">
                  {step.title}
                </h3>
                <p className="pt-[8px] text-[14px] font-normal leading-[20px] text-white/[0.64]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
