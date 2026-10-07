import { ArrowRight } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";

const COLUMNS = [
  { label: "OVERDUE", count: 8, note: "Needs attention", tone: "text-red-300" },
  { label: "TODAY", count: 7, note: "Planned next actions", tone: "text-highlight" },
  { label: "UPCOMING", count: 8, note: "Already scheduled", tone: "text-white" },
];

function Card({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-[#27272d] bg-[linear-gradient(144deg,rgba(255,255,255,0.043)_6%,transparent_34%),linear-gradient(180deg,#101013,#08080a)] p-6 shadow-[0_40px_90px_rgba(0,0,0,0.38)]">
      <div className="rounded-2xl border border-white/8 bg-[#0b0c0d] p-4">{children}</div>
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.015em] text-white">{title}</h3>
        <p className="mt-1 text-sm leading-[22px] text-white/50">{body}</p>
      </div>
    </div>
  );
}

export function FollowUpSection() {
  return (
    <HomeSection id="follow-ups">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-3 text-center">
        <Eyebrow>Follow-up + automation</Eyebrow>
        <SectionTitle className="mt-1">
          Stay on top without staying <Accent>busy.</Accent>
        </SectionTitle>
        <Lead>
          Keep urgent work visible while letting repeatable tasks run in the background. Ridhzo helps your team know what
          needs attention today and automate the actions that shouldn&apos;t need manual effort.
        </Lead>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card title="Every next action in view" body="Stay ahead of calls, messages and meetings.">
          <div className="grid grid-cols-3 gap-2">
            {COLUMNS.map((c) => (
              <div key={c.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <p className="text-[10px] font-bold tracking-[0.08em] text-white/45">{c.label}</p>
                <p className={`mt-1 text-2xl font-semibold ${c.tone}`}>{c.count}</p>
                <p className="mt-1 text-[10px] text-white/40">{c.note}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Automate the handoffs" body="Build consistent workflows around real sales actions.">
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <div className="flex-1 rounded-xl border border-white/8 bg-white/[0.03] p-3">
              <p className="text-[10px] font-bold tracking-[0.08em] text-white/45">WHEN</p>
              <p className="mt-1 text-sm text-white">Lead arrives</p>
            </div>
            <ArrowRight className="mx-auto h-5 w-5 shrink-0 rotate-90 text-highlight sm:rotate-0" aria-hidden="true" />
            <div className="flex-1 rounded-xl border border-highlight/30 bg-highlight/[0.06] p-3">
              <p className="text-[10px] font-bold tracking-[0.08em] text-highlight">THEN</p>
              <p className="mt-1 text-sm text-white">Assign + follow up</p>
            </div>
          </div>
        </Card>
      </div>
    </HomeSection>
  );
}
