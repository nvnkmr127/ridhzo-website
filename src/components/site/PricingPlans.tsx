"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PLANS, SHARED_FEATURES, PRICING_FOOTNOTE, inr } from "@/lib/plans";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";
import { CheckCircleFilled } from "./icons";

/** Plan cards with the monthly/yearly toggle (Figma pricing frame). Used on the homepage and /pricing. */
export function PricingPlans({ showHeader = true }: { showHeader?: boolean }) {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <HomeSection id="pricing" className={showHeader ? undefined : "pt-4 sm:pt-6"}>
      <div className="flex flex-col items-center gap-8">
        {showHeader && (
          <div className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>Simple pricing</Eyebrow>
            <SectionTitle className="mt-1 max-w-[600px]">
              Start free. Upgrade when you <Accent>grow.</Accent>
            </SectionTitle>
            <Lead className="max-w-[644px]">
              Start with the core tools you need to manage inbound leads and test the workflow with your team. Upgrade when
              your lead volume, team size, or automation needs grow.
            </Lead>
          </div>
        )}

        <div role="group" aria-label="Billing cycle" className="flex gap-2 rounded-full bg-white/[0.16] p-1">
          {(["monthly", "yearly"] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cycle === c}
              onClick={() => setCycle(c)}
              className={cn(
                "focus-ring flex h-12 items-center justify-center gap-1 rounded-full px-5 text-base transition-colors sm:px-6 sm:text-lg",
                cycle === c ? "bg-[#f5f5f5] font-semibold text-black" : "text-white",
              )}
            >
              <span className="capitalize">{c}</span>
              {c === "yearly" && (
                <span className={cn("text-sm font-normal", cycle === c ? "text-black/80" : "text-highlight")}>
                  -2 months Free
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1160px] items-stretch gap-6 lg:grid-cols-3 lg:gap-10">
        {PLANS.map((p) => {
          const monthlyEquivalent = cycle === "yearly" ? Math.round(p.yearly / 12) : p.monthly;
          return (
            <div
              key={p.id}
              className={cn(
                "flex flex-col justify-between overflow-hidden rounded-[30px] bg-white/[0.04]",
                p.primary && "border-2 border-highlight/50",
              )}
            >
              <div>
                {p.banner && (
                  <p
                    className={cn(
                      "py-1 text-center text-lg font-semibold leading-[26px] tracking-[-0.015em]",
                      p.primary ? "bg-highlight text-black" : "bg-white text-black",
                    )}
                  >
                    {p.banner}
                  </p>
                )}
                <div className={cn("flex flex-col gap-3 px-6 pb-8", p.banner ? "pt-4" : "pt-8")}>
                  <h3 className="text-lg font-semibold uppercase leading-[26px] tracking-[-0.015em] text-white">{p.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-4xl font-extrabold leading-[42px] tracking-[-0.015em] text-white">{inr(monthlyEquivalent)}</p>
                    <div className="text-xs leading-[18px] text-white/50">
                      {p.monthly === 0 ? (
                        <p>Forever Free</p>
                      ) : (
                        <>
                          <p>/month</p>
                          {cycle === "yearly" && <p>Billed annually ({inr(p.yearly)}/year)</p>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 px-6 pb-10">
                  {[...p.highlights, ...SHARED_FEATURES].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm leading-5 text-white/65">
                      <CheckCircleFilled className="h-5 w-5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-8">
                <Link
                  href={p.href}
                  className={cn(
                    "focus-ring flex h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-medium transition-colors",
                    p.primary
                      ? "border-white bg-white/80 text-black hover:bg-white"
                      : "border-white/12 bg-white/[0.04] text-white hover:bg-white/10",
                  )}
                >
                  {p.cta}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-[992px] text-center text-sm leading-5 text-white/50">{PRICING_FOOTNOTE}</p>
    </HomeSection>
  );
}
