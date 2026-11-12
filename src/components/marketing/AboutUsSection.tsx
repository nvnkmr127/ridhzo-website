import { Accent, Eyebrow, GlassCard, HomeSection, Lead, SectionTitle } from "@/components/site/primitives";

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
      <HomeSection theme="light">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-4">
            <Eyebrow theme="light" className="w-fit">
              THE PROBLEM
            </Eyebrow>
            <SectionTitle theme="light">
              BY THE TIME YOU REPLY, THEY&apos;VE BOUGHT <Accent>ELSEWHERE.</Accent>
            </SectionTitle>
          </div>
          <div className="type-body-lg flex flex-col gap-5 text-black/[0.64]">
            <p>
              If you run Facebook ads or buy leads, you know how painful the old process is. A lead comes in, sits unread in an
              ad dashboard for hours, gets exported into a messy spreadsheet, and someone types the phone number into their
              phone book just to send a WhatsApp message.
            </p>
            <p className="font-semibold text-black">
              By the time you message them, they have already bought from someone else.
            </p>
            <p>
              We built Ridhzo to fix this. Ad forms connect straight to your phone. When a prospect submits an enquiry, your
              phone alerts you immediately. Tap once and WhatsApp opens with a personal message ready to go — no typing, no
              copying numbers, no delayed follow-ups.
            </p>
          </div>
        </div>
      </HomeSection>

      <HomeSection theme="dark">
        <div className="mx-auto flex max-w-[740px] flex-col items-center gap-4 text-center">
          <Eyebrow>WHAT WE BELIEVE</Eyebrow>
          <SectionTitle>
            THREE IDEAS BEHIND EVERY <Accent>FEATURE.</Accent>
          </SectionTitle>
          <Lead>The principles we use to decide what goes into Ridhzo — and what stays out.</Lead>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <GlassCard key={v.n} theme="dark" className="flex flex-col gap-3 p-8">
              <span className="type-label text-[#5ee878]">{v.n}</span>
              <h3 className="type-h4 text-white">{v.title}</h3>
              <p className="type-body text-white/[0.64]">{v.body}</p>
            </GlassCard>
          ))}
        </div>
      </HomeSection>
    </>
  );
}
