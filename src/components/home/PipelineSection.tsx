import { Eyebrow, SectionTitle, Accent, Lead, HomeSection, GlassPanel } from "./primitives";

const COLUMNS = [
  {
    title: "New",
    cards: [
      { name: "Aarav Mehta", note: "Meta Lead Ads · 2m ago" },
      { name: "Priya Venkatesh", note: "Website form · 14m ago" },
      { name: "Kunal Shah", note: "Google Lead Form · 1h ago" },
    ],
  },
  {
    title: "Active",
    cards: [
      { name: "Neha Iyer", note: "Site visit · Today 4:00 PM" },
      { name: "Rahul Desai", note: "Quote sent · Follow up tomorrow" },
    ],
  },
  { title: "Won", cards: [{ name: "Sana Qureshi", note: "Closed · ₹14.5 L" }] },
];

export function PipelineSection() {
  return (
    <HomeSection id="pipeline">
      <div className="mx-auto flex max-w-[672px] flex-col items-center gap-3 text-center">
        <Eyebrow>Pipeline management</Eyebrow>
        <SectionTitle className="mt-1">
          See every deal move <Accent>forward.</Accent>
        </SectionTitle>
        <Lead>
          Give your team a shared view of what is new, active, qualified, stalled, and ready to close. Move leads through
          clear stages without losing ownership or context.
        </Lead>
      </div>
      <GlassPanel className="mt-10 sm:p-8">
        <div className="grid gap-px bg-white/8 md:grid-cols-3">
          {COLUMNS.map((c) => (
            <div key={c.title} className="min-h-[220px] bg-[#0a0b0c] p-4 md:min-h-[420px]">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/60">{c.cards.length}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.cards.map((card) => (
                  <li key={card.name} className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
                    <p className="text-sm text-white/90">{card.name}</p>
                    <p className="mt-1 text-xs text-white/45">{card.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GlassPanel>
    </HomeSection>
  );
}
