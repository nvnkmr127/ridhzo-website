import { CheckCircle2 } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeButton, HomeSection, ShotPanel, FloatingChip } from "./primitives";

const POINTS = [
  "Monitor response speed and team activity",
  "Compare lead sources and conversion progress",
  "Catch stalled leads before they slip away",
];

export function InsightsSection() {
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
        <ShotPanel
          src="/home/insights.webp"
          alt="Ridhzo insights: pipeline scorecard, best time to reach leads and revenue forecast"
          width={664}
          height={496}
        />
        </div>
      </div>
    </HomeSection>
  );
}
