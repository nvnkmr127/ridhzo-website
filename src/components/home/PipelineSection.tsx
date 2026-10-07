import { Eyebrow, SectionTitle, Accent, Lead, HomeSection, ShotPanel } from "./primitives";

export function PipelineSection() {
  return (
    <HomeSection id="pipeline">
      <div className="mx-auto flex max-w-[672px] flex-col items-center gap-3 text-center">
        <Eyebrow>Pipeline management</Eyebrow>
        <SectionTitle className="mt-1">
          See every deal move <Accent>forward.</Accent>
        </SectionTitle>
        <Lead>
          Give your team a shared view of what is new, active, qualified, stalled, and ready to close. Move leads through
          clear stages without losing ownership or context.
        </Lead>
      </div>
      <ShotPanel
        src="/home/pipeline.webp"
        alt="Ridhzo kanban pipeline with New, Active and Won columns"
        width={1208}
        height={736}
        flush
        sizes="(min-width: 1280px) 1208px, 100vw"
        className="mt-10"
      />
    </HomeSection>
  );
}
