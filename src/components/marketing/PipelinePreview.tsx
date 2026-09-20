"use client";

import { useState } from "react";
import {
  Kanban,
  Snowflake,
  Flame,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadCard {
  id: string;
  name: string;
  phone: string;
  company: string;
  value: string;
  stage: "new" | "active" | "proposal" | "won";
}

interface ColdLead {
  id: string;
  name: string;
  phone: string;
  requirement: string;
  daysSilent: number;
  neverContacted: boolean;
  priority: "normal" | "high";
  escalated?: boolean;
}

export function PipelinePreview() {
  const [activeTab, setActiveTab] = useState<"kanban" | "cold">("kanban");

  // Kanban State
  const [leads, setLeads] = useState<LeadCard[]>([
    { id: "1", name: "Anil Kumar", phone: "+91 98112 34567", company: "Prestige Estates", value: "₹2.4 Cr", stage: "new" },
    { id: "2", name: "Kavita Reddy", phone: "+91 97001 88900", company: "Tech Mahindra", value: "₹1.8 Cr", stage: "new" },
    { id: "3", name: "Deepak Mehta", phone: "+91 99204 11223", company: "Mehta Logistics", value: "₹85 Lakh", stage: "active" },
    { id: "4", name: "Sunil Nair", phone: "+91 98450 55667", company: "Zenith Solar", value: "₹12 Lakh", stage: "proposal" },
    { id: "5", name: "Ritu Verma", phone: "+91 98100 99887", company: "Nexus Ventures", value: "₹3.1 Cr", stage: "won" },
  ]);

  // Going Cold Radar State
  const [coldLeads, setColdLeads] = useState<ColdLead[]>([
    { id: "c1", name: "Michael Chang", phone: "+91 98765 11223", requirement: "Office Floorplate (8k sq.ft)", daysSilent: 24, neverContacted: false, priority: "normal" },
    { id: "c2", name: "Horizon Advisory", phone: "+91 94440 99881", requirement: "Commercial Rooftop Solar", daysSilent: 18, neverContacted: true, priority: "normal" },
    { id: "c3", name: "Suresh Balakrishnan", phone: "+91 91760 33445", requirement: "Luxury Villa Plot", daysSilent: 16, neverContacted: false, priority: "normal" },
  ]);

  const [allEscalated, setAllEscalated] = useState(false);
  const [reengagedId, setReengagedId] = useState<string | null>(null);

  const moveStage = (leadId: string, targetStage: LeadCard["stage"]) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, stage: targetStage } : l))
    );
  };

  const handleEscalateAll = () => {
    setAllEscalated(true);
    setColdLeads((prev) =>
      prev.map((l) => ({ ...l, priority: "high", escalated: true }))
    );
  };

  const handleReengage = (id: string) => {
    setReengagedId(id);
    setTimeout(() => {
      setReengagedId(null);
    }, 2500);
  };

  const stageColumns: { key: LeadCard["stage"]; label: string; dotColor: string }[] = [
    { key: "new", label: "New Leads", dotColor: "bg-blue-500" },
    { key: "active", label: "In Contact", dotColor: "bg-emerald-500" },
    { key: "proposal", label: "Proposal Sent", dotColor: "bg-amber-500" },
    { key: "won", label: "Won & Closed", dotColor: "bg-emerald-600" },
  ];

  return (
    <section id="pipeline" className="py-16 sm:py-24 border-t border-border bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Kanban className="h-3.5 w-3.5" />
            <span>Velocity &amp; Reclamation</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Active Kanban Board &amp; Going Cold Radar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Two tightly coupled surfaces: visually advance active deals across stages, while our automated
            radar detects stagnant leads before prospective revenue decays.
          </p>

          {/* Surface Tab Switcher */}
          <div className="mt-8 flex flex-col sm:inline-flex sm:flex-row rounded-lg border border-border bg-secondary/60 p-1 w-full sm:w-auto max-w-md mx-auto" role="group" aria-label="Pipeline surface">
            <button
              type="button"
              onClick={() => setActiveTab("kanban")}
              aria-pressed={activeTab === "kanban"}
              className={`focus-ring flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === "kanban"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Kanban className="h-4 w-4" aria-hidden="true" />
              <span>1. Pipeline Board (/leads/kanban)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cold")}
              aria-pressed={activeTab === "cold"}
              className={`focus-ring flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === "cold"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Snowflake className="h-4 w-4" aria-hidden="true" />
              <span>2. Going Cold Radar (/leads/cold)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Pipeline Kanban */}
        {activeTab === "kanban" && (
          <div className="mt-12 rounded-xl border border-border bg-card p-4 sm:p-7 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  Interactive Pipeline Board · Drag or Advance Deals
                </h3>
                <p className="text-xs text-muted-foreground">
                  Dynamic columns mirror your organization&apos;s custom status schema with optimistic UI updates.
                </p>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="sm:hidden text-[10px] text-muted-foreground">← Swipe stages →</span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Total: {leads.length} Deals
                </span>
              </div>
            </div>

            {/* Kanban Columns Grid - Swipeable snap-scroll on mobile, 4-col grid on desktop */}
            <div className="mt-6 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
              {stageColumns.map((col) => {
                const columnLeads = leads.filter((l) => l.stage === col.key);

                return (
                  <div
                    key={col.key}
                    className="w-[82vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none rounded-lg border border-border bg-secondary/30 p-3 flex flex-col justify-between min-h-[300px]"
                  >
                    <div>
                      {/* Column Header */}
                      <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${col.dotColor}`} />
                          <span className="text-xs font-bold text-foreground">{col.label}</span>
                        </div>
                        <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                          {columnLeads.length}
                        </span>
                      </div>

                      {/* Cards list */}
                      <div className="mt-3 space-y-2.5">
                        {columnLeads.map((card) => (
                          <div
                            key={card.id}
                            className="rounded-lg border border-border bg-card p-3 shadow-xs transition-all hover:border-foreground/30"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-foreground">{card.name}</span>
                              <span className="text-[10px] font-mono font-medium text-foreground">{card.value}</span>
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-0.5">{card.company}</p>
                            <p className="text-[10px] font-mono text-muted-foreground mt-0.5">{card.phone}</p>

                            {/* Move trigger buttons */}
                            <div className="mt-2.5 pt-2 border-t border-border flex items-center justify-between text-[10px]">
                              <span className="text-muted-foreground">Advance:</span>
                              <div className="flex items-center gap-1">
                                {col.key !== "won" && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const next =
                                        col.key === "new"
                                          ? "active"
                                          : col.key === "active"
                                          ? "proposal"
                                          : "won";
                                      moveStage(card.id, next);
                                    }}
                                    aria-label={`Advance ${card.name} to the next stage`}
                                    className="focus-ring rounded bg-secondary px-1.5 py-0.5 font-medium text-foreground hover:bg-accent border border-border flex items-center gap-0.5"
                                  >
                                    <span>Next</span>
                                    <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}

                        {columnLeads.length === 0 && (
                          <div className="py-10 text-center border border-dashed border-border rounded-lg text-xs text-muted-foreground">
                            Drop leads here
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 text-[10px] text-muted-foreground border-t border-border/50 text-center">
                      Batch fetched (20/page)
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Going Cold Intelligence Radar */}
        {activeTab === "cold" && (
          <div className="mt-10 sm:mt-12 rounded-xl border border-border bg-card p-5 sm:p-7 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <Snowflake className="h-4 w-4 text-foreground" />
                  <h3 className="text-sm font-bold text-foreground">
                    Going Cold Radar · Automated Inactivity Detection
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Active deals with zero contact in 14+ days. One-tap re-engagement links &amp; 1-click bulk escalation.
                </p>
              </div>

              <Button
                type="button"
                onClick={handleEscalateAll}
                size="sm"
                className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 font-medium text-xs shadow-xs"
              >
                <Flame className="h-3.5 w-3.5 fill-current" />
                <span>{allEscalated ? "All Escalated to High" : "Escalate All to High (1-Click)"}</span>
              </Button>
            </div>

            {/* Cold Leads Table */}
            <div className="mt-6">
              <div className="sm:hidden flex items-center justify-between text-[10px] text-muted-foreground pb-2">
                <span>Inactivity Radar</span>
                <span>← Scroll table horizontally →</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[580px] text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border text-muted-foreground font-mono uppercase text-[10px]">
                    <th className="pb-3 font-medium">Lead &amp; Contact</th>
                    <th className="pb-3 font-medium">Requirement</th>
                    <th className="pb-3 font-medium">Inactivity Duration</th>
                    <th className="pb-3 font-medium">Priority Queue</th>
                    <th className="pb-3 text-right font-medium">Re-engage Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {coldLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-secondary/20 transition-colors">
                      <td className="py-3.5">
                        <p className="font-semibold text-foreground text-xs">{lead.name}</p>
                        <p className="text-muted-foreground font-mono text-[11px]">{lead.phone}</p>
                      </td>
                      <td className="py-3.5 text-muted-foreground">{lead.requirement}</td>
                      <td className="py-3.5">
                        <span className="font-mono font-bold text-foreground">{lead.daysSilent}d silent</span>
                        <span className="block text-[10px] text-muted-foreground">
                          {lead.neverContacted ? "Added, never contacted" : `Last contact ${lead.daysSilent} days ago`}
                        </span>
                      </td>
                      <td className="py-3.5">
                        {lead.priority === "high" ? (
                          <span className="inline-flex items-center gap-1 rounded bg-foreground text-background px-2 py-0.5 text-[10px] font-bold uppercase">
                            <Flame className="h-2.5 w-2.5 fill-current" /> High Priority
                          </span>
                        ) : (
                          <span className="rounded bg-secondary border border-border px-2 py-0.5 text-[10px] text-muted-foreground font-medium">
                            Standard
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 text-right">
                        <Button
                          type="button"
                          onClick={() => handleReengage(lead.id)}
                          variant="outline"
                          size="sm"
                          className="h-8 border-border hover:bg-accent text-xs"
                        >
                          {reengagedId === lead.id ? (
                            <span className="flex items-center gap-1 text-foreground">
                              <CheckCircle2 className="h-3.5 w-3.5" /> Re-engagement Sent!
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" /> WhatsApp Nudge
                            </span>
                          )}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>

            {/* Audit log footnote */}
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
              <span>
                {allEscalated
                  ? "✓ Escalated: 3 leads pushed to Executive 'Today's Priorities' banner."
                  : "Stale leads auto-decay if uncontacted past the 14-day threshold."}
              </span>
              <span className="font-mono">StaleLeadReclamationService</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
