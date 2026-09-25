"use client";

import { appUrl } from "@/lib/config";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export function PricingSection({ showHeader = true }: { showHeader?: boolean } = {}) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      priceMonthly: 0,
      priceYearly: 0,
      description: "For individual closers evaluating Ridhzo and getting started with instant response.",
      badge: null,
      features: [
        "Up to 300 leads",
        "1 user",
        "1 lead source (Facebook, Google, web form, webhook…)",
        "2 automations & 1 follow-up sequence",
        "15 AI credits / month",
        "Instant push alerts & 1-tap WhatsApp",
        "Kanban pipeline, follow-ups & meetings",
        "Mobile app (iOS & Android) with offline capture",
      ],
      ctaText: "Start Free Forever",
      ctaHref: appUrl("/signup"),
      popular: false,
    },
    {
      name: "Starter",
      priceMonthly: 249,
      priceYearly: 2490,
      description: "For active solo agents & growing sales teams who need automated speed.",
      badge: "Most Popular",
      features: [
        "Up to 5,000 leads",
        "Up to 3 team seats",
        "Everything in Free, plus:",
        "5 lead sources",
        "15 automations & 10 follow-up sequences",
        "300 AI credits / month",
        "AI auto-tagging of incoming replies",
        "No \"Powered by Ridhzo\" on your web forms",
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaHref: appUrl("/signup?plan=starter"),
      popular: true,
    },
    {
      name: "Unlimited",
      priceMonthly: 449,
      priceYearly: 4490,
      description: "For high-volume sales agencies and fast-scaling brokerages.",
      badge: "Best Value",
      features: [
        "Unlimited leads",
        "Unlimited team seats",
        "Everything in Starter, plus:",
        "Unlimited lead sources",
        "Unlimited automations & sequences",
        "2,000 AI credits / month",
        "Priority phone & WhatsApp onboarding",
      ],
      ctaText: "Upgrade to Unlimited",
      ctaHref: appUrl("/signup?plan=unlimited"),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {showHeader && (
            <>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Simple, Transparent Pricing</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                Plans That Pay for Themselves With One Closed Deal
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Start for free, then upgrade as your lead pipeline expands. No hidden charges, no contracts.
              </p>
            </>
          )}

          {/* Billing Cycle Toggle - Monochrome */}
          <div className="mt-8 inline-flex items-center rounded-lg border border-border bg-secondary/70 p-1 max-w-full" role="group" aria-label="Billing cycle">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
              className={`focus-ring rounded-md px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-foreground text-background shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              aria-pressed={billingCycle === "yearly"}
              className={`focus-ring rounded-md px-3 sm:px-3.5 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-all ${
                billingCycle === "yearly"
                  ? "bg-foreground text-background shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded bg-background text-foreground text-[10px] px-1.5 py-0.5 font-mono">
                2 months free
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid - Strict THEME.md Monochrome Surface */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((p, i) => {
            // Yearly plans are billed as one annual charge (10× monthly = 2 months free); show the monthly equivalent.
            const price = billingCycle === "monthly" ? p.priceMonthly : Math.round(p.priceYearly / 12);

            return (
              <div
                key={i}
                className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  p.popular
                    ? "border-2 border-foreground bg-card shadow-2xl z-10"
                    : "border border-border bg-card hover:border-foreground/30"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground text-background text-[10px] font-bold px-3 py-0.5 shadow-sm uppercase tracking-wider">
                    {p.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground min-h-[36px] leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-foreground font-mono tracking-tight">
                      ₹{price}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {price === 0 ? "forever free" : "/ month"}
                    </span>
                  </div>
                  {billingCycle === "yearly" && price > 0 && (
                    <p className="text-[11px] text-muted-foreground font-mono mt-1">
                      Billed annually (₹{p.priceYearly.toLocaleString("en-IN")}/year)
                    </p>
                  )}

                  <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                        <span className={idx < 2 ? "text-foreground font-medium" : ""}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border">
                  <Button
                    asChild
                    size="sm"
                    className={`w-full h-10 text-xs font-semibold transition-all ${
                      p.popular
                        ? "bg-foreground text-background hover:bg-foreground/90 shadow-sm"
                        : "bg-secondary text-foreground hover:bg-accent border border-border"
                    }`}
                  >
                    <Link href={p.ctaHref}>{p.ctaText}</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

