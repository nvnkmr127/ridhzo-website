import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import type { Competitor } from "@/lib/competitors";
import { AS_OF } from "@/lib/competitors";
import { appUrl } from "@/lib/config";
import { PageHero } from "@/components/site/PageHero";
import { SiteCta } from "@/components/site/SiteCta";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { HomeButton, PageGlows, GlassCard } from "@/components/site/primitives";

const H2 = "text-2xl font-semibold tracking-[-0.02em] text-white sm:text-[28px]";

/** Full "Ridhzo vs [Competitor]" comparison page, driven by centralized data. */
export function ComparePage({ competitor: c }: { competitor: Competitor }) {
  return (
    <div className="relative">
      <PageGlows />
      <PageHero
        eyebrow="Comparison"
        title={c.title}
        crumbs={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: c.title }]}
        innerClassName="max-w-[880px]"
      >
        <GlassCard className="mt-2 p-5 sm:p-6">
          <p className="text-[13px] font-medium uppercase tracking-[0.04em] text-highlight">TL;DR</p>
          <p className="mt-2 text-base leading-7 text-white/80">{c.tldr}</p>
        </GlassCard>
        <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
          <HomeButton href={appUrl("/signup")} size="md">
            Start free with Ridhzo
          </HomeButton>
          <HomeButton href="/pricing" variant="secondary" size="md">
            See pricing
          </HomeButton>
        </div>
      </PageHero>

      <div className="relative mx-auto max-w-[880px] space-y-14 px-4 pb-8 sm:px-6 lg:px-8">
        <section aria-labelledby="at-a-glance">
          <h2 id="at-a-glance" className={H2}>
            At a glance
          </h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/12 bg-white/[0.04]">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/12">
                  <th scope="col" className="px-5 py-4 text-xs font-medium uppercase tracking-[0.04em] text-white/50">
                    Dimension
                  </th>
                  <th scope="col" className="px-5 py-4 text-base font-semibold text-highlight">
                    Ridhzo
                  </th>
                  <th scope="col" className="px-5 py-4 text-base font-semibold text-white">
                    {c.competitorShort}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.atAGlance.map((row) => (
                  <tr key={row.dimension} className="border-t border-white/10 align-top">
                    <th scope="row" className="px-5 py-4 text-sm font-medium text-white">
                      {row.dimension}
                    </th>
                    <td className="px-5 py-4 text-sm leading-6 text-white/80">{row.ridhzo}</td>
                    <td className="px-5 py-4 text-sm leading-6 text-white/65">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-white/50">
            {c.competitorShort} is {c.competitorCategory}. Competitor details as of {AS_OF} — please verify current pricing
            and features on their site.
          </p>
        </section>

        <section className="space-y-10">
          {c.narrative.map((section) => (
            <div key={section.heading}>
              <h2 className={H2}>{section.heading}</h2>
              <p className="mt-3 text-base leading-7 text-white/65 sm:text-lg">{section.body}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border-2 border-highlight/50 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Choose Ridhzo if…</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
              {c.ridhzoBestFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-highlight" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <GlassCard>
            <h2 className="text-lg font-semibold text-white">Choose {c.competitorShort} if…</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
              {c.competitorBestFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-white/40" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </section>

        <section>
          <h2 className={H2}>Pricing</h2>
          <p className="mt-3 text-base leading-7 text-white/65 sm:text-lg">{c.pricingNote}</p>
          <Link
            href="/pricing"
            className="focus-ring mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-highlight hover:text-highlight-soft"
          >
            View Ridhzo pricing <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>

        <section>
          <h2 className={H2}>Switching to Ridhzo</h2>
          <p className="mt-3 text-base leading-7 text-white/65 sm:text-lg">{c.migration}</p>
        </section>

        <div className="border-t border-white/10 pt-6">
          <Link
            href="/compare"
            className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-medium text-white/65 transition-colors hover:text-white"
          >
            See all comparisons <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <FaqAccordion items={c.faqs} title={`${c.competitorShort} vs Ridhzo, answered.`} contactLabel="Ask us anything" />
      <SiteCta />
    </div>
  );
}
