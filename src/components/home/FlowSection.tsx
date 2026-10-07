import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";

const MINI = "relative h-[118px] w-full max-w-[269px] overflow-hidden rounded-[14px] border border-white/8 bg-[#0b0c0d]";
const AVATAR =
  "grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border border-[#326f40] bg-[#102818] text-xs text-[#99f6aa]";
const PULSE =
  "absolute h-[85px] w-[85px] rounded-full border border-highlight shadow-[0_0_0_18px_rgba(94,232,120,0.02)]";
const PULSE_DOT = "absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-highlight shadow-[0_0_16px_rgba(94,232,120,0.6)]";

function CaptureMini() {
  return (
    <div className={`${MINI} flex items-center gap-2 p-3`}>
      <div className="flex w-[88px] shrink-0 flex-col gap-[5px]">
        {["WEB", "META", "API"].map((s) => (
          <span key={s} className="rounded-[5px] border border-[#292a2d] bg-[#111214] px-[7px] py-[5px] text-xs leading-[18px] text-[#77777c]">
            {s}
          </span>
        ))}
      </div>
      <span className="relative h-px w-7 shrink-0 bg-gradient-to-r from-[#343539] to-highlight">
        <span className="absolute -top-[3px] left-[21px] h-[7px] w-[7px] rounded-full bg-highlight shadow-[0_0_12px_rgba(94,232,120,0.55)]" />
      </span>
      <div className="flex min-w-0 items-center gap-0.5">
        <span className={AVATAR}>AM</span>
        <div className="min-w-0 pl-1">
          <p className="truncate text-xs leading-[18px] text-[#d6d6d3]">New lead</p>
          <p className="truncate text-[10px] text-[#656569]">Captured now</p>
        </div>
      </div>
    </div>
  );
}

function AlertMini() {
  return (
    <div className={MINI}>
      <span className={`${PULSE} -right-[30px] -top-[51px]`}>
        <span className={PULSE_DOT} />
      </span>
      <div className="absolute left-4 top-7 flex w-[235px] max-w-[calc(100%-2rem)] items-center gap-[9px] rounded-[10px] border border-[#2c2d30] bg-[rgba(17,18,20,0.92)] p-3 shadow-[0_16px_32px_rgba(0,0,0,0.28)]">
        <span className={AVATAR}>NS</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs leading-[18px] text-[#d6d6d3]">Lead Assigned</p>
          <p className="truncate text-[10px] text-[#656569]">Neha · just now</p>
        </div>
        <span className="rounded-full bg-highlight/10 px-1.5 py-1 text-[11px] font-semibold text-[#99f6aa]">NEW</span>
      </div>
    </div>
  );
}

function RespondMini() {
  return (
    <div className={MINI}>
      <span className={`${PULSE} -right-[30px] -top-[51px]`}>
        <span className={PULSE_DOT} />
      </span>
      <div className="absolute left-[15px] top-[15px] flex items-center gap-1.5">
        <span className={AVATAR}>NS</span>
        <div>
          <p className="text-xs leading-[18px] text-[#d6d6d3]">Aarav Mehta</p>
          <p className="text-[10px] text-[#656569]">Ready to contact</p>
        </div>
      </div>
      <div className="absolute inset-x-[15px] top-[67px] flex gap-2">
        {[
          ["Call", false],
          ["WhatsApp", true],
          ["Email", false],
        ].map(([label, active]) => (
          <span
            key={label as string}
            className={`flex-1 rounded-md border py-1.5 text-center text-[10px] ${
              active ? "border-[#2e683b] bg-[#102617] text-[#99f6aa]" : "border-[#292a2d] bg-[#111214] text-[#8d8d91]"
            }`}
          >
            {label as string}
          </span>
        ))}
      </div>
    </div>
  );
}

function FollowUpMini() {
  return (
    <div className={MINI}>
      <span className={`${PULSE} -left-[39px] -top-[52px]`}>
        <span className={PULSE_DOT} />
      </span>
      <div className="absolute left-[14px] top-[31px] flex h-[52px] w-11 flex-col overflow-hidden rounded-lg border border-[#303136] bg-[#121315]">
        <span className="pt-1.5 text-center text-base font-semibold leading-[22px] text-white">02</span>
        <span className="mt-auto bg-brand-deep py-[3px] text-center text-[10px] font-bold leading-[12px] text-highlight">OCT</span>
      </div>
      <div className="absolute left-[69px] top-[34px] flex h-[49px] w-[126px] flex-col justify-between">
        <p className="text-[9px] font-bold tracking-[0.05em] text-highlight">TODAY · 10:30 AM</p>
        <p className="text-[11px] font-semibold text-white">Call about site visit</p>
        <p className="text-[9px] text-[#656569]">Next action is visible</p>
      </div>
      <CheckCircle2 className="absolute right-4 top-[46px] h-6 w-6 fill-highlight/20 text-highlight" aria-hidden="true" />
    </div>
  );
}

const STEPS = [
  { n: "01", title: "Capture", body: "Every inbound lead enters one organized workspace, no matter where it comes from.", Mini: CaptureMini },
  { n: "02", title: "Alert", body: "The right sales rep knows immediately when a new lead needs attention.", Mini: AlertMini },
  { n: "03", title: "Respond", body: "Call, email or WhatsApp directly from the lead while intent is still high.", Mini: RespondMini },
  { n: "04", title: "Follow up", body: "Keep the next action visible, timely and consistent until the deal moves forward.", Mini: FollowUpMini },
];

export function FlowSection() {
  return (
    <HomeSection id="flow">
      <div className="mx-auto flex max-w-[672px] flex-col items-center gap-3 text-center">
        <Eyebrow>The flow</Eyebrow>
        <SectionTitle className="mt-1">
          Lead in. Action <Accent>out.</Accent>
        </SectionTitle>
        <Lead>
          Ridhzo connects the moments between a lead arriving and a deal moving forward. Capture the lead, alert the right
          person, respond quickly, and keep the next step visible.
        </Lead>
      </div>
      <div className="mx-auto mt-10 grid overflow-hidden rounded-3xl border border-[#27272d] sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ n, title, body, Mini }) => (
          <div
            key={n}
            className="flex flex-col gap-5 border-b border-[#27272d] bg-[linear-gradient(144deg,rgba(255,255,255,0.043)_6%,transparent_34%),linear-gradient(180deg,#101013,#08080a)] p-6 shadow-[0_40px_90px_rgba(0,0,0,0.38)] last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="flex items-center justify-between">
              <span className="text-base text-highlight">{n}</span>
              <ArrowRight className="h-6 w-6 text-white/30" aria-hidden="true" />
            </div>
            <Mini />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">{title}</h3>
              <p className="text-sm leading-[22px] text-white/50">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
}
