"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does Ridhzo install like a native mobile app on iPhone and Android?",
      a: "Yes. Ridhzo is engineered as an installable Progressive Web App (PWA). You can tap 'Add to Home Screen' directly from Safari (iOS) or Chrome (Android) to get a full-screen, standalone app with vibrating push notifications and instantaneous home-screen launching—with zero app store download hurdles.",
    },
    {
      q: "Do I need complex Meta Business API approvals or BSP verification to start?",
      a: "No. Ridhzo features zero-barrier 1-tap native WhatsApp messaging out of the box. Clicking '1-Tap WhatsApp' opens WhatsApp on your phone or desktop with the prospect's phone number and a personalized template pre-filled with dynamic tokens ({{name}}, {{interest}}, {{budget}}). You don't need any API credentials or Meta verification to begin closing immediately.",
    },
    {
      q: "How does the offline mode work when reps lose mobile signal in the field?",
      a: "If you are in an elevator, basement, or remote site without network coverage, you can still open Ridhzo, create new leads, and add timeline notes. Ridhzo buffers mutations in a zero-dependency IndexedDB outbox and automatically syncs them to PostgreSQL the second your connection restores.",
    },
    {
      q: "How does atomic row-locked round-robin prevent lead-grabbing?",
      a: "When a new lead arrives via Meta Ads or webhooks, Ridhzo executes an atomic PostgreSQL 'SELECT ... FOR UPDATE' transaction. This prevents concurrent workers from double-assigning leads and distributes inquiries evenly across active reps while strictly respecting individual capacity caps (maxCapacity).",
    },
    {
      q: "What inbound lead sources can I connect?",
      a: "Ridhzo provides out-of-the-box support for Meta (Facebook & Instagram) Lead Ads via direct webhooks, Google Ads lead form webhooks, hosted & embeddable web forms (sharable landing pages or embeddable iframe/JS snippets), and custom JSON webhooks with automatic regex E.164 phone and email deduplication.",
    },
    {
      q: "What is the 'Going Cold' radar and how does it prevent deal decay?",
      a: "The Going Cold radar continuously monitors communication recency. The moment an active lead goes silent past your configured threshold (default 14 days), it surfaces on the /leads/cold radar with pre-filled WhatsApp re-engagement links and a 1-click 'Escalate all to High' button that pushes them to the top of daily priority call feeds.",
    },
    {
      q: "Can I use Ridhzo for free without a credit card?",
      a: "Yes! The Free forever plan includes up to 100 active leads, 1 workspace seat, 1-tap WhatsApp deep links, PWA mobile installation, and the offline outbox. You can upgrade to Starter (₹249/mo) or Unlimited (₹449/mo) as your lead volume expands.",
    },
  ];

  return (
    <section id="faq" className="py-24 border-t border-border bg-background relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Everything you need to know about architecture, speed-to-lead, and getting started.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card overflow-hidden transition-colors hover:border-foreground/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-foreground transition-all"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-foreground" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${idx}`}
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

