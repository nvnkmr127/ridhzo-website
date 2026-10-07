import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";

const CASES = [
  { title: "Real Estate", body: "Route property enquiries and keep every site visit moving.", href: "/usecases/real-estate" },
  { title: "Marketing Agencies", body: "Turn campaign leads into a clear sales process.", href: "/usecases/marketing-agencies" },
  { title: "Finance & Insurance", body: "Track applications, talks, and next steps together.", href: "/usecases/financial-advisors" },
  { title: "Education", body: "Handle student inquiries and admissions follow-up.", href: "/usecases/education" },
  { title: "Clinics & Healthcare", body: "Organize patient enquiries and make follow-up dependable.", href: "/usecases/clinics" },
];

export function UseCasesHomeSection() {
  return (
    <HomeSection id="solutions">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-3 text-center">
        <Eyebrow>Built for your sales motion</Eyebrow>
        <SectionTitle className="mt-1">
          One CRM. Different ways to <Accent>sell.</Accent>
        </SectionTitle>
        <Lead>
          Ridhzo adapts to businesses where inbound leads and fast follow-up matter. The workflow stays simple while the
          sales process can change around it.
        </Lead>
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {CASES.map((c) => (
          <li key={c.title}>
            <Link
              href={c.href}
              className="focus-ring group flex h-full flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-highlight/40 hover:bg-white/[0.07]"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.015em] text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-[22px] text-white/55">{c.body}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-white/50 transition-colors group-hover:text-highlight" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
