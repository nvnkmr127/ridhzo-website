import { Fragment } from "react";
import Link from "next/link";
import { appUrl } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/site/Button";
import { PIPELINE_FAQ_JSON_LD } from "./pipeline-faqs";
import { PipelineBoardPreview, PipelineFaq } from "./PipelineInteractive";

const LESS_GUESSWORK_CARDS = [
  {
    num: "01",
    icon: "/figma/70cc9.svg",
    title: "A stage for every step.",
    description: "See new, active, won or lost work without opening every record.",
  },
  {
    num: "02",
    icon: "/figma/af8c5.svg",
    title: "Move with one gesture.",
    description: "Drag an opportunity into the next stage as progress happens.",
  },
  {
    num: "03",
    icon: "/figma/3d61e.svg",
    title: "Spot what needs a nudge.",
    description: "Know which leads are sitting still and need follow-through.",
  },
] as const;

const PIPELINE_FLOW_STAGES = [
  {
    step: "01 / NEW",
    title: "Enquiry received",
    subtitle: "Source and owner added",
    highlighted: false,
  },
  {
    step: "02 / ACTIVE",
    title: "Follow-up underway",
    subtitle: "Call or meeting planned",
    highlighted: false,
  },
  {
    step: "03 / WON",
    title: "Deal closed",
    subtitle: "Status updated ✓",
    highlighted: true,
  },
] as const;

const KEEP_EXPLORING_CARDS = [
  {
    title: "Lead Management",
    href: "/features/lead-management",
    icon: "/figma/3744b.svg",
  },
  {
    title: "Insights",
    href: "/features/dashboards",
    icon: "/figma/7931b.svg",
  },
  {
    title: "Follow-ups",
    href: "/features/follow-ups",
    icon: "/figma/7931b.svg",
  },
] as const;

/**
 * Pixel-accurate implementation of Figma `Pipeline` (`573:22782`):
 * Hero ("MAKE EVERY DEAL VISIBLE.") -> 3-card grid ("KNOW WHERE THE NEXT MOVE BELONGS.")
 * -> Stage flow ("FROM NEW. TO ACTIVE. TO DONE.") -> FAQ ("GOOD QUESTIONS. CLEAR ANSWERS.")
 * -> Keep Exploring ("NEXT, CONNECT THE DOTS.") -> Closing CTA ("DON'T LET THE NEXT ONE WAIT.").
 */
export function PipelineView() {
  return (
    <div className="relative">
      {/* Section 1: Hero (573:22787) — no z-index on inner container so mix-blend-lighten blends DEAL VISIBLE. over glow */}
      <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
        {/* Ambient green glow behind the pipeline board (573:22788) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[280px] flex h-[449.144px] w-[587.504px] -translate-x-1/2 items-center justify-center lg:left-[calc(50%+28px)] lg:top-[223px] lg:translate-x-0"
        >
          <div className="flex-none rotate-[92.4deg]">
            <div className="relative h-[570.158px] w-[425.608px]">
              <div className="absolute inset-[-44.92%_-60.18%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/d265f.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1272px]">
          {/* Breadcrumbs (573:22790) */}
          <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] pb-5 lg:pb-[24px]">
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
                  href="/features"
                  className="focus-ring rounded-sm text-white/[0.48] transition-colors hover:text-white"
                >
                  Product
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
                  Pipeline
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero Main Row (573:22797) */}
          <div className="flex flex-col items-start justify-between gap-12 pt-[32px] lg:flex-row lg:items-center lg:gap-8 min-[1380px]:gap-0">
            {/* Left Copy Column (573:22798) */}
            <div className="flex w-full min-w-0 flex-col items-start min-[1380px]:w-[598px] min-[1380px]:shrink-0">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 sm:gap-[20px]">
                <span
                  aria-hidden="true"
                  className="-my-[4px] flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#5ee878]/[0.32]"
                >
                  <span className="size-[10px] rounded-full bg-[#5ee878]" />
                </span>
                <span className="type-label text-[#5ee878]">
                  ONE CONNECTED WAY TO SELL
                </span>
              </div>

              {/* H1 (573:22804) */}
              <h1 className="pt-[32px] font-inter text-[42px] font-black uppercase leading-[1.06] tracking-[-0.05em] sm:text-[72px] lg:text-[64px] xl:text-[80px] min-[1380px]:text-[96px] min-[1380px]:leading-[116px] min-[1380px]:tracking-[-5px]">
                <span className="block text-white">MAKE EVERY</span>
                <span className="block tracking-[-0.05em] [color:#000000] [-webkit-text-fill-color:#000000] [-webkit-text-stroke:2.2px_#ffffff] [paint-order:stroke_fill] mix-blend-lighten sm:[-webkit-text-stroke:2.5px_#ffffff] min-[1380px]:tracking-[-5px]">
                  DEAL
                </span>
                <span className="block tracking-[-0.05em] [color:#000000] [-webkit-text-fill-color:#000000] [-webkit-text-stroke:2.2px_#ffffff] [paint-order:stroke_fill] mix-blend-lighten sm:[-webkit-text-stroke:2.5px_#ffffff] min-[1380px]:tracking-[-5px]">
                  VISIBLE.
                </span>
              </h1>

              {/* Subcopy (573:22810) */}
              <p className="type-body-lg max-w-[598px] pt-[24px] text-white/[0.64]">
                When a lead changes stage, the whole team sees what moved. Ridhzo&apos;s Kanban board organizes opportunities from New to Active to Won, Lost and beyond.
              </p>

              {/* CTA (573:22812) */}
              <div className="pt-[32px]">
                <Button href={appUrl("/signup")} size="lg" variant="primary" icon="trailing">
                  Start 14-Day Free Trial
                </Button>
              </div>
            </div>

            {/* Right Interactive Pipeline Board (573:22813) */}
            <PipelineBoardPreview />
          </div>
        </div>
      </section>

      {/* Section 2: Less Guesswork (573:22865) */}
      <section className="relative z-[1] bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start">
              <p className="type-label text-black">
                LESS GUESSWORK
              </p>
              <h2 className="pt-[20px] font-inter text-[34px] font-extrabold uppercase leading-[1.06] tracking-[-0.05em] sm:text-[56px] lg:text-[64px] min-[1380px]:text-[72px] lg:leading-[normal] min-[1380px]:tracking-[-5px]">
                <span className="block text-black">KNOW WHERE THE</span>
                <span className="block text-[#5ee878]">NEXT MOVE BELONGS.</span>
              </h2>
            </div>

            <p className="type-body-lg w-full pb-[12px] text-black/[0.64] lg:w-[400px] lg:shrink-0">
              Drag and drop between stages in the real product; the demo above illustrates how a lead changes status.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 pt-12 md:grid-cols-3 lg:gap-[32px] lg:pt-[72px]">
            {LESS_GUESSWORK_CARDS.map((card) => (
              <article
                key={card.num}
                className="flex flex-col justify-between gap-[56px] rounded-[12px] border border-black/20 bg-white p-[24px] sm:p-[32px] lg:gap-[80px]"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="type-body-sm text-black/[0.48]">
                    {card.num}
                  </span>
                  <span className="flex h-[26px] w-[23px] items-start justify-end" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src={card.icon} width={23} height={23} className="block size-[23px] max-w-none" />
                  </span>
                </div>

                <div className="flex w-full flex-col items-start">
                  <h3 className="type-h4 pb-[12px] text-black">
                    {card.title}
                  </h3>
                  <p className="type-body text-black/[0.64]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Your Pipeline / Without the Noise (573:22914) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[88px]">
        {/* Ambient green glow (573:22915) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[calc(50%+160px)] top-[320px] flex h-[622.243px] w-[390.816px] items-center justify-center lg:left-[calc(50%+425px)] lg:top-[278px]"
        >
          <div className="flex-none rotate-[71.12deg]">
            <div className="relative h-[213.078px] w-[584.755px]">
              <div className="absolute inset-[-150.18%_-54.72%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/0fd97.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-8 min-[1380px]:gap-0">
          {/* Left column (573:22919) */}
          <div className="flex w-full min-w-0 flex-col items-start min-[1380px]:w-[500px] min-[1380px]:shrink-0">
            <p className="type-label text-[#5ee878]">
              YOUR PIPELINE / WITHOUT THE NOISE
            </p>
            <h2 className="pt-[16px] font-inter text-[34px] font-extrabold uppercase leading-[1.06] tracking-[-0.05em] sm:text-[56px] lg:text-[64px] min-[1380px]:text-[72px] lg:leading-[normal] min-[1380px]:tracking-[-5px]">
              <span className="block text-white">FROM NEW.</span>
              <span className="block text-white">TO ACTIVE.</span>
              <span className="block text-[#5ee878]">TO DONE.</span>
            </h2>

            <p className="type-body-lg w-full max-w-[500px] pt-[32px] text-white/[0.64]">
              The board turns scattered status updates into a shared picture of sales progress. A card stays linked to its lead record, owner and next action.
            </p>
          </div>

          {/* Right 3-Stage Flow Cards (573:22927) */}
          <div className="grid w-full grid-cols-1 items-center gap-[8px] sm:grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)] lg:w-[540px] lg:shrink-0 xl:w-[600px] min-[1380px]:w-[649.641px] min-[1380px]:grid-cols-[195.21px_16px_195.21px_16px_195.22px]">
            {PIPELINE_FLOW_STAGES.map((stage, idx) => (
              <Fragment key={stage.step}>
                {idx > 0 ? (
                  <span
                    aria-hidden="true"
                    className="flex h-[19px] items-center justify-center font-sans text-[16px] font-normal leading-normal text-[#5ee878] max-sm:rotate-90"
                  >
                    →
                  </span>
                ) : null}
                <div
                  className={cn(
                    "flex min-h-[180px] flex-col items-start rounded-[11px] border p-[16px]",
                    stage.highlighted
                      ? "border-[#5ee878] bg-white"
                      : "border-white/[0.16] bg-white/[0.06]",
                  )}
                >
                  <div className="flex h-[19px] w-full items-end">
                    <span
                      className={cn(
                        "font-inter text-[10px] font-normal leading-normal tracking-[0.72px]",
                        stage.highlighted ? "text-black" : "text-white/[0.64]",
                      )}
                    >
                      {stage.step}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "pt-[16px] font-inter text-[20px] font-bold leading-normal tracking-[-0.76px]",
                      stage.highlighted ? "text-black" : "text-white",
                    )}
                  >
                    {stage.title}
                  </p>
                  <p
                    className={cn(
                      "pt-[12px] font-inter text-[11px] font-medium leading-normal",
                      stage.highlighted ? "text-black" : "text-white/[0.64]",
                    )}
                  >
                    {stage.subtitle}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Common Questions (573:22994) */}
      <section className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PIPELINE_FAQ_JSON_LD) }}
        />
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start gap-10 lg:flex-row lg:gap-[48px]">
          <div className="flex w-full flex-col items-start lg:w-[460px] lg:shrink-0 min-[1320px]:w-[589px]">
            <p className="type-label text-black">
              COMMON QUESTIONS
            </p>
            <h2 className="whitespace-pre-wrap pt-[20px] font-inter text-[34px] font-extrabold uppercase leading-[1.06] tracking-[-0.04em] sm:text-[56px] lg:text-[60px] min-[1320px]:text-[72px] lg:leading-[normal] min-[1320px]:tracking-[-5px]">
              <span className="block text-black">{"GOOD "}</span>
              <span className="block text-black">QUESTIONS.</span>
              <span className="block text-[#5ee878]">{"CLEAR  ANSWERS."}</span>
            </h2>
          </div>

          <PipelineFaq />
        </div>
      </section>

      {/* Section 5: Keep Exploring (573:22954) */}
      <section className="relative z-[1] bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start">
              <p className="type-label text-black">
                KEEP EXPLORING
              </p>
              <h2 className="pt-[20px] font-inter text-[34px] font-extrabold uppercase leading-[1.06] tracking-[-0.04em] sm:text-[56px] lg:w-[640px] min-[1320px]:w-[760px] lg:text-[64px] min-[1320px]:text-[72px] lg:leading-[normal] min-[1320px]:tracking-[-5px]">
                <span className="block text-black">{"NEXT, CONNECT "}</span>
                <span className="block text-[#5ee878]">THE DOTS.</span>
              </h2>
            </div>

            <p className="type-body-lg w-full text-black/[0.64] lg:w-[400px] lg:shrink-0">
              Everything has its own role. Explore the related tools that complete the workflow.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 pt-12 md:grid-cols-3 lg:gap-[32px] lg:pt-[72px]">
            {KEEP_EXPLORING_CARDS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring focus-ring-light group flex min-h-[180px] flex-col rounded-[13px] border border-black/20 bg-white p-[28px] transition-colors hover:border-black/[0.48]"
              >
                <span className="type-label text-black/[0.48]">
                  EXPLORE
                </span>
                <div className="flex flex-1 flex-col justify-end pb-[4px] pt-8">
                  <h3 className="type-h4 text-black">
                    {item.title}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="ml-auto flex h-[30px] w-[26px] items-start justify-end"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src={item.icon}
                    width={26}
                    height={26}
                    className="block size-[26px] max-w-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Closing CTA (573:23007) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.06] sm:text-[84px] lg:text-[112px] lg:leading-[normal]">
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">
              DON&apos;T LET
            </span>
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">
              THE NEXT
            </span>
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

