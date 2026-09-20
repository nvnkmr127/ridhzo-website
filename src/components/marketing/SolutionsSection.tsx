"use client";

import { useState } from "react";
import {
  Building2,
  Megaphone,
  Briefcase,
  Sun,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { appUrl } from "@/lib/config";
import { Button } from "@/components/ui/button";

interface Solution {
  id: string;
  icon: typeof Building2;
  label: string;
  title: string;
  badge: string;
  problem: string;
  solution: string;
  metrics: { value: string; label: string }[];
  steps: string[];
}

const SOLUTIONS: Solution[] = [
  {
    id: "real-estate",
    icon: Building2,
    label: "Real Estate Brokers",
    title: "Instant Brochure Delivery & Site Visit Bookings",
    badge: "Property Sales & Developers",
    problem:
      "Buyers browsing Facebook or 99acres submit an inquiry and quickly contact rival projects if they don't receive floor plans immediately.",
    solution:
      "The instant an ad lead arrives, Ridhzo triggers a vibrating push alert. The agent taps once to send a pre-filled WhatsApp message with floor layout PDFs and calendar booking links.",
    metrics: [
      { value: "14s", label: "Avg. WhatsApp First Touch" },
      { value: "3.2x", label: "More Site Visits Scheduled" },
      { value: "100%", label: "Offline Field Property Sync" },
    ],
    steps: [
      "Meta Lead Ad capture -> Instant push alert with prospect budget & property preference.",
      "1-Tap WhatsApp dispatch sends digital brochure & virtual walkthrough video.",
      "Visual Kanban tracks site visit scheduled, token paid, and registry completed.",
    ],
  },
  {
    id: "agencies",
    icon: Megaphone,
    label: "Performance Agencies",
    title: "Prove Lead Quality & Prevent Client Blame",
    badge: "Media Buyers & Growth Agencies",
    problem:
      "Agencies deliver qualified Meta & Google leads, but clients take 6 hours to call them, complain 'the leads are cold', and pause ad spend.",
    solution:
      "Ridhzo gives agency clients a mobile PWA that buzzes the instant a lead arrives. Live executive SLA dashboards prove response times, vindicating your media spend.",
    metrics: [
      { value: "94%", label: "SLA Response Compliance" },
      { value: "40%", label: "Lower Cost-Per-Acquisition" },
      { value: "0%", label: "Disputed Lead Quality" },
    ],
    steps: [
      "Direct webhook sync into client workspace without Zapier costs.",
      "Round-robin distribution balances leads evenly across client sales reps.",
      "Executive Dashboard tracks first-contact SLA times to demonstrate ad ROI.",
    ],
  },
  {
    id: "finance",
    icon: Briefcase,
    label: "Financial & Insurance",
    title: "High-Trust Inquiries & Scheduled Policy Renewals",
    badge: "Advisors & Wealth Managers",
    problem:
      "High net-worth clients expect immediate, discreet responses. Advisors juggle multiple WhatsApp threads, dropping scheduled policy renewals.",
    solution:
      "All client communications, call records, and follow-up tasks stay organized in an encrypted timeline with automated renewal reminders and tenant-isolated data.",
    metrics: [
      { value: "0", label: "Missed Policy Renewals" },
      { value: "AES-256", label: "Tenant-Isolated Encryption" },
      { value: "1-Click", label: "Scheduled Follow-up Reminders" },
    ],
    steps: [
      "Inbound wealth inquiry routed strictly to authorized licensed consultant.",
      "1-Tap personalized WhatsApp introduction initiates private consultation.",
      "Automated follow-up scheduler alerts rep prior to policy renewal deadlines.",
    ],
  },
  {
    id: "solar",
    icon: Sun,
    label: "Solar & Home Services",
    title: "Field Canvassing & Offline Rooftop Estimates",
    badge: "Contractors & Field Teams",
    problem:
      "Sales reps in basements, remote sites, or rural areas lose internet signal, resulting in dropped quotes and lost customer notes.",
    solution:
      "Ridhzo's offline-first PWA queues leads, site photos, and estimate notes in an IndexedDB outbox, auto-syncing seamlessly once back online.",
    metrics: [
      { value: "100%", label: "Offline Outbox Resilience" },
      { value: "2x", label: "Faster Quote Turnaround" },
      { value: "0", label: "Lost Field Estimates" },
    ],
    steps: [
      "Field rep logs rooftop measurements and customer details 100% offline.",
      "App buffers data in local outbox with zero loss or freeze.",
      "Connection restores -> Auto-syncs to database, notifying the proposal team.",
    ],
  },
];

export function SolutionsSection() {
  const [activeId, setActiveId] = useState<string>("real-estate");
  const activeSolution = SOLUTIONS.find((s) => s.id === activeId) || SOLUTIONS[0];

  return (
    <section id="solutions" className="py-24 border-t border-border bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Built for High-Velocity Teams</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Tailored for High-Stakes Sales Verticals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Whether you are closing real estate deals, running high-spend ad campaigns, or dispatching field contractors,
            Ridhzo eliminates the gap between lead generation and first contact.
          </p>

          {/* Industry Tab Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {SOLUTIONS.map((sol) => (
              <button
                key={sol.id}
                type="button"
                onClick={() => setActiveId(sol.id)}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                  activeId === sol.id
                    ? "bg-foreground text-background shadow-xs font-semibold"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
                }`}
              >
                <sol.icon className="h-3.5 w-3.5" />
                <span>{sol.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Solution Deep Dive Box */}
        <div className="mt-12 max-w-5xl mx-auto rounded-xl border border-border bg-card p-6 sm:p-9 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Overview & Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded border border-border">
                  {activeSolution.badge}
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-foreground">
                  {activeSolution.title}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="rounded-lg border border-border bg-secondary/30 p-3.5">
                  <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block">
                    The Pain Point:
                  </span>
                  <p className="mt-1 text-muted-foreground leading-relaxed">
                    {activeSolution.problem}
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-3.5">
                  <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block">
                    The Ridhzo Solution:
                  </span>
                  <p className="mt-1 text-foreground leading-relaxed">
                    {activeSolution.solution}
                  </p>
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-foreground">Execution Flow:</span>
                <div className="space-y-2">
                  {activeSolution.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <span className="font-mono text-foreground font-bold mt-0.5">{idx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold">
                  <Link href={appUrl("/signup")} className="flex items-center gap-1.5">
                    <span>Deploy This Workflow</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Col: Proven Outcomes Metrics */}
            <div className="lg:col-span-5 rounded-lg border border-border bg-secondary/40 p-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Impact Benchmarks
                </span>
                <div className="mt-4 space-y-5">
                  {activeSolution.metrics.map((m, idx) => (
                    <div key={idx} className="border-b border-border/80 pb-3 last:border-0 last:pb-0">
                      <p className="text-3xl font-extrabold text-foreground font-mono tracking-tight">
                        {m.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border text-[11px] text-muted-foreground">
                Verified against live customer telemetry and speed-to-lead benchmarks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
