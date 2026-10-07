import { CheckCircle2 } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeButton, HomeSection, ShotPanel, FloatingChip } from "./primitives";

const POINTS = [
  "One organized view across every lead source",
  "Fast search, filters and ownership assignment",
  "A complete timeline of activity and conversations",
];

export function LeadManagementSection() {
  return (
    <HomeSection id="lead-management" texture>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_488px] lg:gap-14">
        <div className="relative">
          <FloatingChip
            badge="01"
            title="Lead assigned instantly"
            subtitle="Owner, source and next action stay together"
            className="absolute -top-6 left-3 z-10 hidden sm:flex"
          />
          <ShotPanel
            src="/home/lead-management.webp"
            alt="Ridhzo lead list with status filters, search and contact details"
            width={664}
            height={496}
            sizes="(min-width: 1024px) 664px, 100vw"
          />
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
