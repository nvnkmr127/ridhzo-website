import { appUrl } from "@/lib/config";
import { Eyebrow, SectionTitle, Accent, Lead, HomeButton } from "./primitives";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-brand-deep bg-[#050d07] py-24 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_168%_at_50%_118%,#0d2710_0%,rgba(13,39,16,0)_50%),radial-gradient(65%_157%_at_50%_0%,rgba(94,232,120,0.09)_0%,rgba(94,232,120,0)_40%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-[700px] flex-col items-center gap-10 px-4 text-center sm:px-6">
        <div className="flex flex-col items-center gap-3">
          <Eyebrow>Ready when you are</Eyebrow>
          <SectionTitle className="mt-1">
            Your next lead is already on the <Accent>way.</Accent>
          </SectionTitle>
          <Lead className="max-w-[644px]">
            Give your team one place to capture, respond, manage, and follow up on every opportunity. Start with the free plan
            and upgrade only when your sales workflow grows.
          </Lead>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
          <HomeButton href="#journey" variant="secondary">
            See How It Works
          </HomeButton>
          <HomeButton href={appUrl("/signup")}>Start Free</HomeButton>
        </div>
      </div>
    </section>
  );
}
