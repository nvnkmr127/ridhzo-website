"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionEyebrowBar } from "./SectionEyebrowBar";
import { cn } from "@/lib/utils";

type FlowStep = "capture" | "respond" | "follow-up";

const TABS: { id: FlowStep; eyebrow: string; title: string; subtitle: string; canvasLabel: string }[] = [
  {
    id: "capture",
    eyebrow: "01 / IT STARTS HERE",
    title: "Capture.",
    subtitle: "Every source. One place.",
    canvasLabel: "01 — CAPTURE",
  },
  {
    id: "respond",
    eyebrow: "02 / DON’T WAIT",
    title: "Respond",
    subtitle: "One tap to say hello.",
    canvasLabel: "02 — RESPOND",
  },
  {
    id: "follow-up",
    eyebrow: "03 / KEEP GOING",
    title: "Follow up.",
    subtitle: "Momentum on autopilot.",
    canvasLabel: "03 — FOLLOW UP",
  },
];

function FlowGridBackdrop({ maskUrl, imageUrl }: { maskUrl: string; imageUrl: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-[0.16%_-17.83%_0.02%_-17.87%]"
      style={{
        maskImage: `url("${maskUrl}")`,
        WebkitMaskImage: `url("${maskUrl}")`,
        maskMode: "luminance",
        maskRepeat: "no-repeat",
        maskSize: "1188.677px 619.878px",
        maskPosition: "0px 0px",
      }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" src={imageUrl} className="block size-full max-w-none" />
    </div>
  );
}

const CAPTURE_CONNECTORS = [
  {
    id: "top-left",
    wrapperClass: "left-[149.5px] top-[201.5px] h-[103.5px] w-[193.5px]",
    transformClass: "",
    innerClass: "relative size-full",
    insetClass: "inset-[-0.51%_0_-0.72%_-0.28%]",
    viewBox: "0 0 194.101 104.773",
    path: "M0.53 0.53 C53.51 50.8 118.62 94.46 194.04 104.03",
    delay: 0,
  },
  {
    id: "top-right",
    wrapperClass: "left-[515px] top-[215px] flex h-[104px] w-[171px] items-center justify-center",
    transformClass: "-scale-y-100 rotate-180",
    innerClass: "relative h-[104px] w-[171px]",
    insetClass: "inset-[-0.47%_0_-0.72%_-0.33%]",
    viewBox: "0 0 171.643 105.237",
    path: "M0.57 0.49 C45.85 49.18 102.54 94.18 171.57 104.49",
    delay: 0.7,
  },
  {
    id: "bottom-left",
    wrapperClass: "left-[239.18px] top-[378px] flex h-[139.035px] w-[177.854px] items-center justify-center",
    transformClass: "-scale-y-100 rotate-[165.74deg]",
    innerClass: "relative h-[103.5px] w-[157.202px]",
    insetClass: "inset-[-0.45%_0_-0.72%_-0.37%]",
    viewBox: "0 0 157.87 104.714",
    path: "M157.79 103.97 C93.58 94 41.66 48.07 0.59 0.47",
    delay: 1.4,
  },
  {
    id: "bottom-right",
    wrapperClass: "left-[462px] top-[342px] flex h-[206.634px] w-[168.338px] items-center justify-center",
    transformClass: "-scale-y-100 rotate-[-114.27deg]",
    innerClass: "relative h-[103.5px] w-[180px]",
    insetClass: "inset-[-0.49%_0_-0.72%_-0.31%]",
    viewBox: "0 0 180.625 104.753",
    path: "M0.55 0.51 C49.26 50.07 109.92 94.79 180.55 104.01",
    delay: 2.1,
  },
] as const;

function CaptureConnectorCurve({
  curve,
  reducedMotion,
}: {
  curve: (typeof CAPTURE_CONNECTORS)[number];
  reducedMotion: boolean;
}) {
  const svg = (
    <div className={curve.innerClass}>
      <div className={`absolute ${curve.insetClass}`}>
        <svg
          preserveAspectRatio="none"
          viewBox={curve.viewBox}
          fill="none"
          className="block size-full max-w-none overflow-visible"
          aria-hidden="true"
        >
          {/* Dashed base track flowing smoothly from source card to center Ridhzo hub */}
          <motion.path
            d={curve.path}
            stroke="black"
            strokeOpacity={0.64}
            strokeWidth={1.5}
            strokeDasharray="3 3"
            strokeLinecap="round"
            animate={reducedMotion ? undefined : { strokeDashoffset: [0, -60] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 4.5, ease: "linear", repeat: Infinity }
            }
          />
          {!reducedMotion && (
            <>
              {/* Soft green glow halo traveling inward to the Ridhzo hub */}
              <motion.path
                d={curve.path}
                pathLength={100}
                stroke="#5ee878"
                strokeWidth={5}
                strokeLinecap="round"
                strokeDasharray="24 140"
                initial={{ strokeDashoffset: 26, strokeOpacity: 0 }}
                animate={{ strokeDashoffset: -104, strokeOpacity: [0, 0.32, 0.32, 0] }}
                transition={{
                  duration: 2.8,
                  times: [0, 0.12, 0.88, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  delay: curve.delay,
                }}
              />
              {/* Crisp Ridhzo-green pulse traveling along the dashed path */}
              <motion.path
                d={curve.path}
                pathLength={100}
                stroke="#5ee878"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="24 140"
                initial={{ strokeDashoffset: 26, strokeOpacity: 0 }}
                animate={{ strokeDashoffset: -104, strokeOpacity: [0, 0.95, 0.95, 0] }}
                transition={{
                  duration: 2.8,
                  times: [0, 0.12, 0.88, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  delay: curve.delay,
                }}
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );

  return (
    <div className={`pointer-events-none absolute ${curve.wrapperClass}`}>
      {curve.transformClass ? <div className={curve.transformClass}>{svg}</div> : svg}
    </div>
  );
}

function CaptureCanvas() {
  const prefersReducedMotion = !!useReducedMotion();

  return (
    <>
      {/* Center 3D Metallic Sphere */}
      <div className="absolute left-[355px] top-[236px] flex size-[150px] flex-col items-center justify-center rounded-[92.89px] drop-shadow-[0px_35px_19px_rgba(0,0,0,0.26)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[92.89px]"
          style={{
            backgroundImage:
              "radial-gradient(161.44px 161.44px at 42px 30px, rgb(91,91,91) 0%, rgb(60,60,60) 16%, rgb(45,45,45) 24%, rgb(29,29,29) 32%, rgb(17,17,17) 51%, rgb(5,5,5) 70%, rgb(16,16,16) 73.75%, rgb(27,27,27) 77.5%, rgb(48,48,48) 85%, rgb(70,70,70) 92.5%, rgb(91,91,91) 100%)",
          }}
        />
        <div className="relative h-[56px] w-[62px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Ridhzo hub" src="/figma/7ded0.svg" className="block size-full max-w-none" />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_-10px_-11px_25px_0px_black,inset_9px_9px_14px_0px_#555]" />
      </div>

      {/* Flowing Connector Curves -> Center Ridhzo Hub */}
      {CAPTURE_CONNECTORS.map((curve) => (
        <CaptureConnectorCurve key={curve.id} curve={curve} reducedMotion={prefersReducedMotion} />
      ))}

      {/* 4 Source Cards */}
      <div className="absolute left-[39px] top-[121px] flex items-center gap-[8px] rounded-[8px] border border-white/[0.12] bg-black/20 p-[8px]">
        <span className="flex items-center rounded-full bg-black p-[8px]">
          <span className="relative size-[24px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/figma/3282d.svg" className="block size-full max-w-none" />
          </span>
        </span>
        <span className="flex items-center rounded-full bg-black p-[8px]">
          <span className="relative size-[24px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/figma/cff17.svg" className="block size-full max-w-none" />
          </span>
        </span>
        <div className="w-[148px]">
          <p className="text-[14px] font-medium leading-[20px] text-black">
            Facebook &amp; Instagram
            <br />
            Lead Ads
          </p>
          <p className="text-[12px] font-normal leading-[18px] text-black/[0.64]">Leads in seconds</p>
        </div>
      </div>

      <div className="absolute left-[579px] top-[145px] flex items-center gap-[8px] rounded-[8px] border border-white/[0.12] bg-black/20 p-[8px]">
        <span className="flex items-center rounded-full bg-black p-[8px]">
          <span className="relative size-[24px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/figma/209ca.svg" className="block size-full max-w-none" />
          </span>
        </span>
        <div className="w-[148px]">
          <p className="text-[14px] font-medium leading-[20px] text-black">Google Lead Forms</p>
          <p className="text-[12px] font-normal leading-[18px] text-black/[0.64]">Capture campaign leads</p>
        </div>
      </div>

      <div className="absolute left-[33px] top-[488px] flex items-center gap-[8px] rounded-[8px] border border-white/[0.12] bg-black/20 p-[8px]">
        <span className="flex items-center rounded-full bg-black p-[8px]">
          <span className="relative size-[24px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/figma/6ec26.svg" className="block size-full max-w-none" />
          </span>
        </span>
        <div>
          <p className="text-[14px] font-medium leading-[20px] text-black">Web Forms &amp; Webhooks</p>
          <p className="text-[12px] font-normal leading-[18px] text-black/[0.64]">Your website, Zapier, Make</p>
        </div>
      </div>

      <div className="absolute left-[637px] top-[478px] flex items-center gap-[8px] rounded-[8px] border border-white/[0.12] bg-black/20 p-[8px]">
        <span className="flex items-center rounded-full bg-black p-[8px]">
          <span className="relative size-[24px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src="/figma/90932.svg" className="block size-full max-w-none" />
          </span>
        </span>
        <div>
          <p className="text-[14px] font-medium leading-[20px] text-black">CSV Import</p>
          <p className="text-[12px] font-normal leading-[18px] text-black/[0.64]">Bring in existing leads</p>
        </div>
      </div>
    </>
  );
}

function RespondCanvas() {
  return (
    <div className="absolute left-[155px] top-[136px] h-[350px] w-[550px]">
      <div className="absolute left-[14.39px] top-[6.8px] flex h-[104.901px] w-[272.395px] items-center justify-center">
        <div className="-rotate-3">
          <div className="flex min-w-[268px] flex-col items-start rounded-br-[18px] rounded-tl-[18px] rounded-tr-[18px] border border-[#c9c9c9] bg-white px-[24px] py-[19px] drop-shadow-[0px_12px_15px_rgba(0,0,0,0.05)]">
            <p className="whitespace-nowrap font-inter text-[11px] font-semibold tracking-[0.88px] text-[#111]">NEW ENQUIRY / 10:42</p>
            <p className="whitespace-nowrap pt-[12px] font-inter text-[20px] font-semibold leading-[26px] tracking-[-0.9px] text-[#111]">
              Hey! Is this still available?
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[160px] top-[132px] flex h-[42.5px] w-[170.672px] items-center gap-[8px] rounded-[100px] border border-[#5ee878] bg-[#5ee878]/80 px-[20px] drop-shadow-[0px_5px_4px_rgba(0,0,0,0.04)]">
        <span className="size-[7.935px] shrink-0 rounded-full bg-black opacity-[0.98]" />
        <span className="font-inter text-[12px] font-bold text-black whitespace-nowrap">Lead alert received</span>
      </div>

      <div className="absolute left-[249.91px] top-[189.77px] flex h-[106.471px] w-[302.354px] items-center justify-center">
        <div className="rotate-3">
          <div className="flex min-w-[298px] flex-col items-start rounded-bl-[18px] rounded-tl-[18px] rounded-tr-[18px] border border-[#111] bg-[#111] px-[24px] py-[19px] drop-shadow-[0px_12px_15px_rgba(0,0,0,0.05)]">
            <p className="whitespace-nowrap font-inter text-[11px] font-semibold tracking-[0.88px] text-white">ONE-TAP WHATSAPP ↗</p>
            <p className="whitespace-nowrap pt-[12px] font-inter text-[20px] font-semibold leading-[26px] tracking-[-0.9px] text-white">
              Absolutely. Want the details?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FollowUpCanvas() {
  return (
    <div className="absolute left-[120px] top-1/2 flex h-[269px] w-[620px] -translate-y-1/2 flex-col items-center">
      <div className="flex flex-col items-center gap-[4px] whitespace-nowrap tracking-[1.54px]">
        <p className="font-inter text-[14px] font-extrabold text-black/80">THE RIGHT ACTION FOLLOWS</p>
        <p className="font-inter text-[12px] font-medium text-black/[0.64]">WHEN SOMETHING HAPPENS</p>
      </div>

      <div className="absolute left-[62px] top-[173px] h-[2px] w-[490px] bg-[#222]">
        <span className="absolute left-0 top-[-4px] size-[10px] rounded-full bg-[#111]" />
        <span className="absolute left-[479.8px] top-[-4px] size-[10px] rounded-full bg-[#111]" />
      </div>

      <div className="absolute left-0 top-[111.59px] flex size-[125px] flex-col items-center justify-center rounded-full border border-[#111] bg-white drop-shadow-[10px_15px_0px_rgba(0,0,0,0.07)]">
        <span className="relative size-[32px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/figma/flow-a014b.svg" className="block size-full max-w-none" />
        </span>
        <p className="pt-[5px] font-inter text-[12px] font-bold text-[#111]">LEAD IN</p>
        <p className="w-[93px] pt-[5px] text-center text-[10px] leading-[10px] text-black/[0.64]">
          New customer enquiry received
        </p>
      </div>

      <div className="absolute left-[247px] top-[111.59px] flex size-[125px] flex-col items-center justify-center rounded-full border border-[#5ee878] bg-[#5ee878] drop-shadow-[10px_15px_0px_rgba(0,0,0,0.07)]">
        <span className="relative size-[32px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/figma/flow-9c70f.svg" className="block size-full max-w-none" />
        </span>
        <p className="pt-[5px] font-inter text-[12px] font-bold text-black">SMART ROUTE</p>
        <p className="w-[93px] pt-[5px] text-center text-[10px] leading-[10px] text-black/[0.64]">
          Lead assigned to right person
        </p>
      </div>

      <div className="absolute left-[495px] top-[111.59px] flex size-[125px] flex-col items-center justify-center rounded-full border border-[#111] bg-white drop-shadow-[10px_15px_0px_rgba(0,0,0,0.07)]">
        <span className="relative size-[32px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/figma/flow-be0b2.svg" className="block size-full max-w-none" />
        </span>
        <p className="pt-[5px] font-inter text-[12px] font-bold text-[#111]">NEXT STEP</p>
        <p className="w-[93px] pt-[5px] text-center text-[10px] leading-[10px] text-black/[0.64]">
          Follow-up or next action scheduled
        </p>
      </div>
    </div>
  );
}

/** Figma Interactive Flow section (573:24375): "FROM PING. TO PROGRESS." */
export function FlowSection() {
  const [active, setActive] = useState<FlowStep>("capture");
  const currentTab = TABS.find((t) => t.id === active)!;

  return (
    <section
      id="flow"
      className="relative z-[1] overflow-hidden bg-white px-4 py-16 text-black sm:px-8 lg:px-[84px] lg:py-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
        <SectionEyebrowBar left="THE REAL PROBLEM" right="INTERACTIVE FLOW" theme="light" />

        <div className="flex w-full flex-col items-start justify-between gap-6 pt-[48px] lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.08] sm:text-[64px] lg:text-[80px] lg:leading-[1.14]">
            <span className="flex items-start gap-[0.18em] tracking-[-0.05em] text-black lg:gap-[16px] lg:tracking-[-5px]">
              <span>FROM</span>
              <span>PING.</span>
            </span>
            <span className="flex items-start gap-[0.12em] lg:gap-[12px]">
              <span className="text-black">To</span>
              <span className="text-outline-black">PROGRESS.</span>
            </span>
          </h2>

          <p className="w-full max-w-[323px] pb-[12px] text-[16px] font-normal leading-[26px] text-black/[0.64] sm:text-[18px] sm:leading-[28px]">
            Three little moments. One massive difference in how your team moves.
          </p>
        </div>

        <div className="w-full pt-[48px] lg:pt-[72px]">
          <div className="flex w-full flex-col items-stretch overflow-hidden rounded-[24px] border border-black/20 lg:flex-row lg:items-center">
            {/* Left Tabs Panel */}
            <div role="tablist" aria-label="Ridhzo workflow steps" className="flex w-full shrink-0 flex-col lg:w-[396px]">
              {TABS.map((tab) => {
                const isSelected = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`flow-panel-${tab.id}`}
                    onClick={() => setActive(tab.id)}
                    className={cn(
                      "focus-ring flex min-h-[140px] w-full cursor-pointer flex-col items-start gap-[24px] border-b border-black/20 last:border-b-0 p-[24px] text-left transition-colors lg:min-h-[185px] lg:gap-[40px]",
                      isSelected ? "bg-black text-white" : "bg-white text-black hover:bg-black/[0.03]",
                    )}
                  >
                    <span
                      className={cn(
                        "text-[12px] font-normal leading-[18px] opacity-55",
                        isSelected ? "text-white/[0.64]" : "text-black/[0.64]",
                      )}
                    >
                      {tab.eyebrow}
                    </span>
                    <span
                      className={cn(
                        "text-[30px] font-extrabold leading-[36px] tracking-[-0.57px] sm:text-[38px] sm:leading-[42px]",
                        isSelected ? "text-white" : "text-black",
                      )}
                    >
                      {tab.title}
                    </span>
                    <span
                      className={cn(
                        "text-[12px] font-normal leading-[18px] opacity-75",
                        isSelected ? "text-white/[0.64]" : "text-black/[0.64]",
                      )}
                    >
                      {tab.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Canvas (desktop fixed proportions, scaled cleanly on smaller screens) */}
            <div
              id={`flow-panel-${active}`}
              role="tabpanel"
              className="relative w-full overflow-hidden border-t border-black/20 bg-white lg:h-[621px] lg:flex-1 lg:border-l lg:border-t-0"
            >
              {/* Desktop 1:1 862×621 Canvas */}
              <div className="relative hidden h-[621px] w-full min-w-[862px] lg:block">
                {active === "capture" && (
                  <FlowGridBackdrop maskUrl="/figma/307b7.svg" imageUrl="/figma/fc964.svg" />
                )}
                {active === "respond" && (
                  <FlowGridBackdrop maskUrl="/figma/flow-9495d.svg" imageUrl="/figma/flow-56fe4.svg" />
                )}
                {active === "follow-up" && (
                  <FlowGridBackdrop maskUrl="/figma/flow-1e8e2.svg" imageUrl="/figma/flow-9e3ee.svg" />
                )}

                <div className="absolute left-[39px] right-[40px] top-[40px] flex h-[18px] items-center justify-between text-[12px] font-normal leading-[18px] text-[#111]">
                  <span>RIDHZO / THE FLOW</span>
                  <span>{currentTab.canvasLabel}</span>
                </div>

                {active === "capture" && <CaptureCanvas />}
                {active === "respond" && <RespondCanvas />}
                {active === "follow-up" && <FollowUpCanvas />}
              </div>

              {/* Mobile / Tablet Responsive Fallback */}
              <div className="flex flex-col gap-6 p-6 lg:hidden">
                <div className="flex items-center justify-between text-[12px] text-[#111]">
                  <span>RIDHZO / THE FLOW</span>
                  <span>{currentTab.canvasLabel}</span>
                </div>

                {active === "capture" && (
                  <div className="flex flex-col items-center gap-4">
                    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        { title: "Facebook & Instagram Lead Ads", note: "Leads in seconds", icons: ["/figma/3282d.svg", "/figma/cff17.svg"] },
                        { title: "Google Lead Forms", note: "Capture campaign leads", icons: ["/figma/209ca.svg"] },
                        { title: "Web Forms & Webhooks", note: "Your website, Zapier, Make", icons: ["/figma/6ec26.svg"] },
                        { title: "CSV Import", note: "Bring in existing leads", icons: ["/figma/90932.svg"] },
                      ].map((card) => (
                        <div key={card.title} className="flex items-center gap-2 rounded-[8px] border border-black/15 bg-black/[0.06] p-2.5">
                          <div className="flex gap-1.5">
                            {card.icons.map((ic) => (
                              <span key={ic} className="flex rounded-full bg-black p-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="" src={ic} className="size-5" />
                              </span>
                            ))}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-black">{card.title}</p>
                            <p className="text-xs text-black/60">{card.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {active === "respond" && (
                  <div className="flex flex-col items-center gap-4 py-4">
                    <div className="w-full max-w-[280px] -rotate-2 rounded-br-[18px] rounded-tl-[18px] rounded-tr-[18px] border border-[#c9c9c9] bg-white p-4 shadow-sm">
                      <p className="font-inter text-[11px] font-semibold tracking-[0.88px] text-[#111]">NEW ENQUIRY / 10:42</p>
                      <p className="pt-2 font-inter text-lg font-semibold text-[#111]">Hey! Is this still available?</p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#5ee878] bg-[#5ee878]/80 px-5 py-2.5">
                      <span className="size-2 rounded-full bg-black" />
                      <span className="font-inter text-xs font-bold text-black">Lead alert received</span>
                    </div>
                    <div className="w-full max-w-[298px] rotate-2 rounded-bl-[18px] rounded-tl-[18px] rounded-tr-[18px] bg-[#111] p-4 text-white">
                      <p className="font-inter text-[11px] font-semibold tracking-[0.88px]">ONE-TAP WHATSAPP ↗</p>
                      <p className="pt-2 font-inter text-lg font-semibold">Absolutely. Want the details?</p>
                    </div>
                  </div>
                )}

                {active === "follow-up" && (
                  <div className="flex flex-col items-center gap-6 py-4">
                    <div className="text-center tracking-[1.54px]">
                      <p className="font-inter text-sm font-extrabold text-black/80">THE RIGHT ACTION FOLLOWS</p>
                      <p className="font-inter text-xs font-medium text-black/[0.64]">WHEN SOMETHING HAPPENS</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <div className="flex size-[120px] flex-col items-center justify-center rounded-full border border-[#111] bg-white p-3 text-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/flow-a014b.svg" className="size-7" />
                        <p className="pt-1 font-inter text-[11px] font-bold">LEAD IN</p>
                        <p className="text-[10px] leading-tight text-black/60">New customer enquiry received</p>
                      </div>
                      <div className="flex size-[120px] flex-col items-center justify-center rounded-full border border-[#5ee878] bg-[#5ee878] p-3 text-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/flow-9c70f.svg" className="size-7" />
                        <p className="pt-1 font-inter text-[11px] font-bold">SMART ROUTE</p>
                        <p className="text-[10px] leading-tight text-black/60">Lead assigned to right person</p>
                      </div>
                      <div className="flex size-[120px] flex-col items-center justify-center rounded-full border border-[#111] bg-white p-3 text-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src="/figma/flow-be0b2.svg" className="size-7" />
                        <p className="pt-1 font-inter text-[11px] font-bold">NEXT STEP</p>
                        <p className="text-[10px] leading-tight text-black/60">Follow-up or next action scheduled</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
