"use client";

import { useState } from "react";
import { Clock, TrendingUp, XCircle, CheckCircle2, Zap, Calculator } from "lucide-react";

export function SpeedComparison() {
  const [monthlyLeads, setMonthlyLeads] = useState(150);
  const [dealValue, setDealValue] = useState(75000);

  // Speed-to-lead conversion curve (Harvard Business Review / MIT study referenced in EXECUTIVE_DASHBOARD.md):
  // 4hr response ~ 2.2% close rate vs <5min response ~ 7.8% close rate (3.5x improvement)
  const slowDeals = Math.round(monthlyLeads * 0.022);
  const fastDeals = Math.round(monthlyLeads * 0.078);
  const extraDeals = Math.max(1, fastDeals - slowDeals);
  const extraRevenue = extraDeals * dealValue;

  return (
    <section id="speed" className="py-20 border-t border-b border-border bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Zap className="h-3.5 w-3.5 fill-current" />
            <span>The 5-Minute Lead Rule</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Responding Within 5 Minutes Makes You 21x More Likely to Close
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Every minute of delay causes lead interest to decay exponentially. Here is how Ridhzo replaces the broken,
            leaky manual workflow with instant closing velocity.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards - Strict Monochrome */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Traditional Way */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary text-muted-foreground flex items-center justify-center border border-border">
                  <XCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">The Broken Old Way</h3>
                  <p className="text-xs text-muted-foreground">Spreadsheets, Ad Portals &amp; Address Book Saves</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="text-muted-foreground font-mono font-bold mt-0.5">•</span>
                  <span>Lead submits Meta or web form; sits unread in ad manager for 3 to 6 hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-muted-foreground font-mono font-bold mt-0.5">•</span>
                  <span>Reps manually download CSV spreadsheets or check email notifications back at their desk.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-muted-foreground font-mono font-bold mt-0.5">•</span>
                  <span>Rep manually types prospect phone number into personal address book, waiting for WhatsApp sync.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-muted-foreground font-mono font-bold mt-0.5">•</span>
                  <span>Types a generic message by hand; lead doesn&apos;t answer or has already purchased from a competitor.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Avg. First Contact:</span>
              <span className="text-lg font-mono font-bold text-foreground">3 — 6 Hours</span>
            </div>
          </div>

          {/* The Ridhzo Velocity Engine */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
            <div className="absolute -top-2.5 right-6 bg-foreground text-background text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              3.5x Conversion Velocity
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">The Ridhzo Velocity Engine</h3>
                  <p className="text-xs text-muted-foreground">Real-Time Ingestion · 1-Tap WhatsApp · Push Alerts</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold mt-0.5">✓</span>
                  <span>Real-time webhook ingestion from Meta Ads, Google Ads &amp; web forms in &lt;1 second.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold mt-0.5">✓</span>
                  <span>Vibrating push alert reaches rep&apos;s phone immediately, even with the browser closed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold mt-0.5">✓</span>
                  <span>1-tap launches native WhatsApp with personalized template pre-filled with lead details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-foreground font-bold mt-0.5">✓</span>
                  <span>Row-locked round-robin distribution, drag-and-drop Kanban, and Going Cold radar protection.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Avg. First Contact:</span>
              <span className="text-lg font-mono font-bold text-foreground">12 — 30 Seconds</span>
            </div>
          </div>
        </div>

        {/* Interactive Speed-to-Lead ROI Calculator */}
        <div className="mt-14 max-w-5xl mx-auto rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-secondary text-foreground flex items-center justify-center border border-border">
                <Calculator className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Speed-to-Lead Revenue Calculator</h3>
                <p className="text-xs text-muted-foreground">
                  Estimate the revenue recovered by reducing response time from 3 hours to 30 seconds.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Based on Harvard Business Review Lead Response Data</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Monthly Inbound Leads</span>
                  <span className="text-foreground font-mono font-bold">{monthlyLeads} leads / month</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  aria-label="Monthly inbound leads"
                  aria-valuetext={`${monthlyLeads} leads per month`}
                  className="focus-ring mt-2 w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-mono">
                  <span>20</span>
                  <span>500</span>
                  <span>1,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Average Deal Value / Gross Margin</span>
                  <span className="text-foreground font-mono font-bold">₹{dealValue.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  aria-label="Average deal value or gross margin in rupees"
                  aria-valuetext={`₹${dealValue.toLocaleString("en-IN")}`}
                  className="focus-ring mt-2 w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-foreground"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1 font-mono">
                  <span>₹10,000</span>
                  <span>₹2,50,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className="lg:col-span-5 rounded-lg border border-border bg-secondary/40 p-5 text-center flex flex-col justify-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Estimated Recovered Revenue
              </span>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground font-mono tracking-tight">
                ₹{extraRevenue.toLocaleString("en-IN")}
                <span className="text-xs text-muted-foreground font-normal block mt-1">per month in saved deals</span>
              </p>

              <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase">Additional Deals</span>
                  <span className="font-mono font-bold text-foreground">+{extraDeals} closed</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase">Velocity Lift</span>
                  <span className="font-mono font-bold text-foreground">+254%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

