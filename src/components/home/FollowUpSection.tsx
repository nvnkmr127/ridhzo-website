import Image from "next/image";
import type { ComponentType } from "react";
import { UserCheck } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";
import { WorkflowGraphIcon } from "./icons";

const SIGNALS = [
  { label: "OVERDUE", count: 8, note: "Needs attention" },
  { label: "TODAY", count: 7, note: "Planned next actions" },
  { label: "UPCOMING", count: 8, note: "Already scheduled" },
];

const SIGNAL_CARD =
  "flex flex-1 flex-col gap-1.5 rounded-[10px] border border-white/[0.11] bg-[linear-gradient(145deg,rgba(255,255,255,0.075)_6%,transparent_48%),rgba(10,11,12,0.9)] p-3 backdrop-blur-[18px]";

function Panel({
  Icon,
  title,
  subtitle,
  children,
  preview,
}: {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  preview: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[500px] flex-1 flex-col rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.043)_6%,transparent_34%),linear-gradient(180deg,#101013,#08080a)] p-6 shadow-[0_40px_90px_rgba(0,0,0,0.38)] sm:p-8">
      <div className="flex items-center gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-highlight text-black">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">{title}</h3>
          <p className="pt-0.5 text-xs leading-[18px] text-white/50">{subtitle}</p>
        </div>
      </div>
      <div className="flex gap-2 py-4 sm:gap-4">{children}</div>
      <div className="flex-1 overflow-hidden rounded-xl border border-[#252525] bg-[#0b0c0d] drop-shadow-[0_28px_65px_rgba(0,0,0,0.46)]">
        {preview}
      </div>
    </div>
  );
}

export function FollowUpSection() {
  return (
    <HomeSection id="follow-ups">
      <div className="mx-auto flex max-w-[704px] flex-col items-center gap-3 text-center">
        <Eyebrow>Follow-up + automation</Eyebrow>
        <SectionTitle className="mt-1">
          Stay on top without staying <Accent>busy.</Accent>
        </SectionTitle>
        <Lead>
          Keep urgent work visible while letting repeatable tasks run in the background. Ridhzo helps your team know what
          needs attention today and automate the actions that shouldn&apos;t need manual effort.
        </Lead>
      </div>

      <div className="mt-12 flex flex-col gap-6 lg:flex-row">
        <Panel
          Icon={UserCheck}
          title="Every next action in view"
          subtitle="Stay ahead of calls, messages and meetings."
          preview={
            <Image
              src="/home/follow-ups.webp"
              alt="Ridhzo follow-ups list with overdue, later today and upcoming counts"
              width={560}
              height={373}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-full w-full object-cover object-top"
            />
          }
        >
          {SIGNALS.map((s) => (
            <div key={s.label} className={SIGNAL_CARD}>
              <p className="text-[10px] font-bold leading-3 tracking-[0.096em] text-highlight/80">{s.label}</p>
              <p className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">{s.count}</p>
              <p className="text-[9px] leading-[14px] text-white/65">{s.note}</p>
            </div>
          ))}
        </Panel>

        <Panel
          Icon={WorkflowGraphIcon}
          title="Automate the handoffs"
          subtitle="Build consistent workflows around real sales actions."
          preview={
            <Image
              src="/home/automations.webp"
              alt="Ridhzo automation templates such as welcome WhatsApp on new lead"
              width={560}
              height={375}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-full w-full object-cover object-top"
            />
          }
        >
          <div className={`${SIGNAL_CARD} justify-center`}>
            <p className="text-[10px] font-bold leading-3 tracking-[0.096em] text-highlight/80">WHEN</p>
            <p className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">Lead arrives</p>
          </div>
          <div className={`${SIGNAL_CARD} justify-center`}>
            <p className="text-[10px] font-bold leading-3 tracking-[0.096em] text-highlight/80">THEN</p>
            <p className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">Assign + follow up</p>
          </div>
        </Panel>
      </div>
    </HomeSection>
  );
}
