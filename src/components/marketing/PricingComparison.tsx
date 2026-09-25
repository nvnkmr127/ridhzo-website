import { Fragment } from "react";
import { Check, Minus } from "lucide-react";

/**
 * Full feature-comparison matrix for the dedicated pricing page. Values mirror
 * the plan cards in PricingSection so the two never contradict each other.
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

const PLANS = ["Free", "Starter", "Unlimited"] as const;

const GROUPS: Group[] = [
  {
    title: "Plan limits",
    rows: [
      { label: "Price", free: "₹0", starter: "₹249/mo", unlimited: "₹449/mo" },
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
      { label: "Priority phone & WhatsApp onboarding", free: false, starter: false, unlimited: true },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="font-mono text-xs text-foreground">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-4 w-4 text-foreground" aria-label="Included" />
  ) : (
    <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" aria-label="Not included" />
  );
}

export function PricingComparison() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Compare every plan
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Every feature, side by side. Upgrade only when your pipeline outgrows the plan.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-card/60">
                <th scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Features
                </th>
                {PLANS.map((plan) => (
                  <th
                    key={plan}
                    scope="col"
                    className="px-4 py-4 text-center text-sm font-bold text-foreground"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((group) => (
                <Fragment key={group.title}>
                  <tr className="bg-secondary/30">
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-foreground"
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-t border-border/70">
                      <th scope="row" className="px-4 py-3 text-xs font-normal text-muted-foreground">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.free} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.starter} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.unlimited} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
