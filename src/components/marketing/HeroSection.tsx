"use client";

import { appUrl } from "@/lib/config";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CornerTicks } from "@/components/marketing/decor";
import {
  MessageSquare,
  Bell,
  ArrowRight,
  CheckCircle2,
  WifiOff,
  Clock,
  RotateCcw,
  Zap,
} from "lucide-react";

type LeadSource = "meta" | "google" | "webhook";

interface SimulatedLead {
  source: LeadSource;
  sourceLabel: string;
  sourceBadge: string;
  campaign: string;
  name: string;
  phone: string;
  interest: string;
  budget: string;
  rep: string;
  template: string;
}

const SIMULATED_LEADS: Record<LeadSource, SimulatedLead> = {
  meta: {
    source: "meta",
    sourceLabel: "Meta Lead Ads",
    sourceBadge: "Instagram & Facebook",
    campaign: "Luxury Villas & Penthouses",
    name: "Vikram Malhotra",
    phone: "+91 98201 44520",
    interest: "4BHK Sky Villa",
    budget: "₹3.2 Cr",
    rep: "Ananya Sharma (Round-Robin)",
    template:
      "Hi Vikram! Thank you for inquiring on Instagram regarding the 4BHK Sky Villa. I have the floor layout and pricing breakdown ready. Shall I send it right here on WhatsApp?",
  },
  google: {
    source: "google",
    sourceLabel: "Google Search Ads",
    sourceBadge: "High-Intent Search",
    campaign: "Commercial Office Leasing",
    name: "Devendra Patel",
    phone: "+91 94250 88123",
    interest: "6,000 sq.ft Floorplate",
    budget: "₹4.5 Lakh / mo",
    rep: "Rohan Varma (Round-Robin)",
    template:
      "Hello Devendra, saw your inquiry via Google Search for commercial office floorplates. We have 2 ready-to-move options matching your requirements. When is a good time for a quick 2-min call?",
  },
  webhook: {
    source: "webhook",
    sourceLabel: "Website Webhook",
    sourceBadge: "Instant Inbound API",
    campaign: "Solar Rooftop Consultation",
    name: "Pooja Hegde",
    phone: "+91 91100 33499",
    interest: "10 kW Residential Grid",
    budget: "₹4.8 Lakh",
    rep: "Sneha Roy (Round-Robin)",
    template:
      "Hi Pooja! Thank you for requesting a solar estimate on our website. Based on your 10 kW requirement, you qualify for the 40% government subsidy. May I share the net-metering estimate?",
  },
};

export function HeroSection() {
  const [selectedSource, setSelectedSource] = useState<LeadSource>("meta");
  const [hasDispatched, setHasDispatched] = useState(false);
  const [secondsCounter, setSecondsCounter] = useState(11);

  const activeLead = SIMULATED_LEADS[selectedSource];

  useEffect(() => {
    if (hasDispatched) return;
    const interval = setInterval(() => {
      setSecondsCounter((prev) => (prev >= 25 ? 8 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [hasDispatched]);

  const handleSourceChange = (src: LeadSource) => {
    setSelectedSource(src);
    setHasDispatched(false);
    setSecondsCounter(11);
  };

  const handleDispatch = () => {
    setHasDispatched(true);
  };

  const handleReset = () => {
    setHasDispatched(false);
    setSecondsCounter(9);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Blueprint dot-grid wash, fading toward the fold */}
      <div
        className="bg-dots-faint pointer-events-none absolute inset-x-0 top-0 h-[42rem] [mask-image:radial-gradient(60rem_30rem_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <span className="section-label backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
            The 1-Tap Mobile CRM for Fast Closers
          </span>

          {/* Headline */}
          <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.15]">
            Respond to Inbound Leads in <span className="text-gradient">12 Seconds</span>, Not 4 Hours.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Stop losing qualified deals to slow response times. Ingest leads in real-time from{" "}
            <span className="text-foreground font-medium">Meta Lead Ads, Google Ads &amp; Web forms</span>,
            receive vibrating phone alerts, and trigger personalized WhatsApp follow-ups in one tap—even offline.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-11 rounded-full px-7 font-medium text-sm shadow-glow"
            >
              <Link href={appUrl("/signup")} className="flex items-center justify-center gap-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-11 rounded-full px-6 border-border bg-card hover:bg-accent text-foreground text-sm"
            >
              <a href="#speed">Calculate Lost Revenue</a>
            </Button>
          </div>

          {/* Trust Value Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-foreground" />
              <span>100 Free leads forever</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-foreground" />
              <span>Zero Meta API approvals needed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-foreground" />
              <span>100% Offline PWA (iOS &amp; Android)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-foreground" />
              <span>Row-locked atomic round-robin</span>
            </div>
          </div>

          {/* Interactive Live Lead Simulator — blueprint-framed instrument panel */}
          <div className="relative mt-12 sm:mt-14 w-full max-w-3xl">
            {/* Ambient glow behind the simulator card */}
            <div
              className="glow-blob left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-white/5"
              aria-hidden="true"
            />
            {/* Live-feed annotation tag */}
            <div className="absolute -top-3 left-6 z-10 flex items-center gap-2 bg-background px-2" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Live lead feed — simulated
              </span>
            </div>
            <div className="relative w-full rounded-2xl border border-border bg-card/80 p-4 sm:p-7 shadow-card backdrop-blur-xl">
              <CornerTicks />
            {/* Source Tab Selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-4">
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 w-full sm:w-auto">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground font-semibold shrink-0">
                  Simulate Channel:
                </span>
                <div className="grid grid-cols-3 sm:inline-flex rounded-full border border-border bg-secondary/50 p-1 w-full sm:w-auto" role="group" aria-label="Simulate lead channel">
                  <button
                    type="button"
                    onClick={() => handleSourceChange("meta")}
                    aria-pressed={selectedSource === "meta"}
                    className={`focus-ring rounded-full px-2 sm:px-2.5 py-1 text-xs font-medium transition-all text-center ${
                      selectedSource === "meta"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Meta Ads
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSourceChange("google")}
                    aria-pressed={selectedSource === "google"}
                    className={`focus-ring rounded-full px-2 sm:px-2.5 py-1 text-xs font-medium transition-all text-center ${
                      selectedSource === "google"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Google Ads
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSourceChange("webhook")}
                    aria-pressed={selectedSource === "webhook"}
                    className={`focus-ring rounded-full px-2 sm:px-2.5 py-1 text-xs font-medium transition-all text-center ${
                      selectedSource === "webhook"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Web Form
                  </button>
                </div>
              </div>

              {/* Status Badge - monochrome state signal */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                {hasDispatched ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    Status: Active (Contacted)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
                    Status: New (Pending)
                  </span>
                )}
              </div>
            </div>

            {/* Notification Bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 rounded-xl border border-border bg-secondary/30 p-3">
              <div className="flex items-center gap-3 text-left min-w-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-foreground shrink-0">
                  <Bell className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide truncate">
                      {activeLead.sourceLabel} · {activeLead.sourceBadge}
                    </span>
                    <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground shrink-0">
                      Just now
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-foreground truncate">
                    Campaign: {activeLead.campaign}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 pl-11 sm:pl-0">
                <Clock className="h-3.5 w-3.5" />
                <span className="font-mono">{hasDispatched ? "SLA: 12s" : `${secondsCounter}s elapsed`}</span>
              </div>
            </div>

            {/* Lead Card Details */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left text-xs">
              <div className="rounded-xl border border-border bg-white/[0.03] p-3">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Prospect</span>
                <p className="mt-1 font-semibold text-foreground text-sm truncate">{activeLead.name}</p>
                <p className="text-muted-foreground font-mono text-xs">{activeLead.phone}</p>
              </div>
              <div className="rounded-xl border border-border bg-white/[0.03] p-3">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Requirement</span>
                <p className="mt-1 font-semibold text-foreground text-sm truncate">{activeLead.interest}</p>
                <p className="text-muted-foreground text-xs">Budget: {activeLead.budget}</p>
              </div>
              <div className="rounded-xl border border-border bg-white/[0.03] p-3">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Assigned Rep</span>
                <p className="mt-1 font-semibold text-foreground text-sm truncate">{activeLead.rep.split(" ")[0]}</p>
                <p className="text-muted-foreground text-xs">Atomic Round-Robin</p>
              </div>
            </div>

            {/* 1-Tap WhatsApp Action Box */}
            <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-3.5 sm:p-4 text-left">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <MessageSquare className="h-4 w-4 text-foreground shrink-0" />
                  <span className="text-xs font-semibold text-foreground truncate">
                    WhatsApp Template <span className="hidden sm:inline text-muted-foreground font-normal">(Tokens: &#123;&#123;name&#125;&#125;, &#123;&#123;interest&#125;&#125;)</span>
                  </span>
                </div>
                {hasDispatched && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="focus-ring rounded-sm flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                  </button>
                )}
              </div>

              <p className="mt-2 text-xs text-muted-foreground font-mono bg-card p-2.5 rounded-md border border-border leading-relaxed break-words">
                &ldquo;{activeLead.template}&rdquo;
              </p>

              <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-border">
                <span className="text-[11px] text-muted-foreground">
                  {hasDispatched
                    ? "✓ WhatsApp deep link dispatched · Lead marked Contacted"
                    : "No typing required. Opens native WhatsApp with 1 tap."}
                </span>

                <Button
                  type="button"
                  onClick={hasDispatched ? handleReset : handleDispatch}
                  size="sm"
                  className={
                    hasDispatched
                      ? "w-full sm:w-auto h-10 sm:h-9 bg-secondary text-foreground hover:bg-accent border border-border text-xs"
                      : "w-full sm:w-auto h-10 sm:h-9 bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold"
                  }
                >
                  {hasDispatched ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Dispatched in 12s
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 fill-current" /> 1-Tap WhatsApp Send
                    </span>
                  )}
                </Button>
              </div>
            </div>

            {/* Offline and Security footnote */}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[11px] text-muted-foreground pt-2">
              <span className="flex items-center gap-1">
                <WifiOff className="h-3 w-3" /> Works 100% Offline with automatic outbox sync
              </span>
              <span>Encrypted &amp; Tenant-Isolated Postgres</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

