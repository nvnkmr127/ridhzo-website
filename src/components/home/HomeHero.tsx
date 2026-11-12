"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { appUrl } from "@/lib/config";
import { PhoneDashboardScreen } from "./PhoneDashboardMockup";

const SIDEBAR_GROUPS = [
  {
    title: "ANALYTICS",
    items: [
      { label: "Dashboard", icon: "/figma/64dbd.svg", active: true },
      { label: "My Dashboard", icon: "/figma/c83e5.svg" },
      { label: "Insights", icon: "/figma/3a61d.svg" },
      { label: "Meta Ads ROI", icon: "/figma/5a016.svg" },
    ],
  },
  {
    title: "CRM",
    items: [
      { label: "Leads", icon: "/figma/f4389.svg" },
      { label: "Pipeline Board", icon: "/figma/2ce71.svg" },
      { label: "Cold Leads", icon: "/figma/4a7b6.svg" },
    ],
  },
  {
    title: "PRODUCTIVITY",
    items: [
      { label: "Follow-ups", icon: "/figma/e2207.svg" },
      { label: "Meetings", icon: "/figma/ce3f8.svg" },
      { label: "Calls", icon: "/figma/8b6e7.svg" },
      { label: "Automations", icon: "/figma/ac9ff.svg" },
      { label: "Sequences", icon: "/figma/27a53.svg" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Sources", icon: "/figma/35e01.svg" },
      { label: "Integrations", icon: "/figma/5c788.svg" },
      { label: "Billing", icon: "/figma/44510.svg" },
      { label: "Settings", icon: "/figma/20c8f.svg" },
      { label: "Help & support", icon: "/figma/08c20.svg" },
    ],
  },
] as const;

const PRIORITY_ROWS = [
  {
    name: "R Srinivasa Raju",
    badge: "Book a meeting / send proposal",
    note: "Strong engagement (score 70+) — push for the next commitment.",
    waIcon: "/figma/bac7e.svg",
    callIcon: "/figma/a46b6.svg",
  },
  {
    name: "Srinivas Chimalamarri",
    badge: "Book a meeting / send proposal",
    note: "Strong engagement (score 70+) — push for the next commitment.",
    waIcon: "/figma/bac7e.svg",
    callIcon: "/figma/a46b6.svg",
  },
  {
    name: "Poonam",
    badge: "Follow-up overdue — reach out now",
    note: "The follow-up you planned has passed.",
    waIcon: "/figma/ec083.svg",
    callIcon: "/figma/9e5ca.svg",
  },
  {
    name: "V Subramanya Setty Setty",
    badge: "Book a meeting / send proposal",
    note: "Strong engagement (score 70+) — push for the next commitment.",
    waIcon: "/figma/22318.svg",
    callIcon: "/figma/150f5.svg",
  },
  {
    name: "Anjaneyulu Divvela",
    badge: "Book a meeting / send proposal",
    note: "Strong engagement (score 70+) — push for the next commitment.",
    waIcon: "/figma/bac7e.svg",
    callIcon: "/figma/a46b6.svg",
  },
  {
    name: "Sai",
    badge: "Book a meeting / send proposal",
    note: "Strong engagement (score 70+) — push for the next commitment.",
    waIcon: "/figma/bac7e.svg",
    callIcon: "/figma/a46b6.svg",
  },
] as const;

function PlanCardGraphic() {
  const outerMask = {
    maskImage: 'url("/figma/343c8.svg")',
    WebkitMaskImage: 'url("/figma/343c8.svg")',
    maskMode: "alpha" as const,
    maskRepeat: "no-repeat" as const,
    maskSize: "109.643px 70.542px",
  };
  return (
    <div className="relative h-[70.542px] w-[109.643px] shrink-0 overflow-hidden">
      <div className="absolute inset-0" style={outerMask}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/720fa.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[5.71%_-10.91%_61.56%_82.46%]"
        style={{ ...outerMask, maskPosition: "-90.414px -4.031px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/9464f.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[5.71%_-10.91%_61.56%_82.46%]"
        style={{ ...outerMask, maskPosition: "-90.414px -4.031px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/75c1a.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[12%_86.15%_80%_6.61%]"
        style={{
          maskImage: 'url("/figma/343c8.svg"), url("/figma/b8cdf.svg")',
          WebkitMaskImage: 'url("/figma/343c8.svg"), url("/figma/b8cdf.svg")',
          maskMode: "alpha",
          maskRepeat: "no-repeat",
          maskPosition: "-7.25px -8.465px, -0.805px -2.014px",
          maskSize: "109.643px 70.542px, 9.674px 9.674px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/dfaf6.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[12.17%_43.29%_80.75%_16.6%]"
        style={{ ...outerMask, maskPosition: "-18.195px -8.588px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/2459c.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[24.86%_33.98%_69.04%_6.33%]"
        style={{ ...outerMask, maskPosition: "-6.945px -17.535px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/6eed8.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[47.14%_87.69%_44.28%_6.8%]"
        style={{
          maskImage: 'url("/figma/343c8.svg"), url("/figma/4f9f4.svg")',
          WebkitMaskImage: 'url("/figma/343c8.svg"), url("/figma/4f9f4.svg")',
          maskMode: "alpha",
          maskRepeat: "no-repeat",
          maskPosition: "-7.453px -33.256px, -1.008px -1.008px",
          maskSize: "109.643px 70.542px, 8.062px 8.062px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/a7280.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[46%_69.2%_42.78%_14.89%]"
        style={{ ...outerMask, maskPosition: "-16.328px -32.451px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/ebaf1.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[42.29%_65.44%_39.43%_34.56%]"
        style={{ ...outerMask, maskPosition: "-37.891px -29.83px" }}
      >
        <span className="block h-full w-px bg-[#282828]" aria-hidden="true" />
      </div>
      <div
        className="absolute inset-[48.57%_57.73%_45.71%_38.6%]"
        style={{
          maskImage: 'url("/figma/343c8.svg"), url("/figma/4f9f4.svg")',
          WebkitMaskImage: 'url("/figma/343c8.svg"), url("/figma/4f9f4.svg")',
          maskMode: "alpha",
          maskRepeat: "no-repeat",
          maskPosition: "-42.32px -34.264px, -2.008px -2.016px",
          maskSize: "109.643px 70.542px, 8.062px 8.062px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/f01bc.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[46%_38.32%_42.78%_45.87%]"
        style={{ ...outerMask, maskPosition: "-50.289px -32.451px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/aeb7f.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[42.29%_34.56%_39.43%_65.44%]"
        style={{ ...outerMask, maskPosition: "-71.75px -29.83px" }}
      >
        <span className="block h-full w-px bg-[#282828]" aria-hidden="true" />
      </div>
      <div
        className="absolute inset-[47.14%_25.92%_44.29%_68.57%]"
        style={{
          maskImage: 'url("/figma/343c8.svg"), url("/figma/4f9f4.svg")',
          WebkitMaskImage: 'url("/figma/343c8.svg"), url("/figma/4f9f4.svg")',
          maskMode: "alpha",
          maskRepeat: "no-repeat",
          maskPosition: "-75.18px -33.256px, -1.008px -1.008px",
          maskSize: "109.643px 70.542px, 8.062px 8.062px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/f8b5d.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[46.07%_6.01%_42.79%_76.59%]"
        style={{ ...outerMask, maskPosition: "-83.977px -32.502px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/5a462.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[72%_5.89%_9.14%_5.88%]"
        style={{ ...outerMask, maskPosition: "-6.445px -50.791px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/77473.svg" className="block size-full max-w-none" />
      </div>
      <div
        className="absolute inset-[78.75%_33.32%_13.7%_33.5%]"
        style={{ ...outerMask, maskPosition: "-36.727px -55.555px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/b13da.svg" className="block size-full max-w-none" />
      </div>
      <div className="absolute inset-[0.29%_0.18%_0.29%_0.19%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/3cb3e.svg" className="block size-full max-w-none" />
      </div>
    </div>
  );
}

function HeroDeviceCluster() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-[550px] w-[677px] overflow-hidden" aria-hidden="true">
      {/* Apple MacBook Air 13 Silver */}
      <div className="absolute inset-[0_-36.45%_0_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/c9846.png" className="block size-full max-w-none object-cover" />
      </div>

      {/* Laptop Screen UI (573:23568) */}
      <div className="absolute inset-[10.97%_-18.71%_11.17%_17.75%] flex items-start overflow-hidden bg-[#0a0a0a]">
        <div className="flex h-[427.184px] w-full items-start bg-[#0a0a0a]">
          {/* Sidebar */}
          <aside className="flex h-full w-[121.51px] shrink-0 flex-col border-r-[0.475px] border-[#292929] bg-[#121212]">
            <div className="flex h-[26.58px] shrink-0 items-center border-b-[0.475px] border-[#292929] px-[9.493px]">
              <div className="relative h-[11.151px] w-[71.364px] shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/f775a.png" className="block size-full max-w-none object-contain" />
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden px-[5.7px] pt-[9.49px]">
              <div className="flex flex-col gap-[7px]">
                {SIDEBAR_GROUPS.map((group) => (
                  <div key={group.title} className="flex flex-col gap-[1.899px]">
                    <p className="px-[5.696px] text-[5.221px] font-medium uppercase leading-[7.832px] tracking-[0.2611px] text-[#adadad]/70">
                      {group.title}
                    </p>
                    {group.items.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-[5.696px] rounded-[4.746px] px-[5.696px] py-[3.797px] ${
                          "active" in item && item.active ? "bg-[#262626]" : ""
                        }`}
                      >
                        <span className="relative size-[8.544px] shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img alt="" src={item.icon} className="block size-full max-w-none" />
                        </span>
                        <span
                          className={`whitespace-nowrap text-[6.645px] font-medium leading-[9.493px] ${
                            "active" in item && item.active ? "text-[#fafafa]" : "text-[#adadad]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 items-center justify-center border-t-[0.475px] border-[#292929] p-[5.696px]">
              <PlanCardGraphic />
            </div>
          </aside>

          {/* Main Dashboard Area */}
          <div className="relative flex-1 overflow-hidden">
            {/* Top Search Bar */}
            <div className="flex h-[26.58px] items-center justify-between border-b-[0.475px] border-[#292929] bg-[#0a0a0a] px-[11.392px]">
              <div className="flex h-[17px] w-[212px] items-center justify-between rounded-[4.746px] border-[0.475px] border-[#292929] bg-[#121212] px-[5.696px]">
                <div className="flex items-center gap-[3.797px]">
                  <span className="relative size-[7.594px] shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/f70ee.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="text-[6.645px] leading-[9.493px] text-[#adadad]">
                    Search leads, team members, or jump to…
                  </span>
                </div>
                <span className="rounded-[1.899px] bg-[#1f1f1f] px-[2.848px] py-[0.949px] font-mono text-[5.696px] leading-[7.594px] text-[#adadad]">
                  ⌘K
                </span>
              </div>
              <div className="flex items-center gap-[7.594px]">
                <span className="inline-flex h-[15.189px] items-center gap-[1.899px] rounded-[4.746px] bg-[#f5f5f5] px-[5.696px] text-[5.696px] font-medium text-[#0f0f0f]">
                  <span className="relative size-[7.594px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/0bbf2.svg" className="block size-full max-w-none" />
                  </span>
                  Quick Add
                </span>
                <span className="relative flex size-[18.986px] items-center justify-center rounded-full bg-[#212121]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/a4e72.svg" className="size-[7.594px]" />
                  <span className="absolute right-[-1.91px] top-[-1.9px] flex h-[9.493px] min-w-[9.493px] items-center justify-center rounded-full bg-[#2b2b2b] px-[3px] text-[5.696px] font-semibold text-[#f5f5f5]">
                    7
                  </span>
                </span>
                <span className="flex size-[18.986px] items-center justify-center rounded-full bg-[#212121] text-[6.645px] font-semibold text-[#f5f5f5]">
                  NA
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[11.392px] px-[15.189px] pb-[15.189px] pt-[11.392px]">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[14.239px] font-bold leading-[17.087px] tracking-[-0.356px] text-[#f5f5f5]">
                    Executive Dashboard
                  </p>
                  <p className="text-[6.645px] leading-[9.493px] text-[#adadad]">
                    Showing the last 30 days, compared with the period before.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-[3.797px]">
                  {["Today", "Last 7 Days", "Last 30 Days", "This Month", "Last Month", "All Time"].map((label) => (
                    <span
                      key={label}
                      className={`inline-flex h-[15.189px] items-center rounded-[4.746px] px-[5.696px] text-[5.696px] font-medium ${
                        label === "Last 30 Days"
                          ? "bg-[#f5f5f5] text-[#0f0f0f]"
                          : "border-[0.475px] border-[#292929] text-[#f5f5f5]"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                  <span className="inline-flex h-[17.087px] w-[75.944px] items-center justify-between rounded-[5.696px] border-[0.475px] border-[#292929] bg-[#121212] px-[6.645px] text-[6.645px] text-[#f5f5f5]">
                    Everyone
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/ea243.svg" className="size-[7.594px]" />
                  </span>
                </div>
              </div>

              {/* Today Card */}
              <div className="flex flex-col gap-[9.493px] rounded-[7.594px] border-[0.475px] border-[#292929] bg-[#121212] p-[11.392px]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[8.544px] font-medium leading-[13.29px] text-[#f5f5f5]">Today</p>
                    <p className="text-[5.696px] leading-[7.594px] text-[#adadad]">
                      Wednesday, 14 Oct · what needs attention across the team
                    </p>
                  </div>
                  <p className="text-[5.696px] leading-[7.594px] text-[#adadad]">Morning email settings</p>
                </div>

                <div className="flex items-start gap-[5.696px]">
                  <div className="flex flex-1 flex-col rounded-[5.696px] border-[0.475px] border-[#292929] px-[5.696px] pb-[13.29px] pt-[5.696px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/0af04.svg" className="size-[7.594px]" />
                    <span className="pt-[3.797px] text-[11.392px] font-bold leading-[15.189px] text-[#f47c7c]">1</span>
                    <span className="text-[5.696px] leading-[7.594px] text-[#adadad]">Overdue follow-ups</span>
                    <span className="text-[5.221px] leading-[7.832px] text-[#059669]">▼ 24 vs yesterday</span>
                  </div>
                  <div className="flex flex-1 flex-col rounded-[5.696px] border-[0.475px] border-[#292929] p-[5.696px] opacity-60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/b2ffd.svg" className="size-[7.594px]" />
                    <span className="pt-[3.797px] text-[11.392px] font-bold leading-[15.189px] text-[#f5f5f5]">0</span>
                    <span className="text-[5.696px] leading-[7.594px] text-[#adadad]">Meetings without outcome</span>
                    <span className="text-[5.221px] leading-[7.832px] text-[#059669]">▼ 2 vs yesterday</span>
                  </div>
                  <div className="flex flex-1 flex-col rounded-[5.696px] border-[0.475px] border-[#292929] px-[5.696px] pb-[13.29px] pt-[5.696px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/9dabc.svg" className="size-[7.594px]" />
                    <span className="pt-[3.797px] text-[11.392px] font-bold leading-[15.189px] text-[#f47c7c]">3</span>
                    <span className="text-[5.696px] leading-[7.594px] text-[#adadad]">Not contacted after 24h</span>
                    <span className="text-[5.221px] leading-[7.832px] text-[#059669]">▼ 5 vs yesterday</span>
                  </div>
                  <div className="flex flex-1 flex-col rounded-[5.696px] border-[0.475px] border-[#292929] px-[5.696px] pb-[13.29px] pt-[5.696px] opacity-60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/f95b5.svg" className="size-[7.594px]" />
                    <span className="pt-[3.797px] text-[11.392px] font-bold leading-[15.189px] text-[#f5f5f5]">0</span>
                    <span className="text-[5.696px] leading-[7.594px] text-[#adadad]">Unassigned leads</span>
                    <span className="text-[5.221px] leading-[7.832px] text-[#adadad]">same as yesterday</span>
                  </div>
                  <div className="flex flex-1 flex-col rounded-[5.696px] border-[0.475px] border-[#292929] px-[5.696px] pb-[13.29px] pt-[5.696px] opacity-60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/f5c6b.svg" className="size-[7.594px]" />
                    <span className="pt-[3.797px] text-[11.392px] font-bold leading-[15.189px] text-[#f5f5f5]">0</span>
                    <span className="text-[5.696px] leading-[7.594px] text-[#adadad]">Meetings left today</span>
                    <span className="text-[5.221px] leading-[7.832px] text-[#adadad]">same as yesterday</span>
                  </div>

                  {/* Animated Node 573:23887 from get_motion_context */}
                  <motion.div
                    data-node-id="573:23887"
                    className="flex flex-1 flex-col rounded-[5.696px] border-[0.475px] border-[#292929] px-[5.696px] pb-[13.29px] pt-[5.696px]"
                    style={
                      prefersReducedMotion
                        ? undefined
                        : ({
                            transformOrigin: "0 0",
                            transform:
                              "var(--motion-layout-transform, translate(0px)) translate(calc(var(--motion-origin-x, 0) * 1%), calc(var(--motion-origin-y, 0) * 1%)) var(--motion-design-transform-inverse, matrix(1, 0, 0, 1, 0, 0)) scale(var(--motion-scale-x, 1), var(--motion-scale-y, 1)) var(--motion-design-transform, matrix(1, 0, 0, 1, 0, 0)) translate(calc(var(--motion-origin-x, 0) * -1%), calc(var(--motion-origin-y, 0) * -1%))",
                            "--motion-design-transform": "initial",
                            "--motion-design-transform-inverse": "initial",
                            "--motion-layout-transform": "translate(0px)",
                          } as React.CSSProperties)
                    }
                    initial={
                      prefersReducedMotion
                        ? false
                        : ({
                            "--motion-origin-x": 50,
                            "--motion-origin-y": 50,
                            "--motion-scale-x": 0,
                            "--motion-scale-y": 0,
                          } as Record<string, number>)
                    }
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : ({
                            "--motion-scale-x": [0, 1, 1],
                            "--motion-scale-y": [0, 1, 1],
                          } as Record<string, number[]>)
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            "--motion-scale-x": {
                              duration: 2,
                              times: [0, 0.45, 1],
                              ease: [[0.4, 1.75, 0.3, 1], "linear"],
                              repeat: Infinity,
                            },
                            "--motion-scale-y": {
                              duration: 2,
                              times: [0, 0.45, 1],
                              ease: [[0.4, 1.75, 0.3, 1], "linear"],
                              repeat: Infinity,
                            },
                          }
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/4f32e.svg" className="size-[7.594px]" />
                    <span className="pt-[3.797px] text-[11.392px] font-bold leading-[15.189px] text-[#f5f5f5]">3</span>
                    <span className="text-[5.696px] leading-[7.594px] text-[#adadad]">New leads (24h)</span>
                    <span className="text-[5.221px] leading-[7.832px] text-[#adadad]">▲ 2 vs yesterday</span>
                  </motion.div>
                </div>

                {/* Backlog & Calls */}
                <div className="flex items-start gap-[9.493px]">
                  <div className="flex flex-1 flex-col gap-[3.797px]">
                    <p className="text-[5.696px] font-medium uppercase leading-[7.594px] tracking-[0.1424px] text-[#adadad]">
                      Backlog by person
                    </p>
                    <div className="flex items-center justify-between text-[6.645px] leading-[9.493px]">
                      <span className="text-[#f5f5f5]">Sneha H A</span>
                      <span className="text-[#adadad]">1 overdue</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[3.797px]">
                    <div className="flex items-center gap-[2.848px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" src="/figma/5bdd2.svg" className="size-[6.645px]" />
                      <p className="text-[5.696px] font-medium uppercase leading-[7.594px] tracking-[0.1424px] text-[#adadad]">
                        Calls in the last 24h
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[6.645px] leading-[9.493px]">
                      <span className="text-[#f5f5f5]">Sneha H A</span>
                      <span className="text-[#adadad]">28 calls · 10 of 28 answered · 11m 17s talk time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Speed to Response Banner */}
              <div className="flex items-center justify-between rounded-[7.594px] border-[0.475px] border-[#292929] bg-[#121212] p-[11.392px]">
                <div className="flex items-center gap-[7.594px]">
                  <span className="flex size-[22.783px] items-center justify-center rounded-[5.696px] bg-orange-500/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/1aba2.svg" className="size-[11.392px]" />
                  </span>
                  <div>
                    <p className="text-[5.696px] font-medium uppercase leading-[7.594px] tracking-[0.1424px] text-[#adadad]">
                      Avg. speed to first response
                    </p>
                    <p className="text-[14.239px] font-bold leading-[17.087px] tracking-[-0.356px] text-[#f5f5f5]">
                      6d 21h
                    </p>
                    <p className="text-[5.696px] leading-[7.594px] text-[#adadad]">
                      First-to-respond wins the deal — 47 of 71 leads contacted.
                    </p>
                    <p className="text-[5.696px] leading-[7.594px] text-[#059669]">▼ 79% vs previous period</p>
                    <p className="pt-[1.899px] text-[5.696px] font-medium leading-[7.594px] text-[#059669]">
                      ⚡ Typical reply in 3 days (30 days)
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-[2.848px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/6c8d0.svg" className="size-[6.645px]" />
                    <p className="text-[5.696px] font-medium uppercase leading-[7.594px] tracking-[0.1424px] text-[#adadad]">
                      Content opened (last 30 days)
                    </p>
                  </div>
                  <p className="text-[14.239px] font-bold leading-[17.087px] tracking-[-0.356px] text-[#f5f5f5]">0</p>
                  <p className="text-[5.696px] leading-[7.594px] text-[#adadad]">Opens on content you shared</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-right text-[5.696px] font-medium uppercase leading-[7.594px] tracking-[0.1424px] text-[#adadad]">
                    On-time response
                  </p>
                  <p className="text-right text-[14.239px] font-bold leading-[17.087px] text-[#ea580c]">1%</p>
                  <p className="text-right text-[5.696px] leading-[7.594px] text-[#adadad]">
                    70 leads breached the response target
                  </p>
                  <p className="text-right text-[5.696px] leading-[7.594px] text-[#059669]">▲ 1.4 pts vs previous period</p>
                </div>
              </div>

              {/* Today's priorities */}
              <div className="flex flex-col gap-[7.594px] rounded-[7.594px] border-[0.475px] border-[#292929] bg-[#121212] p-[11.392px]">
                <div className="flex items-center gap-[3.797px]">
                  <span className="flex size-[15.189px] items-center justify-center rounded-[5.696px] bg-violet-500/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/4f4eb.svg" className="size-[7.594px]" />
                  </span>
                  <div className="flex flex-col gap-[1.899px]">
                    <p className="text-[8.544px] font-medium leading-[8.544px] text-[#f5f5f5]">Today&apos;s priorities</p>
                    <p className="text-[5.696px] leading-[7.594px] text-[#adadad]">
                      Your next best actions, ranked by buying signal.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  {PRIORITY_ROWS.map((row, idx) => (
                    <div
                      key={row.name}
                      className={`flex items-center justify-between py-[5.696px] ${
                        idx > 0 ? "border-t-[0.475px] border-[#292929]" : ""
                      }`}
                    >
                      <div className="flex flex-col gap-[0.949px]">
                        <div className="flex items-center gap-[3.797px]">
                          <span className="text-[7.594px] font-medium leading-[11.392px] text-[#f5f5f5]">
                            {row.name}
                          </span>
                          <span className="rounded-full bg-[#2b2b2b] px-[4.746px] py-[0.949px] text-[5.696px] leading-[7.594px] text-[#fafafa]">
                            {row.badge}
                          </span>
                        </div>
                        <p className="text-[5.696px] leading-[7.594px] text-[#adadad]">{row.note}</p>
                      </div>
                      <div className="flex items-center gap-[3.802px]">
                        <span className="inline-flex h-[15.189px] items-center gap-[3.797px] rounded-[4.746px] border-[0.475px] border-[#292929] px-[5.696px] text-[5.696px] font-medium text-[#f5f5f5]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img alt="" src={row.waIcon} className="size-[7.594px]" />
                          WhatsApp
                        </span>
                        <span className="inline-flex h-[15.189px] items-center gap-[3.797px] rounded-[4.746px] px-[5.696px] text-[5.696px] font-medium text-[#f5f5f5]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img alt="" src={row.callIcon} className="size-[7.594px]" />
                          Call
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right edge vignette overlay (573:24079) */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[33px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/0a766.png" className="block size-full max-w-none object-cover" />
      </div>

      {/* Overlapping iPhone XS Silver (573:24080) */}
      <div className="absolute inset-[33.45%_72.03%_0.03%_0] overflow-hidden">
        <div
          className="absolute left-[18px] top-[16px] overflow-hidden"
          style={{ width: "154.4px", height: "333.6px" }}
        >
          <div
            style={{
              width: "273px",
              height: "589.729px",
              transform: "scale(0.5657)",
              transformOrigin: "top left",
            }}
          >
            <PhoneDashboardScreen />
          </div>
        </div>
        {/* iPhone Bezel on top */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/f1d24.png" className="pointer-events-none absolute inset-0 block size-full max-w-none object-cover" />
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative z-[1] overflow-hidden bg-black px-4 pb-14 pt-12 sm:px-8 lg:h-[800px] lg:px-[84px] lg:pb-[40px] lg:pt-[56px]">
      <div className="relative mx-auto flex h-full w-full max-w-[1272px] items-center">
        {/* Ambient green diagonal glow (573:23539) */}
        <div
          className="pointer-events-none absolute left-[481px] top-[-34px] flex h-[649.65px] w-[644.202px] items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex-none rotate-[-44.13deg]">
            <div className="relative h-[584.755px] w-[330.241px]">
              <div className="absolute inset-[-54.72%_-96.9%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/84a36.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-[72px]">
          {/* Left Copy Column */}
          <div className="flex w-full shrink-0 flex-col items-start lg:w-auto">
            <h1 className="max-w-[920px] font-inter text-[48px] font-black uppercase leading-[1.08] text-white sm:text-[72px] lg:text-[96px] lg:leading-[1.13]">
              <span className="block tracking-[-0.05em] lg:tracking-[-5px]">YOUR</span>
              <span className="flex items-start gap-[0.18em] tracking-[-0.05em] lg:gap-[18px] lg:tracking-[-5px]">
                <span>NEXT</span>
                <span>DEAL</span>
              </span>
              <span className="flex items-start gap-[0.16em] lg:gap-[16px]">
                <span className="tracking-[-0.05em] lg:tracking-[-5px]">IS</span>
                <span className="text-outline-hero tracking-normal">CALLING</span>
              </span>
            </h1>

            <p className="type-body-lg mt-[28px] max-w-[525px] text-white/[0.64] lg:mt-[40px]">
              Don&apos;t leave it on read. Capture every lead, reach out in a tap, and keep the conversation moving.
            </p>

            <div className="mt-[40px] flex w-full flex-col items-stretch gap-[16px] sm:w-auto sm:flex-row sm:items-center sm:gap-[24px] lg:mt-[72px]">
              <Link
                href="#flow"
                className="focus-ring type-button inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[14px] border border-white px-[24px] text-white transition-colors hover:bg-white/10"
              >
                See How It Works
                <span className="relative size-[24px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/d9b5b.svg" className="block size-full max-w-none" />
                </span>
              </Link>
              <Link
                href={appUrl("/signup")}
                className="focus-ring type-button inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[14px] border border-white/80 bg-white px-[24px] text-black transition-colors hover:bg-white/90"
              >
                Start 14-Day Free Trial
                <span className="relative size-[24px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/1ef4f.svg" className="block size-full max-w-none" />
                </span>
              </Link>
            </div>

            <ul className="mt-[24px] flex flex-wrap items-center gap-x-[32px] gap-y-3">
              <li className="type-body-sm flex items-center gap-[8px] text-white">
                <span className="relative size-[20px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/91a51.svg" className="block size-full max-w-none" />
                </span>
                14-day free trial
              </li>
              <li className="type-body-sm flex items-center gap-[8px] text-white">
                <span className="relative size-[20px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/e2067.svg" className="block size-full max-w-none" />
                </span>
                No card required
              </li>
              <li className="type-body-sm flex items-center gap-[8px] text-white">
                <span className="relative size-[20px] shrink-0" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/78146.svg" className="block size-full max-w-none" />
                </span>
                Mobile-first
              </li>
            </ul>
          </div>

          {/* Right Product Mockup */}
          <div className="w-full max-w-[677px] shrink-0 overflow-hidden lg:overflow-visible">
            <div className="origin-top-left max-sm:h-[300px] max-sm:w-full sm:max-lg:mx-auto">
              <div className="max-sm:origin-top-left max-sm:scale-[0.52]">
                <HeroDeviceCluster />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
