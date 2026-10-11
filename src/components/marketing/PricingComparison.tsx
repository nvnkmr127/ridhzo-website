import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { PLANS, getPlan, inr } from "@/lib/plans";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "@/components/site/primitives";

/**
 * Full feature-comparison matrix for the dedicated pricing page. Prices come from
 * src/lib/plans.ts; entitlements must match the plan cards there.
 * A boolean renders a check/dash; a string renders as-is.
 */
type Cell = boolean | string;

interface Row {
  label: string;
  free: Cell;
  starter: Cell;
  unlimited: Cell;
}

interface Group {
  title: string;
  rows: Row[];
}

const price = (id: "free" | "starter" | "unlimited") => {
  const p = getPlan(id);
  return p.monthly === 0 ? inr(0) : `${inr(p.monthly)}/mo`;
};

const GROUPS: Group[] = [
  {
    title: "Plan limits",
    rows: [
      { label: "Price", free: price("free"), starter: price("starter"), unlimited: price("unlimited") },
      { label: "Leads", free: "300", starter: "5,000", unlimited: "Unlimited" },
      { label: "Team seats", free: "1", starter: "3", unlimited: "Unlimited" },
      { label: "Lead sources", free: "1", starter: "5", unlimited: "Unlimited" },
      { label: "Automations", free: "2", starter: "15", unlimited: "Unlimited" },
      { label: "Follow-up sequences", free: "1", starter: "10", unlimited: "Unlimited" },
      { label: "AI credits / month", free: "15", starter: "300", unlimited: "2,000" },
    ],
  },
  {
    title: "Lead capture",
    rows: [
      { label: "Meta (Facebook & Instagram) Lead Ads sync", free: true, starter: true, unlimited: true },
      { label: "Google Lead Form Ads, webhooks & API", free: true, starter: true, unlimited: true },
      { label: "Hosted & embeddable web forms", free: true, starter: true, unlimited: true },
      { label: "No \"Powered by Ridhzo\" on forms", free: false, starter: true, unlimited: true },
      { label: "CSV import & offline lead capture", free: true, starter: true, unlimited: true },
    ],
  },
  {
    title: "Speed & follow-up",
    rows: [
      { label: "Instant push notifications", free: true, starter: true, unlimited: true },
      { label: "Round-robin lead assignment", free: true, starter: true, unlimited: true },
      { label: "1-tap WhatsApp, call & email", free: true, starter: true, unlimited: true },
      { label: "Android call sync & Caller ID", free: true, starter: true, unlimited: true },
      { label: "Pre-call brief & next best action", free: true, starter: true, unlimited: true },
      { label: "Follow-ups, reminders & meetings", free: true, starter: true, unlimited: true },
      { label: "Custom fields & lead tags", free: true, starter: true, unlimited: true },
      { label: "AI auto-tagging of incoming replies", free: false, starter: true, unlimited: true },
    ],
  },
  {
    title: "Insight & scale",
    rows: [
      { label: "Kanban pipeline, Hot & Going Cold lists", free: true, starter: true, unlimited: true },
      { label: "Dashboards, SLA tracking & team leaderboards", free: true, starter: true, unlimited: true },
      { label: "Outbound webhooks (Zapier / Make)", free: true, starter: true, unlimited: true },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-white">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-highlight" aria-label="Included" />
  ) : (
    <Minus className="mx-auto h-5 w-5 text-white/30" aria-label="Not included" />
  );
}

export function PricingComparison() {
  return (
    <HomeSection id="compare-plans">
      <div className="mx-auto flex max-w-[704px] flex-col items-center gap-3 text-center">
        <Eyebrow>Compare plans</Eyebrow>
        <SectionTitle className="mt-1">
          Every feature, side by <Accent>side.</Accent>
        </SectionTitle>
        <Lead>Upgrade only when your pipeline outgrows the plan.</Lead>
      </div>

      <div className="mx-auto mt-10 max-w-[1000px] overflow-x-auto rounded-3xl border border-white/12 bg-white/[0.04]">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/12">
              <th scope="col" className="px-5 py-5 text-xs font-medium uppercase tracking-[0.04em] text-white/50">
                Features
              </th>
              {PLANS.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={`px-5 py-5 text-center text-base font-semibold uppercase ${plan.primary ? "text-highlight" : "text-white"}`}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GROUPS.map((group) => (
              <Fragment key={group.title}>
                <tr className="bg-white/[0.04]">
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="px-5 py-3 text-left text-[13px] font-medium uppercase tracking-[0.04em] text-highlight"
                  >
                    {group.title}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-t border-white/10">
                    <th scope="row" className="px-5 py-3.5 text-sm font-normal text-white/65">
                      {row.label}
                    </th>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.free} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.starter} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellValue value={row.unlimited} />
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </HomeSection>
  );
}
