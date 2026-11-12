import Link from "next/link";
import { SectionEyebrowBar } from "./SectionEyebrowBar";

const LEAD_ROWS = [
  {
    initials: "PK",
    name: "Priya Kapoor",
    meta: "Google Lead Form · Site visit",
    badge: "QUALIFIED",
    badgeClass: "bg-[rgba(16,185,129,0.2)] border-[rgba(16,185,129,0.7)] text-[#10b981]",
  },
  {
    initials: "AS",
    name: "Aarav Sharma",
    meta: "Meta Lead Ads · Brochure enquiry",
    badge: "NEW",
    badgeClass: "bg-[rgba(61,137,245,0.2)] border-[rgba(61,137,245,0.7)] text-[#3d89f5] px-[16px]",
  },
  {
    initials: "SN",
    name: "Sana Nair",
    meta: "Website · Demo request",
    badge: "CONTACTED",
    badgeClass: "bg-[rgba(245,158,11,0.2)] border-[rgba(245,158,11,0.7)] text-[#f59e0b]",
  },
] as const;

const WORKLOAD_ROWS = [
  { initials: "NS", name: "Neha", count: "12", barWidth: "76%" },
  { initials: "RC", name: "Rahul", count: "8", barWidth: "20%" },
  { initials: "AS", name: "Anita", count: "15", barWidth: "91.6%" },
  { initials: "MK", name: "Mohan", count: "10", barWidth: "31.5%" },
] as const;

const INSIGHT_BARS = [
  { height: 48, solid: false },
  { height: 73, solid: false },
  { height: 65, solid: false },
  { height: 106, solid: true },
  { height: 89, solid: false },
  { height: 135, solid: true },
  { height: 120, solid: false },
] as const;

/** Figma Toolkit Bento section (573:24697): "EVERY DETAIL. IN IT'S PLACE." */
export function ToolkitSection() {
  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-[84px] lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <SectionEyebrowBar left="THE WHOLE TOOLKIT" right="POWERFUL WITHOUT THE CLUTTER" theme="dark" />

        <div className="flex w-full flex-col items-start justify-between gap-6 pt-[48px] lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.15]">
            <span className="flex items-start gap-[0.18em] lg:gap-[16px]">
              <span className="tracking-[-0.05em] text-white lg:tracking-[-5px]">EVERY</span>
              <span className="text-outline-white">DETAIL.</span>
            </span>
            <span className="flex items-start gap-[0.18em] lg:gap-[16px]">
              <span className="tracking-[-0.05em] text-white lg:tracking-[-5px]">IN IT’S</span>
              <span className="text-outline-white">PLACE.</span>
            </span>
          </h2>

          <p className="type-body-lg w-full max-w-[323px] pb-[12px] text-white/[0.64]">
            One straightforward price for your workspace. Not a bill for every seat.
          </p>
        </div>

        {/* 2-Row Bento */}
        <div className="flex w-full flex-col gap-[32px] pt-[48px] lg:pt-[72px]">
          {/* Row 1: 2 Cards */}
          <div className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-2">
            {/* Lead Management */}
            <article className="flex flex-col items-start justify-between overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] sm:p-[32px]">
              <div className="w-full">
                <div className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/4b990.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="type-label text-black/[0.64]">LEAD MANAGEMENT</span>
                </div>
                <h3 className="type-h3 pt-[32px] text-black">
                  A clear view
                  <br />
                  of every lead.
                </h3>
                <p className="type-body pt-[19px] text-black/[0.64]">
                  Sort, search and filter enquiries from one place. Find the right lead record without digging through
                  messages or sheets.
                </p>
              </div>

              <div className="w-full pt-[40px] lg:pt-[56px]">
                <div className="flex w-full flex-col gap-[6px] rounded-[16px] border border-white/[0.08] bg-[#0a0a0a] p-[18px] lg:h-[246px] lg:justify-between">
                  <div className="flex items-center justify-between border-b border-[#292929] pb-[13px]">
                    <span className="font-inter text-[11px] font-bold text-white/80">Leads</span>
                    <span className="font-inter text-[9px] font-bold text-white/[0.48]">
                      ALL LEADS <span className="text-white/80">•</span> 248
                    </span>
                  </div>
                  {LEAD_ROWS.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center gap-[12px] rounded-[10px] border border-white/[0.08] bg-[#111] p-[9px]"
                    >
                      <span className="flex size-[32px] shrink-0 items-center justify-center rounded-[16px] bg-[#5ee878]/20 font-inter text-[10px] font-extrabold text-[#5ee878]">
                        {row.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-inter text-[10.8px] font-bold text-white">{row.name}</p>
                        <p className="truncate pt-[4px] font-inter text-[9.5px] text-white/[0.48]">{row.meta}</p>
                      </div>
                      <span
                        className={`rounded-full border px-[12px] py-[7px] font-inter text-[8px] font-extrabold tracking-[0.24px] ${row.badgeClass}`}
                      >
                        {row.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Kanban Pipeline */}
            <article className="flex flex-col items-start justify-between overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] sm:p-[32px]">
              <div className="w-full">
                <div className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/c9dff.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="type-label text-black/[0.64]">KANBAN PIPELINE</span>
                </div>
                <h3 className="type-h3 pt-[32px] text-black">
                  Know exactly
                  <br />
                  where deals stand.
                </h3>
                <p className="type-body pt-[19px] text-black/[0.64]">
                  Turn conversation context into a thoughtful first draft. Your team reviews it, makes it theirs, and
                  stays in control.
                </p>
              </div>

              <div className="w-full pt-[40px] lg:pt-[56px]">
                <div className="grid w-full grid-cols-3 gap-[8px] rounded-[16px] border border-white/[0.08] bg-[#0a0a0a] p-[18px] lg:h-[246px]">
                  <div className="flex flex-col gap-[6px] rounded-[7px] border border-white/[0.08] bg-[#111] p-[9px]">
                    <div className="flex items-center justify-between pb-[7px]">
                      <span className="font-inter text-[9px] font-extrabold tracking-[0.27px] text-[#f8f8f8]">NEW</span>
                      <span className="font-inter text-[10px] font-extrabold tracking-[0.27px] text-[#5ee878]">12</span>
                    </div>
                    {[
                      { name: "Aarav S.", src: "Website form" },
                      { name: "Sana N.", src: "Meta campaign" },
                      { name: "Sana N.", src: "Meta campaign" },
                    ].map((c, i) => (
                      <div key={i} className="flex flex-col gap-[6px] rounded-[5px] border border-white/[0.08] bg-white/[0.06] p-[9px]">
                        <p className="font-inter text-[11px] font-bold text-white">{c.name}</p>
                        <p className="font-inter text-[8.4px] font-medium leading-[12.6px] text-white/[0.48]">{c.src}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-[6px] rounded-[7px] border border-white/[0.08] bg-[#111] px-[9px] pb-[47.81px] pt-[9px]">
                    <div className="flex items-center justify-between pb-[7px]">
                      <span className="font-inter text-[9px] font-extrabold tracking-[0.27px] text-[#f8f8f8]">
                        IN PROGRESS
                      </span>
                      <span className="font-inter text-[10px] font-extrabold tracking-[0.27px] text-[#5ee878]">8</span>
                    </div>
                    {[
                      { name: "Priya K.", src: "Site visit booked" },
                      { name: "Rahul M.", src: "Quote sent" },
                    ].map((c) => (
                      <div key={c.name} className="flex flex-col gap-[6px] rounded-[5px] border border-white/[0.08] bg-white/[0.06] p-[9px]">
                        <p className="font-inter text-[11px] font-bold text-white">{c.name}</p>
                        <p className="font-inter text-[8.4px] font-medium leading-[12.6px] text-white/[0.48]">{c.src}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-[13px] rounded-[7px] border border-white/[0.08] bg-[#111] px-[9px] pb-[106.41px] pt-[9px]">
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-[9px] font-extrabold tracking-[0.27px] text-[#f8f8f8]">WON</span>
                      <span className="font-inter text-[10px] font-extrabold tracking-[0.27px] text-[#5ee878]">0</span>
                    </div>
                    <div className="flex h-[50px] w-full items-center justify-center rounded-[5px] border border-dashed border-white/[0.08] bg-white/[0.06] p-[9px]">
                      <span className="text-center font-inter text-[8px] font-medium leading-[12.6px] text-white/[0.48]">
                        Drop leads here
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Row 2: 3 Cards */}
          <div className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-3">
            {/* Meetings */}
            <article className="flex flex-col items-start justify-between overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] sm:p-[32px]">
              <div className="w-full">
                <div className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/d51f4.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="type-label text-black/[0.64]">MEETINGS</span>
                </div>
                <h3 className="type-h3 pt-[32px] text-black">
                  Meetings, without
                  <br />
                  the calendar chaos.
                </h3>
                <p className="type-body pt-[19px] text-black/[0.64]">
                  Plan calls and site visits, with a clear calendar and scheduled appointments in one view.
                </p>
              </div>

              <div className="w-full pt-[40px] lg:pt-[56px]">
                <div className="flex h-[206px] w-full flex-col justify-between gap-[8px]">
                  <div className="grid h-[120px] grid-cols-5 grid-rows-[10px_42px] gap-x-[8px] gap-y-[12px] rounded-t-[16px] border border-white/[0.08] bg-[#0a0a0a] px-[13px] pb-[18px] pt-[26px]">
                    {["MON", "TUE", "WED", "THU", "FRI"].map((day) => (
                      <span key={day} className="text-center font-inter text-[11px] font-semibold leading-[10px] text-[#888]">
                        {day}
                      </span>
                    ))}
                    {[20, 21, 22, 23, 24].map((d) => {
                      const active = d === 23;
                      return (
                        <span
                          key={d}
                          className={`flex h-[42px] items-center justify-center rounded-[8px] border px-[2px] text-center font-inter text-[14px] ${
                            active
                              ? "border-[#5ee878]/[0.48] bg-[#5ee878] font-semibold text-black/80"
                              : "border-white/[0.08] bg-[#111] font-normal text-white"
                          }`}
                        >
                          {d}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex h-[78px] flex-col justify-center gap-[4px] rounded-b-[16px] border border-white/[0.08] bg-[#111] px-[12px] py-[8px]">
                    <p className="font-inter text-[9px] font-semibold leading-[1.2] tracking-[0.99px] text-[#5ee878]">
                      23 OCT · 10:30 AM
                    </p>
                    <p className="font-inter text-[12px] font-semibold leading-[1.2] tracking-[-0.36px] text-white">
                      Site visit with Priya
                    </p>
                    <p className="font-inter text-[11px] font-normal leading-[1.2] text-white/[0.48]">
                      Calendar appointment
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sales Insights */}
            <article className="flex flex-col items-start justify-between overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] sm:p-[32px]">
              <div className="w-full">
                <div className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/ea49b.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="type-label text-black/[0.64]">SALES INSIGHTS</span>
                </div>
                <h3 className="type-h3 pt-[32px] text-black">
                  Make decisions
                  <br />
                  with real insight.
                </h3>
                <p className="type-body pt-[19px] text-black/[0.64]">
                  Compare lead sources and stage conversion visually to focus efforts.
                </p>
              </div>

              <div className="w-full pt-[40px] lg:pt-[56px]">
                <div className="flex h-[206px] w-full flex-col gap-[2px]">
                  <div className="flex h-[195px] w-full items-end gap-[8px] rounded-t-[16px] border border-white/[0.08] bg-[#0a0a0a] px-[13px] pb-[12px] pt-[18px]">
                    {INSIGHT_BARS.map((bar, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 rounded-t-[6px] ${
                          bar.solid ? "bg-white/[0.64]" : "bg-gradient-to-b from-[#363636] to-[#8a8a8a]"
                        }`}
                        style={{ height: `${bar.height}px` }}
                      />
                    ))}
                  </div>
                  <div className="flex h-[11px] items-center justify-between px-[6px] font-inter text-[11px] text-black/[0.48]">
                    <span>Meta</span>
                    <span>Google</span>
                    <span>Web</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Team Visibility */}
            <article className="flex flex-col items-start justify-between overflow-hidden rounded-[20px] border border-white/20 bg-white p-[24px] sm:p-[32px]">
              <div className="w-full">
                <div className="flex items-center gap-[12px]">
                  <span className="relative size-[20px] shrink-0" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/0a3e7.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="type-label text-black/[0.64]">TEAM VISIBILITY</span>
                </div>
                <h3 className="type-h3 pt-[32px] text-black">
                  See the team’s
                  <br />
                  workload at a glance.
                </h3>
                <p className="type-body pt-[19px] text-black/[0.64]">
                  Understand who has capacity and how many open opportunities each person is managing.
                </p>
              </div>

              <div className="w-full pt-[40px] lg:pt-[56px]">
                <div className="flex h-[206px] w-full flex-col justify-center gap-[8px] rounded-[16px] border border-white/[0.08] bg-[#0a0a0a] p-[13px]">
                  <div className="flex items-center justify-between border-b border-[#292929] pb-[8px]">
                    <span className="font-inter text-[11px] font-bold text-white/80">OPEN OPPORTUNITIES</span>
                    <span className="font-inter text-[9px] font-bold text-white/[0.48]">TEAM VIEW</span>
                  </div>
                  {WORKLOAD_ROWS.map((member) => (
                    <div key={member.name} className="flex items-center gap-[8px]">
                      <div className="flex w-[78px] shrink-0 items-center gap-[5px]">
                        <span className="flex size-[32px] shrink-0 items-center justify-center rounded-[16px] bg-[#5ee878]/20 font-inter text-[10px] font-extrabold text-[#5ee878]">
                          {member.initials}
                        </span>
                        <span className="font-inter text-[11px] font-bold text-white">{member.name}</span>
                      </div>
                      <div className="h-[7px] flex-1 overflow-hidden rounded-[6px] bg-[#5ee878]/[0.16]">
                        <div className="h-[7px] rounded-[6px] bg-[#5ee878]" style={{ width: member.barWidth }} />
                      </div>
                      <span className="w-[18px] text-right font-inter text-[11px] font-extrabold text-white/[0.64]">
                        {member.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex w-full items-center justify-center pt-[48px] lg:pt-[72px]">
          <Link
            href="/features"
            className="focus-ring inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[14px] border border-white px-[24px] text-[14px] font-medium leading-[20px] text-white transition-colors hover:bg-white/10"
          >
            See every Ridhzo feature
            <span className="relative size-[24px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/d9b5b.svg" className="block size-full max-w-none" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

