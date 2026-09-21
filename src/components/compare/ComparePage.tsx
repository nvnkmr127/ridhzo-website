import Link from "next/link";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import type { Competitor } from "@/lib/competitors";
import { AS_OF } from "@/lib/competitors";
import { appUrl } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/marketing/CtaBanner";

const SITE_URL = "https://ridhzo.com";

/** Full "Ridhzo vs [Competitor]" comparison page, driven by centralized data. */
export function ComparePage({ competitor: c }: { competitor: Competitor }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <header className="border-b border-border bg-card/40 py-8 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Link href="/" className="focus-ring rounded-sm hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href="/compare" className="focus-ring rounded-sm hover:text-foreground">Compare</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="truncate text-foreground">{c.title}</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Comparison
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            {c.title}
          </h1>

          <div className="mt-5 rounded-xl border border-border bg-secondary/30 p-4 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">TL;DR</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.tldr}</p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button asChild size="sm" className="h-10 bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold">
              <Link href={appUrl("/signup")} className="flex items-center gap-1.5">
                <span>Start free with Ridhzo</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
            <Link href="/pricing" className="focus-ring rounded-sm text-xs font-medium text-muted-foreground hover:text-foreground">
              See pricing
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* At-a-glance table */}
        <section aria-labelledby="at-a-glance">
          <h2 id="at-a-glance" className="text-xl font-bold text-foreground sm:text-2xl">
            At a glance
          </h2>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-card/60">
                  <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dimension</th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold text-foreground">Ridhzo</th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold text-foreground">{c.competitorShort}</th>
                </tr>
              </thead>
              <tbody>
                {c.atAGlance.map((row) => (
                  <tr key={row.dimension} className="border-t border-border/70 align-top">
                    <th scope="row" className="px-4 py-3 text-xs font-medium text-foreground">{row.dimension}</th>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.ridhzo}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {c.competitorShort} is {c.competitorCategory}. Competitor details as of {AS_OF} — please verify current pricing and features on their site.
          </p>
        </section>

        {/* Narrative comparison */}
        <section className="mt-12 space-y-8">
          {c.narrative.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </section>

        {/* Who each is for */}
        <section className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-foreground/30 bg-card p-5">
            <h2 className="text-sm font-bold text-foreground">Choose Ridhzo if…</h2>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              {c.ridhzoBestFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-bold text-foreground">Choose {c.competitorShort} if…</h2>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              {c.competitorBestFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-12">
          <h2 className="text-lg font-bold text-foreground sm:text-xl">Pricing</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.pricingNote}</p>
          <Link href="/pricing" className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded-sm text-xs font-medium text-foreground hover:text-foreground/80">
            View Ridhzo pricing
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </section>

        {/* Migration */}
        <section className="mt-12">
          <h2 className="text-lg font-bold text-foreground sm:text-xl">Switching to Ridhzo</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.migration}</p>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-lg font-bold text-foreground sm:text-xl">FAQ</h2>
          <dl className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
            {c.faqs.map((f) => (
              <div key={f.q} className="p-5">
                <dt className="text-sm font-semibold text-foreground">{f.q}</dt>
                <dd className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Related comparisons handled on the index; simple back link here */}
        <div className="mt-12 border-t border-border pt-6">
          <Link href="/compare" className="focus-ring inline-flex items-center gap-1.5 rounded-sm text-xs font-medium text-muted-foreground hover:text-foreground">
            See all comparisons
          </Link>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}

export const COMPARE_SITE_URL = SITE_URL;
