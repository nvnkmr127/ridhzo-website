"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { appUrl } from "@/lib/config";
import { FeatherArrowRight, FeatherMinus, FeatherPlus } from "@/components/site/icons";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Design System FAQ section matching Figma `Question` (231:18076) and Comparison `Before You Switch` (639:14491).
 * Uses Feather plus/minus icons and supports both light (#ffffff) and dark (#000000) alternating sections.
 */
export function FaqAccordion({
  id = "faq",
  eyebrow = "Common questions",
  heading = "Before you decide.",
  title,
  accent,
  items,
  theme = "dark",
  contactLabel,
  cta = { label: "Start 14-Day Free Trial", href: appUrl("/signup") },
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  title?: string;
  accent?: string;
  items: FaqItem[];
  theme?: "dark" | "light";
  contactLabel?: string;
  cta?: { label: string; href: string };
}) {
  const [open, setOpen] = useState<number>(0);
  const isLight = theme === "light";
  const resolvedHeading = title ?? heading;
  const resolvedCta = contactLabel ? { label: contactLabel, href: "/contact" } : cta;

  return (
    <section
      id={id}
      className={cn(
        "relative z-[1] px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[88px]",
        isLight ? "bg-white text-black" : "bg-black text-white",
      )}
    >
      <div className="mx-auto grid w-full max-w-[1272px] items-start gap-12 lg:grid-cols-[minmax(0,360px)_1fr]">
        <div>
          <span
            className={cn(
              "type-label",
              isLight ? "text-black" : "text-[#5ee878]",
            )}
          >
            {eyebrow}
          </span>
          <h2
            className={cn(
              "type-h2 mt-5",
              isLight ? "text-black" : "text-white",
            )}
          >
            {resolvedHeading}
            {accent && (
              <>
                {" "}
                <span className="text-[#5ee878]">{accent}</span>
              </>
            )}
          </h2>
          <Link
            href={resolvedCta.href}
            className={cn(
              "focus-ring type-button mt-8 inline-flex h-[48px] items-center justify-center gap-[8px] rounded-[12px] border px-[20px] transition-colors",
              isLight
                ? "border-black/80 bg-black text-white hover:border-black hover:bg-black/80"
                : "border-white/80 bg-white text-black hover:border-white hover:bg-white/80",
            )}
          >
            {resolvedCta.label}
            <FeatherArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <ul className={cn("border-t", isLight ? "border-black/20" : "border-white/[0.16]")}>
          {items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${id}-panel-${i}`;
            const buttonId = `${id}-button-${i}`;
            return (
              <li
                key={item.q}
                className={cn("border-b", isLight ? "border-black/20" : "border-white/[0.16]")}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={cn(
                    "focus-ring flex w-full items-center justify-between gap-4 px-2 py-5 text-left font-sans text-[16px] font-normal leading-[24px] transition-colors",
                    isLight ? "text-black hover:text-black/75" : "text-white hover:text-[#5ee878]",
                  )}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "shrink-0 transition-colors",
                      isOpen ? "text-[#5ee878]" : isLight ? "text-black/60" : "text-white/60",
                    )}
                  >
                    {isOpen ? <FeatherMinus className="h-5 w-5" /> : <FeatherPlus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "px-2 pb-5 pr-10 font-sans text-[14px] font-normal leading-[22px]",
                      isLight ? "text-black/[0.64]" : "text-white/[0.64]",
                    )}
                  >
                    {item.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
