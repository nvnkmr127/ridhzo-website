"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";

const FAQS = [
  {
    q: "Can I use Ridhzo for free?",
    a: "Yes. The Free plan is ₹0 forever and gives you a practical way to start capturing and managing inbound leads before you upgrade.",
  },
  {
    q: "Is there a trial for paid plans?",
    a: "Yes. Every new workspace starts on a 14-day Starter trial with no card required. When the trial ends it moves to the Free plan unless you subscribe, and nothing is ever deleted.",
  },
  {
    q: "How does Ridhzo pricing work?",
    a: "There are three plans: Free (₹0), Starter (₹249/month, or ₹2,490/year) and Unlimited (₹449/month, or ₹4,490/year). Yearly plans include 2 months free, and prices exclude 18% GST.",
  },
  {
    q: "Is pricing per company or per user?",
    a: "Pricing is per workspace, and each plan includes a set number of team seats: 1 user on Free, 3 team seats on Starter and unlimited seats on Unlimited.",
  },
  {
    q: "Can my team use WhatsApp with Ridhzo?",
    a: "Yes. Tap WhatsApp on any lead and your own WhatsApp opens with the chat and a personalised template ready. You can connect the official WhatsApp Business API later for automatic welcome messages, sequences and bulk campaigns.",
  },
  {
    q: "Is my sales data secure?",
    a: "Ridhzo enforces workspace boundaries in the application on every request, and you stay in control of your data, including when it leaves Ridhzo. The security page has the full details.",
    link: { href: "/security", label: "Read about security" },
  },
  {
    q: "Are there limits on leads and automation?",
    a: "Free includes up to 300 leads and 2 automations, Starter up to 5,000 leads and 15 automations, and Unlimited has no limits on leads, lead sources, automations or follow-up sequences.",
  },
];

export function FaqHomeSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <HomeSection id="faq">
      <div className="grid gap-10 lg:grid-cols-[488px_1fr] lg:gap-14">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow className="w-fit">FAQ</Eyebrow>
            <SectionTitle>
              Questions, <Accent>answered.</Accent>
            </SectionTitle>
            <Lead>Everything you need to know before bringing your leads into Ridhzo.</Lead>
          </div>
          <Link
            href="/contact"
            className="focus-ring inline-flex h-12 items-center gap-2 rounded-xl text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Talk to our team <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="border-t border-white/30">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/30 py-5">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
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
                  <div id={`faq-panel-${i}`} className="px-2 pt-1">
                    <p className="text-sm leading-5 text-white/65">{f.a}</p>
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
