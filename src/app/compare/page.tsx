import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPETITORS } from "@/lib/competitors";

export const metadata: Metadata = {
  title: "Compare Ridhzo",
  description:
    "Honest comparisons of Ridhzo vs Zoho CRM, LeadSquared, Kylas, and AiSensy — see how a mobile-first, WhatsApp-native speed-to-lead CRM stacks up, and which tool fits you.",
  alternates: { canonical: "/compare" },
};

export default function CompareIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Comparison
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How Ridhzo compares
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Straight, honest comparisons — including where each tool wins. See how Ridhzo&apos;s
            mobile-first, WhatsApp-native, speed-to-lead approach stacks up against popular CRMs
            and messaging platforms.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETITORS.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="focus-ring group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/30 hover:bg-secondary/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-sm font-bold text-foreground">{c.title}</h2>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {c.competitorShort} is {c.competitorCategory}.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
