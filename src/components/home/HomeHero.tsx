"use client";

import { useEffect, useState } from "react";
import { Gift, Smartphone, CreditCard } from "lucide-react";
import { appUrl } from "@/lib/config";
import { Eyebrow, HomeButton, FloatingChip } from "./primitives";

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
    const word = WORDS[w];
    const t =
      i < word.length - 1
        ? setTimeout(() => setI(i + 1), 90)
        : setTimeout(() => {
            setW((n) => (n + 1) % WORDS.length);
            setI(0);
          }, 1500);
    return () => clearTimeout(t);
  }, [w, i]);

  const word = reduced ? WORDS[0] : WORDS[w];
  return (
    <span className="relative block h-[1.06em] overflow-hidden">
      <span className="sr-only">action.</span>
      <span key={word} aria-hidden="true" className="block animate-word-in whitespace-nowrap">
        {word.split("").map((ch, idx) => (
          <span key={idx} className={reduced || idx === i ? "text-highlight" : "text-white"}>
            {ch}
          </span>
        ))}
      </span>
    </span>
  );
}

const KPIS = [
  { label: "New today", value: "12", tone: "text-white" },
  { label: "Follow-ups due", value: "7", tone: "text-highlight" },
  { label: "Overdue", value: "8", tone: "text-red-300" },
  { label: "Won this month", value: "34", tone: "text-white" },
];
const BARS = [32, 54, 41, 68, 59, 82, 47, 74, 63, 90, 71, 96];

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

      <div className="rounded-3xl bg-white/[0.12] p-3 sm:p-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090a0b] p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Today</p>
              <p className="text-xs text-white/40">Your pipeline at a glance</p>
            </div>
            <span className="rounded-full border border-highlight/40 bg-highlight/10 px-2.5 py-1 text-[11px] font-medium text-highlight">
              Avg. first response 4m 19s
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[11px] text-white/45">{k.label}</p>
                <p className={`mt-1 text-2xl font-semibold tracking-tight ${k.tone}`}>{k.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs font-medium text-white/70">Leads in the last 12 days</p>
              <div className="mt-4 flex h-32 items-end gap-2" role="img" aria-label="Bar chart of leads per day">
                {BARS.map((h, idx) => (
                  <span
                    key={idx}
                    className={`flex-1 rounded-t ${idx === BARS.length - 1 ? "bg-highlight" : "bg-white/20"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs font-medium text-white/70">Today&apos;s priorities</p>
              <ul className="mt-3 space-y-2.5 text-xs">
                {["Call Aarav about site visit", "WhatsApp Neha the brochure", "Send quote to Priya"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70rem_36rem_at_50%_0%,rgba(94,232,120,0.14),transparent_65%),radial-gradient(40rem_24rem_at_50%_30%,rgba(13,39,16,0.8),transparent_70%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
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
              <CreditCard className="h-4 w-4" aria-hidden="true" /> No card required
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
