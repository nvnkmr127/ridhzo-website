"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow, SectionTitle, Accent, Lead } from "./primitives";

const CASES = [
  { title: "Real Estate", body: "Route property enquiries and keep every site visit moving.", href: "/usecases/real-estate" },
  { title: "Marketing Agencies", body: "Turn campaign leads into a clear sales process.", href: "/usecases/marketing-agencies" },
  { title: "Finance & Insurance", body: "Track applications, talks, and next steps together.", href: "/usecases/financial-advisors" },
  { title: "Education", body: "Handle student inquiries and admissions follow-up.", href: "/usecases/education" },
  { title: "Clinics & Healthcare", body: "Organize patient enquiries and make follow-up dependable.", href: "/usecases/clinics" },
];

const STEP_MS = 5000;

/** Figma "Frame 29": skyline backdrop, bottom-aligned copy and five cards that autoplay with a progress bar. */
export function UseCasesHomeSection() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAutoplay(false);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setActive((n) => (n + 1) % CASES.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, autoplay]);

  return (
    <section
      id="solutions"
      className="relative flex min-h-[696px] flex-col justify-end overflow-hidden bg-black py-16 sm:py-20"
    >
      {/* Skyline photo from Figma (gradient already baked in); faded into the black section below it. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 aspect-[1440/340] bg-[url('/home/skyline.webp')] bg-cover bg-top [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-[1272px] flex-col gap-5 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-3">
          <Eyebrow className="w-fit">Built for your sales motion</Eyebrow>
          <SectionTitle className="max-w-[546px]">
            One CRM. Different ways to <Accent>sell.</Accent>
          </SectionTitle>
          <Lead className="max-w-[676px]">
            Ridhzo adapts to businesses where inbound leads and fast follow-up matter. The workflow stays simple while the
            sales process can change around it.
          </Lead>
        </div>

        <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
          {CASES.map((c, idx) => {
            const isActive = idx === active;
            return (
              <li key={c.title} className="flex flex-col gap-4 pb-5">
                <span className="relative block h-[3px] w-full bg-white/30" aria-hidden="true">
                  {isActive && (
                    <span
                      key={`${active}-${autoplay}`}
                      className={cn("absolute inset-y-0 left-0 bg-highlight", autoplay ? "animate-progress-fill" : "w-full")}
                    />
                  )}
                </span>
                <Link
                  href={c.href}
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  className="focus-ring group flex flex-col gap-0.5"
                >
                  <span className="flex items-center justify-between text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">
                    {c.title}
                    <ArrowRight
                      className={cn("h-5 w-5 transition-opacity", isActive ? "text-highlight opacity-100" : "opacity-0")}
                      aria-hidden="true"
                    />
                  </span>
                  <span className={cn("text-base leading-6 transition-colors", isActive ? "text-white/64" : "text-white/32")}>
                    {c.body}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
