import { Eyebrow, SectionTitle, Accent, Lead, HomeSection, GlassCard } from "@/components/site/primitives";

const VALUES = [
  {
    n: "01",
    title: "Speed wins deals",
    body: "When a customer fills out a form, they want an answer right now. Reply in minutes and you win the customer before your competition even sees the notification.",
  },
  {
    n: "02",
    title: "Simple over cluttered",
    body: "Most CRMs are loaded with buttons you never touch. Ridhzo gives you what matters: capture leads fast, alert your phone, and message in one tap.",
  },
  {
    n: "03",
    title: "Built for your phone",
    body: "You're on the road, at client meetings, or showing properties. Ridhzo works on your mobile screen, captures leads without signal, installs from your browser or as an Android app, and logs your Android calls for you.",
  },
];

export function AboutUsSection() {
  return (
    <>
      <HomeSection className="pt-4 sm:pt-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-3">
            <Eyebrow className="w-fit">The problem</Eyebrow>
            <SectionTitle>
              By the time you reply, they&apos;ve bought <Accent>elsewhere.</Accent>
            </SectionTitle>
          </div>
          <div className="flex flex-col gap-5 text-base leading-7 text-white/65 sm:text-lg">
            <p>
              If you run Facebook ads or buy leads, you know how painful the old process is. A lead comes in, sits unread in an
              ad dashboard for hours, gets exported into a messy spreadsheet, and someone types the phone number into their
              phone book just to send a WhatsApp message.
            </p>
            <p className="font-medium text-white">By the time you message them, they have already bought from someone else.</p>
            <p>
              We built Ridhzo to fix this. Ad forms connect straight to your phone. When a prospect submits an enquiry, your
              phone alerts you immediately. Tap once and WhatsApp opens with a personal message ready to go — no typing, no
              copying numbers, no delayed follow-ups.
            </p>
          </div>
        </div>
      </HomeSection>

      <HomeSection texture>
        <div className="mx-auto flex max-w-[704px] flex-col items-center gap-3 text-center">
          <Eyebrow>What we believe</Eyebrow>
          <SectionTitle className="mt-1">
            Three ideas behind every <Accent>feature.</Accent>
          </SectionTitle>
          <Lead>The principles we use to decide what goes into Ridhzo — and what stays out.</Lead>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <GlassCard key={v.n} className="flex flex-col gap-3">
              <span className="text-sm text-highlight">{v.n}</span>
              <h3 className="text-xl font-semibold tracking-[-0.015em] text-white">{v.title}</h3>
              <p className="text-sm leading-6 text-white/65">{v.body}</p>
            </GlassCard>
          ))}
        </div>
      </HomeSection>
    </>
  );
}
