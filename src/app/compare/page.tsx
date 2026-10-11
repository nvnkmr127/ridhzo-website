import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPETITORS } from "@/lib/competitors";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { SiteCta } from "@/components/site/SiteCta";
import { HomeSection, PageGlows } from "@/components/site/primitives";

export const metadata = pageMetadata({
  title: "Compare Ridhzo",
  description:
    "Honest comparisons of Ridhzo vs Zoho CRM, LeadSquared, Kylas, and AiSensy — see how a mobile-first, WhatsApp-native speed-to-lead CRM stacks up, and which tool fits you.",
  path: "/compare",
});

export default function CompareIndexPage() {
  return (
    <div className="relative">
      <PageGlows />
      <PageHero
        eyebrow="Comparison"
        title="How Ridhzo compares"
        lead="Straight, honest comparisons — including where each tool wins. See how Ridhzo's mobile-first, WhatsApp-native, speed-to-lead approach stacks up against popular CRMs and messaging platforms."
        crumbs={[{ label: "Home", href: "/" }, { label: "Compare" }]}
      />
      <HomeSection className="pt-4 sm:pt-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETITORS.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="focus-ring group flex h-full flex-col rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition-colors hover:border-highlight/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">{c.title}</h2>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {c.competitorShort} is {c.competitorCategory}.
              </p>
            </Link>
          ))}
        </div>
      </HomeSection>
      <SiteCta />
    </div>
  );
}
