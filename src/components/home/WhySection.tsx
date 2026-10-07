import { Eyebrow, SectionTitle, Accent, Lead, HomeSection } from "./primitives";

const ROWS = [
  { n: "01", title: "Speed matters", body: "Inbound intent fades quickly. Ridhzo is designed to help teams act while a lead is ready to talk." },
  { n: "02", title: "Simplicity matters", body: "A focused workspace gives reps what they need without turning every update into admin work." },
  { n: "03", title: "Selling comes first", body: "Mobile-first tools and practical workflows keep your team closer to customers and next actions." },
];

export function WhySection() {
  return (
    <HomeSection id="why">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-3">
          <Eyebrow className="w-fit">Why Ridhzo</Eyebrow>
          <SectionTitle>
            A CRM your sales team will actually <span className="text-white">want to</span> <Accent>use.</Accent>
          </SectionTitle>
          <Lead>
            Sales teams shouldn&apos;t have to spend more time maintaining a CRM than talking to customers. Ridhzo keeps the
            workflow focused on what actually moves a deal forward: getting the lead, taking the next action, and staying on
            top of the follow-up.
          </Lead>
        </div>
        <ol className="border-t border-white/30">
          {ROWS.map((r) => (
            <li
              key={r.n}
              className="grid grid-cols-[32px_1fr] gap-x-4 gap-y-1 border-b border-white/30 py-7 sm:grid-cols-[40px_150px_1fr] sm:gap-x-5"
            >
              <span className="text-sm leading-5 text-highlight">{r.n}</span>
              <h3 className="text-base leading-6 text-[#f7f7f5]">{r.title}</h3>
              <p className="col-start-2 text-sm leading-5 text-[#7f7f7a] sm:col-start-auto">{r.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </HomeSection>
  );
}
