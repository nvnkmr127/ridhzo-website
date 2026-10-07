import { Play } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";

export function JourneySection() {
  return (
    <HomeSection id="journey">
      <div className="flex flex-col items-center gap-2 text-center">
        <Eyebrow>See Ridhzo in action</Eyebrow>
        <SectionTitle className="mt-2 max-w-[560px]">
          See the whole lead <Accent>journey.</Accent>
        </SectionTitle>
        <Lead className="mt-2 max-w-[552px]">
          From the first alert to the next follow-up, see how Ridhzo keeps your team moving.
        </Lead>
      </div>
      <div className="mx-auto mt-10 flex max-w-[996px] items-center justify-center">
        <a
          href="#flow"
          aria-label="Jump to how Ridhzo works"
          className="focus-ring group relative flex aspect-[996/520] w-full items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(40rem_20rem_at_50%_40%,rgba(94,232,120,0.14),transparent_70%),linear-gradient(180deg,#0e1210,#060807)]"
        >
          <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-white/80 text-black transition-transform group-hover:scale-105 sm:h-[88px] sm:w-[88px]">
            <Play className="h-8 w-8 translate-x-0.5 fill-black sm:h-10 sm:w-10" aria-hidden="true" />
          </span>
        </a>
      </div>
    </HomeSection>
  );
}
