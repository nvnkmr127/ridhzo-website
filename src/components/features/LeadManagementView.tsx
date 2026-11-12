import Link from "next/link";
import { appUrl } from "@/lib/config";
import { Button } from "@/components/site/Button";
import { LEAD_FAQ_JSON_LD } from "./lead-management-faqs";
import {
  LeadInboxPreview,
  LeadManagementFaq,
  LeadProfilePreview,
} from "./LeadManagementInteractive";

const WORKSPACE_CARDS = [
  {
    num: "01",
    icon: "/figma/2984f.svg",
    title: "One organized list.",
    description:
      "Bring enquiries from forms, campaigns and other sources into one lead workspace.",
  },
  {
    num: "02",
    icon: "/figma/a4891.svg",
    title: "Every lead has an owner.",
    description:
      "Assign responsibility, review status and see who should act next.",
  },
  {
    num: "03",
    icon: "/figma/3d61e.svg",
    title: "Focus on the next action.",
    description:
      "Spot leads that need attention instead of chasing updates.",
  },
] as const;

const REACH_OUT_STEPS = [
  { num: "01", label: "Call the lead directly" },
  { num: "02", label: "Open WhatsApp from the record" },
  { num: "03", label: "Set a follow-up or meeting" },
] as const;

const KEEP_EXPLORING_CARDS = [
  {
    title: "Pipeline stages",
    href: "/features/pipeline-kanban",
    icon: "/figma/3744b.svg",
  },
  {
    title: "Automations",
    href: "/features/automations",
    icon: "/figma/7931b.svg",
  },
  {
    title: "Mobile App",
    href: "/features/mobile-pwa",
    icon: "/figma/7931b.svg",
  },
] as const;

/**
 * Pixel-accurate implementation of Figma `Lead Management` (`573:22498`):
 * Hero ("EVERY LEAD. READY FOR ACTION.") -> Workspace 3-card grid ("GET TO THE RIGHT LEAD. SKIP THE SEARCH.")
 * -> Context/Profile ("THE CONTEXT. THE CONTACT. THE NEXT MOVE.") -> FAQ ("GOOD QUESTIONS. CLEAR ANSWERS.")
 * -> Keep Exploring ("NEXT, CONNECT THE DOTS.") -> Closing CTA ("DON'T LET THE NEXT ONE WAIT.").
 */
export function LeadManagementView() {
  return (
    <div className="relative">
      {/* Section 1: Hero (573:22503) — no z-index on inner container so mix-blend-lighten blends ACTION. over glow */}
      <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
        {/* Ambient green glow behind the lead inbox card (573:22504) */}
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
          {/* Breadcrumbs (573:22505) */}
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
                  Lead Management
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero Main Row (573:22512) */}
          <div className="flex flex-col items-start justify-between gap-12 pt-[32px] lg:flex-row lg:items-center lg:gap-0">
            {/* Left Copy Column (573:22513) */}
            <div className="flex w-full flex-col items-start lg:w-[587px] lg:shrink-0">
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

              {/* H1 (573:22519) */}
              <h1 className="pt-[32px] font-inter text-[42px] font-black uppercase leading-[1.06] tracking-[-0.05em] sm:text-[72px] lg:text-[96px] lg:leading-[116px] lg:tracking-[-5px]">
                <span className="block text-white">EVERY LEAD.</span>
                <span className="block text-white">READY FOR</span>
                <span className="block tracking-[-0.05em] [color:#000000] [-webkit-text-fill-color:#000000] [-webkit-text-stroke:2.2px_#ffffff] [paint-order:stroke_fill] mix-blend-lighten sm:[-webkit-text-stroke:2.5px_#ffffff] lg:tracking-[-5px]">
                  ACTION.
                </span>
              </h1>

              {/* Subcopy (573:22525) */}
              <p className="type-body-lg max-w-[480px] pt-[24px] text-white/[0.64]">
                One workspace for the details that matter. Find the right record, know who owns it, and take the next step through a call, WhatsApp or meeting.
              </p>

              {/* CTA (573:22526) */}
              <div className="pt-[32px]">
                <Button href={appUrl("/signup")} size="lg" variant="primary" icon="trailing">
                  Start 14-Day Free Trial
                </Button>
              </div>
            </div>

            {/* Right Interactive Lead Inbox Card (573:22528) */}
            <LeadInboxPreview />
          </div>
        </div>
      </section>

      {/* Section 2: The Workspace (573:22581) */}
      <section className="relative z-[1] bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start">
              <p className="type-label text-black">
                THE WORKSPACE
              </p>
              <h2 className="type-h2 pt-[20px] lg:w-[655px]">
                <span className="block text-black">GET TO THE RIGHT LEAD.</span>
                <span className="block text-[#5ee878]">SKIP THE SEARCH.</span>
              </h2>
            </div>

            <p className="type-body-lg w-full pb-[12px] text-black/[0.64] lg:w-[400px] lg:shrink-0">
              The lead list in Ridhzo offers views, status filters and searching by contact information. This example uses safe demo records.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 pt-12 md:grid-cols-3 lg:gap-[32px] lg:pt-[72px]">
            {WORKSPACE_CARDS.map((card) => (
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

      {/* Section 3: From Record to Reach-Out (573:22632) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[88px]">
        {/* Ambient green glow (573:22633) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[calc(50%+160px)] top-[420px] flex h-[622.243px] w-[390.816px] items-center justify-center lg:left-[calc(50%+441px)] lg:top-[381px]"
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

        <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0">
          {/* Left column (573:22637) */}
          <div className="flex w-full flex-col items-start lg:w-[554px] lg:shrink-0">
            <p className="type-label text-[#5ee878]">
              FROM RECORD TO REACH-OUT
            </p>
            <h2 className="type-h2 pt-[16px]">
              <span className="block text-white">THE CONTEXT.</span>
              <span className="block text-white">THE CONTACT.</span>
              <span className="block text-[#5ee878]">THE NEXT MOVE.</span>
            </h2>

            <p className="type-body-lg w-full pt-[32px] text-white/[0.64]">
              Ridhzo is not an in-app customer chat inbox. Your sales rep opens the lead profile, then uses the appropriate contact action.
            </p>

            <ol className="w-full pt-[32px]">
              <li className="border-t border-white/[0.08]" aria-hidden="true" />
              {REACH_OUT_STEPS.map((step) => (
                <li
                  key={step.num}
                  className="flex h-[50px] w-full items-center border-b border-white/[0.08]"
                >
                  <span className="w-[32.23px] shrink-0 font-sans text-[12px] font-normal leading-[18px] text-[#5ee878]">
                    {step.num}
                  </span>
                  <span className="type-body-sm text-white/80">
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Right Tilted Lead Profile Card (573:22656) */}
          <LeadProfilePreview />
        </div>
      </section>

      {/* Section 4: Common Questions (573:22753) */}
      <section className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LEAD_FAQ_JSON_LD) }}
        />
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start gap-10 lg:flex-row lg:gap-[48px]">
          <div className="flex w-full flex-col items-start lg:w-[589px] lg:shrink-0">
            <p className="type-label text-black">
              COMMON QUESTIONS
            </p>
            <h2 className="type-h2 whitespace-pre-wrap pt-[20px]">
              <span className="block text-black">{"GOOD "}</span>
              <span className="block text-black">QUESTIONS.</span>
              <span className="block text-[#5ee878]">{"CLEAR  ANSWERS."}</span>
            </h2>
          </div>

          <LeadManagementFaq />
        </div>
      </section>

      {/* Section 5: Keep Exploring (573:22713) */}
      <section className="relative z-[1] bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="flex flex-col items-start">
              <p className="type-label text-black">
                KEEP EXPLORING
              </p>
              <h2 className="type-h2 pt-[20px] lg:w-[760px]">
                <span className="block text-black">NEXT, CONNECT</span>
                <span className="block text-[#5ee878]">THE DOTS.</span>
              </h2>
            </div>

            <p className="type-body-lg w-full pb-[12px] text-black/[0.64] lg:w-[400px] lg:shrink-0">
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

      {/* Section 6: Closing CTA (573:22768) */}
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

