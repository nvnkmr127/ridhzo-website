"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Eyebrow, SectionTitle, Lead, HomeSection } from "./primitives";

export interface FaqItem {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

/**
 * Two-column FAQ from the homepage design: heading on the left, accordion on the right.
 * Also emits FAQPage structured data so every FAQ on the site is eligible for rich results.
 */
export function FaqAccordion({
  id = "faq",
  items,
  eyebrow = "FAQ",
  title,
  lead,
  contactLabel = "Talk to our team",
}: {
  id?: string;
  items: readonly FaqItem[];
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  contactLabel?: string | null;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <HomeSection id={id}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-10 lg:grid-cols-[488px_1fr] lg:gap-14">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow className="w-fit">{eyebrow}</Eyebrow>
            <SectionTitle>{title}</SectionTitle>
            {lead ? <Lead>{lead}</Lead> : null}
          </div>
          {contactLabel ? (
            <Link
              href="/contact"
              className="focus-ring inline-flex h-12 items-center gap-2 rounded-xl text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {contactLabel} <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        <div className="border-t border-white/30">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/30 py-5">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="focus-ring flex w-full items-center justify-between gap-4 px-2 text-left text-base leading-6 text-white"
                  >
                    {f.q}
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-highlight" aria-hidden="true" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-highlight" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                {isOpen && (
                  <div id={`${id}-panel-${i}`} className="px-2 pt-1">
                    <p className="text-sm leading-6 text-white/65">{f.a}</p>
                    {f.link && (
                      <Link href={f.link.href} className="mt-2 inline-block text-sm text-highlight underline underline-offset-4">
                        {f.link.label}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </HomeSection>
  );
}
