"use client";

import { useEffect, useState } from "react";
import { Gift, Smartphone } from "lucide-react";
import { appUrl } from "@/lib/config";
import { Eyebrow, HomeButton, FloatingChip, ShotPanel } from "./primitives";
import { NoCardIcon } from "./icons";

const WORDS = ["action.", "conversation.", "opportunity.", "revenue."];

/**
 * Letter-by-letter headline accent (Figma: "Text animate — Letter by letter"):
 * a green highlight sweeps across each word, then the next word takes over.
 * Static and fully green when motion is reduced.
 */
function RotatingWord() {
  const [w, setW] = useState(0);
  const [i, setI] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    // Figma timeline: 40 frames over 3120ms (78ms per letter), no pause between words.
    const word = WORDS[w];
    const t = setTimeout(() => {
      if (i < word.length - 1) {
        setI(i + 1);
      } else {
        setW((n) => (n + 1) % WORDS.length);
        setI(0);
      }
    }, 78);
    return () => clearTimeout(t);
  }, [w, i]);

  const word = reduced ? WORDS[0] : WORDS[w];
  return (
    <span className="relative block h-[1.06em] overflow-hidden">
      <span className="sr-only">action.</span>
      <span key={word} aria-hidden="true" className="block whitespace-nowrap">
        {word.split("").map((ch, idx) => (
          <span key={idx} className={reduced || idx === i ? "text-highlight" : "text-white"}>
            {ch}
          </span>
        ))}
      </span>
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[1272px]">
      <FloatingChip
        badge="01"
        title="New lead assigned"
        subtitle="Aarav Mehta · just now"
        className="absolute -top-8 left-2 z-10 hidden sm:flex lg:-left-6"
      />
      <div className="absolute -top-10 right-2 z-10 hidden w-[220px] rounded-xl border border-highlight/20 bg-[rgba(9,18,11,0.94)] px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.42)] backdrop-blur-md sm:block lg:-right-6">
        <p className="text-[9px] font-bold tracking-[0.12em] text-highlight">FOLLOW-UPS</p>
        <p className="mt-1.5 text-xl font-semibold tracking-tight text-white">8 overdue</p>
        <p className="text-[10px] text-[#77777c]">Visible before they slip</p>
      </div>

      <ShotPanel
        src="/home/hero-dashboard.webp"
        alt="Ridhzo dashboard showing today's follow-ups, response speed, priorities and leads per day"
        width={1208}
        height={1200}
        priority
        sizes="(min-width: 1280px) 1208px, 100vw"
      />
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[982px] bg-[url('/home/hero-bg.webp')] bg-cover bg-top [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-[1272px] flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>Mobile-first sales CRM</Eyebrow>
          <h1 className="text-[44px] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[60px] lg:text-[72px] lg:leading-[76px]">
            <span className="block">Turn every lead into</span>
            <RotatingWord />
          </h1>
          <p className="max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Capture leads, alert your team, and follow up from one workspace.
          </p>
          <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
            <HomeButton href="#journey" variant="secondary">
              See How It Works
            </HomeButton>
            <HomeButton href={appUrl("/signup")}>Start 14-Day Free Trial</HomeButton>
          </div>
          <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs text-white">
            <li className="flex items-center gap-1">
              <Gift className="h-4 w-4" aria-hidden="true" /> 14-day free trial
            </li>
            <li className="flex items-center gap-1">
              <NoCardIcon className="h-4 w-4 text-white/80" /> No card required
            </li>
            <li className="flex items-center gap-1">
              <Smartphone className="h-4 w-4" aria-hidden="true" /> Mobile-first
            </li>
          </ul>
        </div>
        <div className="mt-6 w-full sm:mt-10">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
