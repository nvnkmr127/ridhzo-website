import { CheckCircle2 } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeButton, HomeSection, GlassPanel, FloatingChip } from "./primitives";

const POINTS = [
  "Monitor response speed and team activity",
  "Compare lead sources and conversion progress",
  "Catch stalled leads before they slip away",
];
const LINE = [38, 44, 40, 52, 49, 60, 58, 70, 66, 78, 84, 92];

export function InsightsSection() {
  const path = LINE.map((v, i) => `${i === 0 ? "M" : "L"}${(i / (LINE.length - 1)) * 300},${100 - v}`).join(" ");
  return (
    <HomeSection id="insights">
      <div className="grid items-center gap-10 lg:grid-cols-[488px_1fr] lg:gap-14">
        <div className="order-2 flex flex-col gap-10 lg:order-1">
          <div>
            <div className="flex flex-col gap-3">
              <Eyebrow className="w-fit">Insights</Eyebrow>
              <SectionTitle>
                Know what&apos;s <Accent>working.</Accent>
              </SectionTitle>
              <Lead>
                Understand where your leads come from, how your pipeline is performing, and where your team needs to focus.
                Ridhzo turns sales activity into a clearer picture of what is moving and what is stuck.
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
          <HomeButton href="/features/dashboards" variant="secondary" size="md" arrow className="w-fit">
            Explore Insights
          </HomeButton>
        </div>

        <div className="relative order-1 lg:order-2">
        <FloatingChip
          title="₹ 10.23 Cr"
          subtitle="Revenue forecast"
          className="absolute -bottom-5 left-4 z-10 hidden sm:flex"
        />
        <GlassPanel>
          <div className="p-5">
            <p className="text-sm font-medium text-white/80">Pipeline overview</p>
            <p className="text-xs text-white/45">Leads over the last 12 weeks</p>
            <svg viewBox="0 0 300 100" className="mt-5 h-32 w-full" role="img" aria-label="Revenue forecast trending upward" preserveAspectRatio="none">
              <path d={`${path} L300,100 L0,100 Z`} fill="rgba(94,232,120,0.10)" />
              <path d={path} fill="none" stroke="#5ee878" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <p className="text-white/45">Avg. first response</p>
                <p className="mt-1 text-lg font-semibold text-white">4m 19s</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <p className="text-white/45">Best source</p>
                <p className="mt-1 text-lg font-semibold text-highlight">Meta Lead Ads</p>
              </div>
            </div>
          </div>
        </GlassPanel>
        </div>
      </div>
    </HomeSection>
  );
}
