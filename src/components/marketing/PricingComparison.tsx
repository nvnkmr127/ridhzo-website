import { Fragment } from "react";
import { getPlan, inr } from "@/lib/plans";

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
    title: "PLAN LIMITS",
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
    title: "LEAD CAPTURE",
    rows: [
      { label: "Meta (Facebook & Instagram) Lead Ads sync", free: true, starter: true, unlimited: true },
      { label: "Google Lead Form Ads, webhooks & API", free: true, starter: true, unlimited: true },
      { label: "Hosted & embeddable web forms", free: true, starter: true, unlimited: true },
      { label: 'No "Powered by Ridhzo" on forms', free: false, starter: true, unlimited: true },
      { label: "CSV import & offline lead capture", free: true, starter: true, unlimited: true },
    ],
  },
  {
    title: "SPEED & FOLLOW-UP",
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
    title: "INSIGHT & SCALE",
    rows: [
      { label: "Kanban pipeline, Hot & Going Cold lists", free: true, starter: true, unlimited: true },
      { label: "Dashboards, SLA tracking & team leaderboards", free: true, starter: true, unlimited: true },
      { label: "Outbound webhooks (Zapier / Make)", free: true, starter: true, unlimited: true },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-[14px] font-medium leading-[20px] text-black">{value}</span>;
  }
  return (
    <span className="mx-auto block size-[20px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={value ? "Included" : "Not included"}
        src={value ? "/figma/f7359.svg" : "/figma/0b003.svg"}
        className="block size-[20px] max-w-none"
      />
    </span>
  );
}

/** Figma Compare in Detail section (639:14710): "WHAT ACTUALLY CHANGES?" */
export function PricingComparison() {
  return (
    <section
      id="compare-plans"
      className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[88px]"
    >
      <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-start gap-[48px] lg:gap-[72px]">
        {/* Ambient right-edge green glow (639:14711) */}
        <div
          className="pointer-events-none absolute left-[1040px] top-[41px] flex h-[827.619px] w-[461.044px] items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex-none rotate-[71.12deg]">
            <div className="relative h-[213.078px] w-[801.807px]">
              <div className="absolute inset-[-150.18%_-39.91%] [mask-image:radial-gradient(closest-side,black_70%,transparent_100%)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/b3750.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Heading row (639:14713) */}
        <div className="relative flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex flex-col items-start gap-[16px]">
            <p className="text-[12px] font-normal leading-[18px] text-[#5ee878]">COMPARE IN DETAIL</p>
            <h2 className="font-inter text-[44px] font-extrabold uppercase leading-[normal] tracking-[-0.05em] sm:text-[64px] lg:text-[72px] lg:tracking-[-5px]">
              <span className="block text-white">WHAT ACTUALLY</span>
              <span className="block text-[#5ee878]">CHANGES?</span>
            </h2>
          </div>

          <p className="w-full max-w-[443px] pb-[12px] pt-[8px] text-[16px] font-normal leading-[26px] text-white/[0.64] sm:text-[18px] sm:leading-[28px] lg:pt-[32px]">
            What changes as you grow—from lead limits to automations and AI credits.
          </p>
        </div>

        {/* Comparison Table Card (639:14722) */}
        <div className="relative w-full overflow-hidden rounded-[16px] border border-white/[0.64] bg-white text-black">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-auto" />
                <col className="w-[121.65px]" />
                <col className="w-[166.27px]" />
                <col className="w-[190.06px]" />
              </colgroup>
              <thead>
                <tr className="bg-black">
                  <th
                    scope="col"
                    className="pb-[24.75px] pl-[24px] pr-[20px] pt-[23.75px] text-[16px] font-semibold uppercase leading-[16px] tracking-[0.48px] text-white lg:pl-[40px]"
                  >
                    Features
                  </th>
                  <th
                    scope="col"
                    className="p-[20px] text-center text-[16px] font-semibold uppercase leading-[24px] text-white"
                  >
                    Free
                  </th>
                  <th
                    scope="col"
                    className="bg-[#5ee878]/[0.24] p-[20px] text-center text-[16px] font-semibold uppercase leading-[24px] text-[#5ee878]"
                  >
                    Starter
                  </th>
                  <th
                    scope="col"
                    className="p-[20px] text-center text-[16px] font-semibold uppercase leading-[24px] text-white"
                  >
                    Unlimited
                  </th>
                </tr>
              </thead>
              <tbody>
                {GROUPS.map((group) => {
                  const isLimits = group.title === "PLAN LIMITS";
                  return (
                    <Fragment key={group.title}>
                      <tr className="bg-[#5ee878]/[0.12]">
                        <th
                          scope="colgroup"
                          colSpan={4}
                          className="px-[24px] py-[12px] text-left text-[14px] font-normal leading-[20px] text-black lg:px-[40px]"
                        >
                          {group.title}
                        </th>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.label} className="border-t border-black/20">
                          <th
                            scope="row"
                            className={`pl-[24px] pr-[20px] text-[14px] font-normal leading-[20px] text-black/80 lg:pl-[40px] ${
                              isLimits ? "py-[16.5px]" : "py-[14.5px]"
                            }`}
                          >
                            {row.label}
                          </th>
                          <td
                            className={`px-[20px] text-center ${
                              isLimits ? "pb-[16px] pt-[17px]" : "py-[14.5px]"
                            }`}
                          >
                            <CellValue value={row.free} />
                          </td>
                          <td
                            className={`bg-[#5ee878]/[0.24] px-[20px] text-center ${
                              isLimits ? "pb-[16px] pt-[17px]" : "py-[14.5px]"
                            }`}
                          >
                            <CellValue value={row.starter} />
                          </td>
                          <td
                            className={`px-[20px] text-center ${
                              isLimits ? "pb-[16px] pt-[17px]" : "py-[14.5px]"
                            }`}
                          >
                            <CellValue value={row.unlimited} />
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
