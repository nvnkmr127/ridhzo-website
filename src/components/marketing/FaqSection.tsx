"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does Ridhzo install like a native mobile app on iPhone and Android?",
      a: "Yes. Yes. Tap 'Add to Home Screen' in Safari (iPhone) or Chrome (Android) and Ridhzo opens full-screen with its own icon and push notifications — no app-store download needed. The app is available in English, Hindi and Telugu.",
    },
    {
      q: "Do I need the WhatsApp Business API to start?",
      a: "No. Tap 'WhatsApp' on any lead and your own WhatsApp opens with the chat and a personalised template ready — {{first_name}}, {{name}}, {{company}} and more fill in automatically. No saving numbers, no approvals. Connect the official WhatsApp Business API later if you want automatic welcome messages, sequences and bulk campaigns.",
    },
    {
      q: "How does the offline mode work when reps lose mobile signal in the field?",
      a: "If you are in an elevator, basement, or remote site without network coverage, you can still add new leads in Ridhzo. They're saved safely on your phone and uploaded automatically the moment your connection returns — then assigned and alerted like any other lead.",
    },
    {
      q: "How does Ridhzo stop reps fighting over leads?",
      a: "Every new lead is assigned automatically — round-robin, by team, by capacity or by your own rules — so nobody has to grab leads. Rotation stays fair even when many leads arrive at once, deactivated reps are skipped, and each rep sees only the leads assigned to them.",
    },
    {
      q: "What inbound lead sources can I connect?",
      a: "Facebook & Instagram Lead Ads (one-click connect, plus past-lead sync), Google Lead Form Ads, hosted and embeddable web forms, website webhooks (Zapier, Make, Pabbly), the REST API, CSV import, Quick Add, and missed calls. Duplicates are detected by phone and email. LinkedIn Lead Gen Forms are coming soon.",
    },
    {
      q: "What is the 'Going Cold' list?",
      a: "It automatically lists open leads nobody has contacted for 14 days, with a ready re-engagement WhatsApp and a call button for each. One click on 'Escalate all to High' pushes them all to the top of your team's priorities.",
    },
    {
      q: "Can I use Ridhzo for free without a credit card?",
      a: "Yes! The Free forever plan includes up to 300 leads, 1 user, 1 lead source, 2 automations, 1 sequence, 15 AI credits a month, 1-tap WhatsApp, push alerts, the mobile app and offline capture. You can upgrade to Starter (₹249/mo) or Unlimited (₹449/mo) as your lead volume expands.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-border bg-background relative">
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
            Everything you need to know about getting started, WhatsApp, your team and pricing.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 space-y-3">
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

