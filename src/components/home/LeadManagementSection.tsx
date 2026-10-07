import { CheckCircle2, Search } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeButton, HomeSection, GlassPanel, FloatingChip } from "./primitives";

const LEADS = [
  { name: "Aarav Mehta", source: "Meta", owner: "Neha S.", status: "New" },
  { name: "P Subramanya Shetty", source: "Google", owner: "Rohan V.", status: "Contacted" },
  { name: "Ananya Rao", source: "Web form", owner: "Neha S.", status: "Qualified" },
  { name: "Manoj Lakshmanan", source: "Webhook", owner: "Ishaan K.", status: "New" },
  { name: "Kavya Nair", source: "Meta", owner: "Rohan V.", status: "Follow-up" },
];

const POINTS = [
  "One organized view across every lead source",
  "Fast search, filters and ownership assignment",
  "A complete timeline of activity and conversations",
];

export function LeadManagementSection() {
  return (
    <HomeSection id="lead-management">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_488px] lg:gap-14">
        <div className="relative">
          <FloatingChip
            badge="01"
            title="Lead assigned instantly"
            subtitle="Owner, source and next action stay together"
            className="absolute -top-6 left-3 z-10 hidden sm:flex"
          />
          <GlassPanel className="lg:min-h-[480px]">
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/40">
                <Search className="h-3.5 w-3.5" aria-hidden="true" /> Search leads, phone, source…
              </div>
              <div className="mt-4 divide-y divide-white/8 text-xs">
                <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-2 pb-2 text-[11px] uppercase tracking-wider text-white/35 sm:grid-cols-[1.6fr_1fr_1fr_1fr]">
                  <span>Lead</span>
                  <span>Source</span>
                  <span className="hidden sm:block">Owner</span>
                  <span>Status</span>
                </div>
                {LEADS.map((l) => (
                  <div key={l.name} className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 py-3 sm:grid-cols-[1.6fr_1fr_1fr_1fr]">
                    <span className="truncate text-white/85">{l.name}</span>
                    <span className="text-white/50">{l.source}</span>
                    <span className="hidden text-white/50 sm:block">{l.owner}</span>
                    <span className="w-fit rounded-full bg-highlight/10 px-2 py-0.5 text-[11px] text-highlight">{l.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>
          <FloatingChip
            title="Ready to respond"
            subtitle="Call · WhatsApp · Email"
            className="absolute -bottom-5 right-4 z-10 hidden sm:flex"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <div className="flex flex-col gap-3">
              <Eyebrow className="w-fit">Lead management</Eyebrow>
              <SectionTitle>
                Every lead, in one <Accent>place.</Accent>
              </SectionTitle>
              <Lead>
                Bring your inbound leads into a single workspace instead of jumping between forms, ads, spreadsheets, and
                conversations. Search, filter, assign, and review the information your team needs before taking the next action.
              </Lead>
            </div>
            <ul className="mt-4 space-y-3.5 py-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-[11px] text-sm leading-5 text-white/65">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-highlight" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <HomeButton href="/features/lead-management" variant="secondary" size="md" arrow className="w-fit">
            Explore Lead Management
          </HomeButton>
        </div>
      </div>
    </HomeSection>
  );
}
