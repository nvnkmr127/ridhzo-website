"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LEAD_FAQS } from "./lead-management-faqs";

type LeadFilter = "all" | "new" | "active";

interface DemoLead {
  initials: string;
  name: string;
  meta: string;
  statusLabel: "QUALIFIED" | "NEW" | "CONTACTED";
  filterGroup: "new" | "active";
  badgeClass: string;
  firstRow?: boolean;
}

const DEMO_LEADS: readonly DemoLead[] = [
  {
    initials: "PK",
    name: "Priya Kapoor",
    meta: "Google Lead Form · Site visit",
    statusLabel: "QUALIFIED",
    filterGroup: "active",
    badgeClass:
      "border-[#10b981]/70 bg-[#10b981]/20 px-[13.871px] text-[#10b981] text-[9.247px]",
    firstRow: true,
  },
  {
    initials: "AS",
    name: "Aarav Sharma",
    meta: "Meta Lead Ads · Brochure enquiry",
    statusLabel: "NEW",
    filterGroup: "new",
    badgeClass:
      "border-[#3d89f5]/70 bg-[#3d89f5]/20 px-[18.495px] text-[#3d89f5] text-[9.247px]",
  },
  {
    initials: "SN",
    name: "Sana Nair",
    meta: "Website · Demo request",
    statusLabel: "CONTACTED",
    filterGroup: "active",
    badgeClass:
      "border-[#f59e0b]/70 bg-[#f59e0b]/20 px-[13.871px] text-[#f59e0b] text-[9.132px]",
  },
];

const FILTER_TABS: readonly { id: LeadFilter; label: string }[] = [
  { id: "all", label: "All leads" },
  { id: "new", label: "New" },
  { id: "active", label: "Active" },
];

/**
 * Interactive Figma "Illustrative lead inbox" (573:22528).
 * Renders the exact demo leads in its default "All leads" state and supports
 * live search, ⌘K shortcut focus, and filter pills.
 */
export function LeadInboxPreview() {
  const [filter, setFilter] = useState<LeadFilter>("all");
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        const tag = (e.target as HTMLElement | null)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const visibleLeads = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEMO_LEADS.filter((lead) => {
      if (filter !== "all" && lead.filterGroup !== filter) return false;
      if (!q) return true;
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.meta.toLowerCase().includes(q) ||
        lead.statusLabel.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  const countLabel =
    query.trim() || filter !== "all" ? `${visibleLeads.length} SHOWN` : "248";

  return (
    <div className="flex w-full flex-col gap-[6.935px] rounded-[18.495px] border-[1.156px] border-white/[0.08] bg-[#0a0a0a] p-[18px] sm:p-[20.806px] lg:w-[645px]">
      {/* Header row (573:22529) */}
      <div className="flex w-full items-center justify-between border-b-[1.156px] border-[#292929] pb-[15.027px]">
        <span className="font-inter text-[12.715px] font-bold leading-normal text-white/80">
          Leads
        </span>
        <span className="font-inter text-[10.403px] font-bold leading-normal text-white/[0.48]">
          ALL LEADS <span className="text-white/80">•</span> {countLabel}
        </span>
      </div>

      {/* Search input (573:22534) */}
      <div className="w-full pt-[18.495px]">
        <div className="flex w-full items-center gap-[9.247px] rounded-[10.403px] border-[1.156px] border-[#383a38] px-[13.871px] py-[9.247px] transition-colors focus-within:border-[#5ee878]/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/9f64b.svg"
            width={20}
            height={20}
            aria-hidden="true"
            className="block size-[19.651px] shrink-0 max-w-none"
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                if (query) {
                  setQuery("");
                } else {
                  e.currentTarget.blur();
                }
              }
            }}
            placeholder="Search name, source, company…"
            aria-label="Search demo leads by name, source, or status"
            className="min-w-0 flex-1 bg-transparent font-sans text-[12.715px] font-normal leading-normal text-white placeholder:text-[#989b98] focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
          />
          <button
            type="button"
            onClick={() => inputRef.current?.focus()}
            aria-label="Focus lead search"
            className="focus-ring shrink-0 rounded-[4.624px] border-[1.156px] border-[#333] p-[4.624px] font-sans text-[10.403px] leading-normal text-[#989b98] transition-colors hover:border-white/30 hover:text-white"
          >
            ⌘K
          </button>
        </div>
      </div>

      {/* Filter pills (573:22544) */}
      <div
        role="group"
        aria-label="Filter demo leads"
        className="flex w-full items-start gap-[9.247px] pb-[9.247px] pt-[18.495px]"
      >
        {FILTER_TABS.map((tab) => {
          const active = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(tab.id)}
              className={cn(
                "focus-ring inline-flex items-center justify-center rounded-[23.118px] border-[1.156px] px-[13.871px] py-[9.247px] text-center font-inter text-[11.559px] leading-normal transition-colors",
                active
                  ? "border-[#5ee878] bg-[#5ee878] font-semibold text-black"
                  : "border-[#353935] bg-[#151515] font-normal text-white/[0.48] hover:border-white/25 hover:text-white/80",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Lead list rows */}
      {visibleLeads.length > 0 ? (
        visibleLeads.map((lead) => (
          <div
            key={lead.name}
            className={cn(
              "flex w-full items-center gap-[13.871px] rounded-[11.559px] border-[1.156px] border-white/[0.08] bg-[#111] px-[10.403px]",
              lead.firstRow ? "pb-[10.403px] pt-[13.871px]" : "py-[10.403px]",
            )}
          >
            <div className="flex size-[36.989px] shrink-0 items-center justify-center rounded-[18.495px] bg-[#5ee878]/20 font-inter text-[11.559px] font-extrabold leading-normal text-[#5ee878]">
              {lead.initials}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[4.624px]">
              <p className="truncate font-inter text-[12.484px] font-bold leading-normal text-white">
                {lead.name}
              </p>
              <p className="truncate font-inter text-[10.981px] font-normal leading-normal text-white/[0.48]">
                {lead.meta}
              </p>
            </div>
            <span
              className={cn(
                "inline-flex shrink-0 items-center justify-center rounded-full border-[1.156px] py-[8.091px] font-inter font-extrabold leading-normal tracking-[0.2774px]",
                lead.badgeClass,
              )}
            >
              {lead.statusLabel}
            </span>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-between rounded-[11.559px] border-[1.156px] border-white/[0.08] bg-[#111] px-[14px] py-[18px]">
          <p className="font-inter text-[12px] text-white/60">
            No demo leads match &ldquo;{query}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("all");
            }}
            className="focus-ring rounded-md font-inter text-[11px] font-semibold text-[#5ee878] hover:underline"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

type ActionChoice = "call" | "whatsapp" | "meeting";

const ACTION_DETAILS: Record<
  ActionChoice,
  { heading: string; body: string; pill: string }
> = {
  whatsapp: {
    heading: "Don't lose the momentum.",
    body: "Confirm the scheduled site visit. The next action stays on the lead record.",
    pill: "Follow-up scheduled ✓",
  },
  call: {
    heading: "Speak with full context.",
    body: "Place the call directly from the lead profile and log the outcome in seconds.",
    pill: "Ready to dial ✓",
  },
  meeting: {
    heading: "Lock in the next step.",
    body: "Book the site visit on your calendar and keep ownership clear for the team.",
    pill: "Calendar slot ready ✓",
  },
};

/**
 * Interactive tilted Lead Profile example card (573:22656).
 * Defaults to WhatsApp selected, matching the Figma design pixel-for-pixel,
 * while letting visitors toggle Call / WhatsApp / Meeting to preview the next move.
 */
export function LeadProfilePreview() {
  const [selected, setSelected] = useState<ActionChoice>("whatsapp");
  const details = ACTION_DETAILS[selected];

  return (
    <div className="w-full max-w-[650px] lg:w-[650px] lg:shrink-0">
      <div className="flex w-full -rotate-1 flex-col rounded-[16px] bg-[#f8f8f8] p-[20px] drop-shadow-[0px_22px_40px_rgba(0,0,0,0.53)] sm:p-[24px] lg:h-[416px]">
        {/* Header row (573:22659) */}
        <div className="flex w-full items-start justify-between gap-4 border-b border-[#ddd] pb-[20px]">
          <div className="flex min-w-0 flex-col items-start">
            <p className="font-inter text-[10px] font-extrabold uppercase leading-normal tracking-[1.3px] text-[#7e817e]">
              LEAD PROFILE / EXAMPLE
            </p>
            <div className="flex items-center gap-[8px] py-[8px]">
              <p className="font-inter text-[24px] font-bold leading-none tracking-[-1.3px] text-[#111] sm:text-[26px]">
                Priya Nair
              </p>
              <span className="inline-flex h-[24px] items-center justify-center rounded-[50px] bg-[#ececec] px-[12px] font-inter text-[10px] font-semibold leading-normal text-[#111]">
                Open
              </span>
            </div>
            <p className="font-sans text-[12px] font-normal leading-normal text-[#888]">
              Residential enquiry · Web Form
            </p>
          </div>
          <p className="shrink-0 font-inter text-[10px] font-bold leading-normal text-[#174221]">
            Assigned to Neha
          </p>
        </div>

        {/* Action buttons (573:22671) */}
        <div className="grid w-full grid-cols-3 gap-[8px] pt-[20px]">
          {(
            [
              { id: "call", label: "Call" },
              { id: "whatsapp", label: "WhatsApp ↗" },
              { id: "meeting", label: "Meeting" },
            ] as const
          ).map((btn) => {
            const isSelected = selected === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelected(btn.id)}
                className={cn(
                  "focus-ring flex h-[43px] items-center justify-center whitespace-nowrap rounded-[8px] border px-2 py-[12px] text-center font-inter text-[11px] leading-normal text-[#111] transition-colors sm:p-[12px]",
                  isSelected
                    ? "border-[#5ee878] bg-[#5ee878] font-bold"
                    : "border-[#ddd] bg-white font-semibold hover:border-[#bbb]",
                )}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Record details + Next best action (573:22678) */}
        <div className="grid w-full flex-1 grid-cols-1 gap-[12px] pt-[20px] sm:grid-cols-[310.34fr_279.30fr]">
          {/* Record details */}
          <div className="flex flex-col items-start">
            <p className="font-inter text-[10px] font-extrabold uppercase leading-normal tracking-[1.3px] text-[#7e817e]">
              RECORD DETAILS
            </p>
            <div className="flex w-full items-center justify-between border-b border-[#e4e4e4] py-[12px] text-[11px] leading-normal">
              <span className="font-sans font-normal text-[#777]">Owner</span>
              <span className="font-inter font-bold text-[#111]">Neha S.</span>
            </div>
            <div className="flex w-full items-center justify-between border-b border-[#e4e4e4] py-[12px] text-[11px] leading-normal">
              <span className="font-sans font-normal text-[#777]">Pipeline</span>
              <span className="font-inter font-bold text-[#111]">Active</span>
            </div>
            <div className="flex w-full items-center justify-between border-b border-[#e4e4e4] py-[12px] text-[11px] leading-normal">
              <span className="font-sans font-normal text-[#777]">Source</span>
              <span className="font-inter font-bold text-[#111]">Website form</span>
            </div>
            <div className="flex w-full items-center justify-between border-b border-[#e4e4e4] py-[12px] text-[11px] leading-normal">
              <span className="font-sans font-normal text-[#777]">Next follow-up</span>
              <span className="font-inter font-bold text-[#111]">Tomorrow, 10:30 AM</span>
            </div>
          </div>

          {/* Next best action */}
          <div className="flex flex-col items-start rounded-[12px] bg-[#e6f7e6] p-[16px]">
            <p className="font-inter text-[10px] font-extrabold uppercase leading-normal tracking-[1.3px] text-[#7e817e]">
              NEXT BEST ACTION
            </p>
            <p className="pt-[20px] font-inter text-[21px] font-bold leading-[25.2px] tracking-[-1.05px] text-[#111]">
              {details.heading}
            </p>
            <p className="py-[12px] font-sans text-[12px] font-normal leading-[19.2px] text-[#536357]">
              {details.body}
            </p>
            <span className="mt-auto inline-flex h-[29px] items-center rounded-[50px] bg-[#d9fadd] px-[12px] font-inter text-[10px] font-bold leading-normal text-[#174221]">
              {details.pill}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Interactive accordion for Section 4 ("COMMON QUESTIONS" / 573:22760). */
export function LeadManagementFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full flex-1 border-t border-black/20">
      {LEAD_FAQS.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q} className="w-full border-b border-black/20 py-[20px]">
            <div className="flex flex-col gap-[4px] px-[8px]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`lead-faq-panel-${idx}`}
                onClick={() => setOpen(isOpen ? null : idx)}
                className="focus-ring focus-ring-light flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span className="font-sans text-[16px] font-normal leading-[24px] text-black">
                  {item.q}
                </span>
                <span className="relative size-[20px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src={isOpen ? "/figma/3918f.svg" : "/figma/e4128.svg"}
                    width={20}
                    height={20}
                    className="block size-full max-w-none"
                  />
                </span>
              </button>
              {isOpen ? (
                <p
                  id={`lead-faq-panel-${idx}`}
                  className="font-sans text-[14px] font-normal leading-[20px] text-black/[0.48]"
                >
                  {item.a}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

