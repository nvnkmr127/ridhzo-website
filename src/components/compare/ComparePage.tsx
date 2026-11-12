import Link from "next/link";
import type { Competitor } from "@/lib/competitors";
import { appUrl } from "@/lib/config";
import { Button } from "@/components/site/Button";
import { FeatherArrowDown } from "@/components/site/icons";
import { CompareFaq } from "./CompareFaq";

/**
 * Competitor comparison layout matching Figma `Comparison` (`639:14264`):
 * 1. Black Hero ("RIDHZO VS ...") with ambient green glow & stacked subcopy/CTAs
 * 2. White Feature Comparison Matrix ("SEE THE REAL DIFFERENCE.")
 * 3. Black "Which Fits Your Team?" split cards ("THE RIGHT CRM FOR THE RIGHT JOB.")
 * 4. Black Separate Pricing Comparison cards ("NOW, LET'S TALK NUMBERS.")
 * 5. Light FAQ ("BEFORE YOU SWITCH.")
 * 6. Black Closing CTA ("DON'T LET THE NEXT ONE WAIT.")
 */
export function ComparePage({ competitor: c }: { competitor: Competitor }) {
  return (
    <div className="relative">
      {/* Section 1: Hero (639:14269) — no z-index on inner container so mix-blend-lighten blends VS over glow */}
      <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
        {/* Ambient right-edge green glow (639:14296) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[65%] top-[-40px] flex h-[615.359px] w-[343.074px] items-center justify-center lg:left-[calc(50%+491.24px)] lg:top-[-8.21px]"
        >
          <div className="flex-none rotate-[-7.74deg]">
            <div className="relative h-[584.755px] w-[266.721px]">
              <div className="absolute inset-[-54.72%_-119.98%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/9e142.svg"
                  width={907}
                  height={1225}
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1272px]">
          {/* Breadcrumbs (639:14271) */}
          <nav aria-label="Breadcrumb" className="w-full border-b border-white/[0.08] pb-5 lg:pb-[24px]">
            <ol className="flex flex-wrap items-center gap-[2px] font-sans text-[12px] font-normal leading-[18px]">
              <li>
                <Link
                  href="/"
                  className="focus-ring rounded-sm text-white/[0.48] transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li className="inline-flex items-center gap-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/24d5d.svg"
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="block size-[16px] shrink-0 max-w-none"
                />
                <Link
                  href="/blog"
                  className="focus-ring rounded-sm text-white/[0.48] transition-colors hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li className="inline-flex items-center gap-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/24d5d.svg"
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="block size-[16px] shrink-0 max-w-none"
                />
                <Link
                  href="/compare"
                  className="focus-ring rounded-sm text-white/[0.48] transition-colors hover:text-white"
                >
                  Compare Ridhzo
                </Link>
              </li>
              <li className="inline-flex items-center gap-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/24d5d.svg"
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="block size-[16px] shrink-0 max-w-none"
                />
                <span aria-current="page" className="font-medium text-[#5ee878]">
                  {c.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow + Display H1 (639:14280) */}
          <div className="pt-[32px]">
            <div className="flex items-center gap-[20px]">
              <span
                aria-hidden="true"
                className="relative flex size-[10px] shrink-0 items-center justify-center"
              >
                <span className="absolute -inset-[8px] rounded-full bg-[#5ee878]/[0.32]" />
                <span className="relative size-[10px] rounded-full bg-[#5ee878]" />
              </span>
              <span className="font-sans text-[12px] font-normal leading-[18px] text-[#5ee878]">
                CLEAR COMPARISON. BETTER DECISION.
              </span>
            </div>

            <h1 className="flex flex-wrap items-start gap-[6px] pt-[32px] font-inter text-[42px] font-black uppercase leading-[1.06] tracking-[-0.045em] sm:text-[68px] lg:text-[96px] lg:leading-[normal] lg:tracking-[-5px]">
              <span className="text-white">RIDHZO</span>
              <span className="[color:#000000] [-webkit-text-fill-color:#000000] [-webkit-text-stroke:2.2px_#ffffff] [paint-order:stroke_fill] mix-blend-lighten sm:[-webkit-text-stroke:2.5px_#ffffff]">
                VS
              </span>
              <span className="text-white">{c.competitorShort.toUpperCase()}.</span>
            </h1>
          </div>

          {/* Subcopy (639:14291) */}
          <p className="max-w-[859px] pt-[24px] font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.27px] text-white/[0.64]">
            {c.heroSummary}
          </p>

          {/* Hero CTAs (639:14293) */}
          <div className="flex flex-wrap items-center gap-4 pt-[48px] sm:gap-[24px]">
            <Button href={appUrl("/signup")} size="lg" variant="primary" icon="trailing">
              Start with Ridhzo
            </Button>
            <Button
              href="#details"
              size="lg"
              variant="secondary-outline"
              trailingIcon={<FeatherArrowDown className="h-6 w-6" />}
            >
              Compare the Details
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: White Feature Comparison Matrix (639:14298) */}
      <section
        id="details"
        className="relative z-[1] bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]"
      >
        <div className="mx-auto w-full max-w-[1272px]">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start">
              <p className="font-sans text-[12px] font-normal leading-[18px] text-black">
                FEATURE COMPARISON
              </p>
              <h2 className="pt-[20px] font-inter text-[40px] font-extrabold uppercase leading-[1.06] tracking-[-0.045em] sm:text-[56px] lg:text-[72px] lg:leading-[normal] lg:tracking-[-5px]">
                <span className="block text-black">SEE THE</span>
                <span className="block">
                  <span className="text-black">REAL </span>
                  <span className="text-[#5ee878]">DIFFERENCE.</span>
                </span>
              </h2>
            </div>

            <p className="w-full max-w-[360px] pb-[12px] font-sans text-[18px] font-normal leading-[28px] text-black/[0.64]">
              Focused on meaningful workflow differences rather than listing every feature either product has ever offered.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[16px] border border-black/20 lg:mt-[72px]">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[740px] border-collapse text-left lg:table-fixed">
                <colgroup>
                  <col className="w-[220px] lg:w-[344px]" />
                  <col className="lg:w-auto" />
                  <col className="lg:w-auto" />
                </colgroup>
                <thead>
                  <tr className="bg-black">
                    <th
                      scope="col"
                      className="h-[70px] p-[24px] text-left font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.27px] text-white/[0.64]"
                    >
                      WHAT MATTERS
                    </th>
                    <th
                      scope="col"
                      className="h-[70px] border-b border-black/20 bg-[#5ee878]/[0.24] p-[24px] text-left font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.27px] text-white"
                    >
                      RIDHZO
                    </th>
                    <th
                      scope="col"
                      className="h-[70px] p-[24px] text-left font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.27px] text-white"
                    >
                      {c.competitorShort.toUpperCase()}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.atAGlance.map((row) => (
                    <tr key={row.dimension} className="border-b border-black/20 last:border-b-0">
                      <th
                        scope="row"
                        className="h-[104px] px-[24px] py-[16px] align-middle text-left font-sans text-[16px] font-normal leading-[24px] text-black"
                      >
                        {row.dimension}
                      </th>
                      <td className="h-[104px] bg-[#5ee878]/[0.24] px-[24px] py-[16px] align-middle">
                        <p className="font-sans text-[14px] font-semibold leading-[24px] text-black">
                          {row.ridhzoTitle}
                        </p>
                        <p className="font-sans text-[14px] font-normal leading-[20px] text-black/[0.64]">
                          {row.ridhzoDetail}
                        </p>
                      </td>
                      <td className="h-[104px] px-[24px] py-[16px] align-middle font-sans text-[14px] font-normal leading-[20px] text-black">
                        {row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Black "Which Fits Your Team?" Split Cards (639:14395) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto w-full max-w-[1272px]">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start lg:w-[698.203px]">
              <p className="font-sans text-[12px] font-normal leading-[18px] text-[#5ee878]">
                WHICH FITS YOUR TEAM?
              </p>
              <h2 className="pt-[20px] font-inter text-[40px] font-extrabold uppercase leading-[1.06] tracking-[-0.045em] sm:text-[56px] lg:text-[72px] lg:leading-[normal] lg:tracking-[-5px]">
                <span className="block text-white">THE RIGHT CRM</span>
                <span className="block text-[#5ee878]">FOR THE RIGHT JOB.</span>
              </h2>
            </div>

            <p className="w-full max-w-[348px] pb-[12px] font-sans text-[18px] font-normal leading-[28px] text-white/[0.64]">
              Help visitors recognize their workflow rather than just count features.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[32px] pt-12 lg:grid-cols-2 lg:pt-[72px]">
            <article className="rounded-[16px] border border-black bg-white p-[32px] text-black">
              <h3 className="font-inter text-[24px] font-bold leading-[normal] tracking-[-0.312px] text-black">
                Choose Ridhzo if…
              </h3>
              <ul className="flex flex-col gap-[16px] pt-[24px]">
                {c.ridhzoBestFor.map((item) => (
                  <li key={item} className="flex items-start gap-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      src="/figma/d6ba0.svg"
                      width={24}
                      height={24}
                      aria-hidden="true"
                      className="block size-[24px] shrink-0 max-w-none"
                    />
                    <span className="font-sans text-[16px] font-normal leading-[24px] text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[16px] border border-black/20 bg-white p-[32px] text-black">
              <h3 className="font-inter text-[24px] font-bold leading-[normal] tracking-[-0.312px] text-black">
                Consider {c.competitorShort} if…
              </h3>
              <ul className="flex flex-col gap-[16px] pt-[24px]">
                {c.competitorBestFor.map((item) => (
                  <li key={item} className="flex items-start gap-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      src="/figma/e7fd1.svg"
                      width={24}
                      height={24}
                      aria-hidden="true"
                      className="block size-[24px] shrink-0 max-w-none"
                    />
                    <span className="font-sans text-[16px] font-normal leading-[24px] text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4: Black Separate Pricing Comparison Cards (639:14441) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto w-full max-w-[1272px]">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start lg:w-[698.203px]">
              <p className="font-sans text-[12px] font-normal leading-[18px] text-[#5ee878]">
                SEPARATE PRICING COMPARISON
              </p>
              <h2 className="pt-[20px] font-inter text-[40px] font-extrabold uppercase leading-[1.06] tracking-[-0.045em] sm:text-[56px] lg:text-[72px] lg:leading-[normal] lg:tracking-[-5px]">
                <span className="block text-white">NOW, LET&apos;S</span>
                <span className="block">
                  <span className="text-white">TALK </span>
                  <span className="text-[#5ee878]">NUMBERS.</span>
                </span>
              </h2>
            </div>

            <p className="w-full max-w-[348px] pb-[12px] font-sans text-[18px] font-normal leading-[28px] text-white/[0.64]">
              Compare per-user pricing and total costs quickly. See how costs change as your team grows, balancing cost and value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[32px] pt-12 lg:grid-cols-2 lg:pt-[72px]">
            {/* Ridhzo Pricing Card (639:14453) */}
            <article className="flex flex-col rounded-[16px] border border-[#5ee878] bg-[#5ee878]/[0.12] p-[32px]">
              <p className="font-sans text-[12px] font-normal leading-[18px] text-white/[0.64]">
                {c.ridhzoPricingCard.eyebrow}
              </p>
              <h3 className="pt-[40px] font-inter text-[28px] font-bold leading-[normal] tracking-[-0.416px] text-white sm:text-[32px]">
                {c.ridhzoPricingCard.name}
              </h3>
              <p className="pb-[32px] pt-[20px] font-sans text-[14px] font-normal leading-[20px] text-white/[0.64]">
                {c.ridhzoPricingCard.description}
              </p>

              <div className="mt-auto flex flex-wrap items-end gap-x-[8px] gap-y-1">
                <span className="font-inter text-[56px] font-extrabold uppercase leading-[normal] tracking-[-3px] text-[#5ee878] sm:text-[72px] sm:tracking-[-5px]">
                  {c.ridhzoPricingCard.price}
                </span>
                <span className="pb-[10px] font-sans text-[12px] font-normal leading-[18px] text-white/[0.64] sm:pb-[14px]">
                  {c.ridhzoPricingCard.unit}
                </span>
              </div>

              <div className="pt-[20px]">
                <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] py-[16px]">
                  <span className="font-sans text-[12px] font-normal leading-[18px] text-white/[0.64]">
                    {c.ridhzoPricingCard.exampleLabel}
                  </span>
                  <span className="font-inter text-[22px] font-bold leading-[normal] tracking-[-0.312px] text-white sm:text-[24px]">
                    {c.ridhzoPricingCard.exampleTotal}
                  </span>
                </div>
              </div>
            </article>

            {/* Competitor Pricing Card (639:14472) */}
            <article className="flex flex-col rounded-[16px] border border-white/[0.16] bg-white/[0.08] p-[32px]">
              <p className="font-sans text-[12px] font-normal leading-[18px] text-white/[0.64]">
                {c.competitorPricingCard.eyebrow}
              </p>
              <h3 className="pt-[40px] font-inter text-[28px] font-bold leading-[normal] tracking-[-0.416px] text-white sm:text-[32px]">
                {c.competitorPricingCard.name}
              </h3>
              <p className="pb-[32px] pt-[20px] font-sans text-[14px] font-normal leading-[20px] text-white/[0.64]">
                {c.competitorPricingCard.description}
              </p>

              <div className="mt-auto flex flex-wrap items-end gap-x-[8px] gap-y-1">
                <span className="font-inter text-[56px] font-extrabold uppercase leading-[normal] tracking-[-3px] text-white sm:text-[72px] sm:tracking-[-5px]">
                  {c.competitorPricingCard.price}
                </span>
                <span className="pb-[10px] font-sans text-[12px] font-normal leading-[18px] text-white/[0.64] sm:pb-[14px]">
                  {c.competitorPricingCard.unit}
                </span>
              </div>

              <div className="pt-[20px]">
                <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] py-[16px]">
                  <span className="font-sans text-[12px] font-normal leading-[18px] text-white/[0.64]">
                    {c.competitorPricingCard.exampleLabel}
                  </span>
                  <span className="font-inter text-[22px] font-bold leading-[normal] tracking-[-0.312px] text-white sm:text-[24px]">
                    {c.competitorPricingCard.exampleTotal}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 5: Light FAQ Section (639:14491) */}
      <CompareFaq items={c.faqs} />

      {/* Section 6: Closing CTA (7761:4089) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[52px] font-black uppercase leading-[1.06] sm:text-[84px] lg:text-[112px] lg:leading-[normal]">
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">DON&apos;T LET</span>
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">THE NEXT</span>
            <span className="text-outline-white block tracking-normal">ONE WAIT.</span>
          </h2>

          <div className="flex w-full max-w-[510px] flex-col items-start gap-[24px] pb-[12px] lg:pl-[90px]">
            <span className="relative size-[75px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/c17ed.svg" width={75} height={75} className="block size-full max-w-none" />
            </span>

            <p className="w-full max-w-[414px] pt-[8px] font-inter text-[22px] font-medium leading-[34px] tracking-[-1.1px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.3px]">
              Your next enquiry could be your next{" "}
              <span className="italic text-[#5ee878]">big customer</span>. Be ready when it{" "}
              <span className="italic text-[#5ee878]">lands</span>.
            </p>

            <Button href={appUrl("/signup")} size="lg" variant="primary" icon="trailing">
              Start 14-Day Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
