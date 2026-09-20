import { Zap, Heart, Shield, CheckCircle2 } from "lucide-react";

export function AboutUsSection() {
  const values = [
    {
      title: "Speed Wins Deals",
      description:
        "When a customer fills out a form, they want an answer right now. If you reply in minutes, you win the customer before your competition even sees the notification.",
    },
    {
      title: "Simple Over Cluttered",
      description:
        "Most CRMs are loaded with hundreds of buttons you never touch. Ridhzo gives you only what matters: capture leads fast, notify your phone, and message in one tap.",
    },
    {
      title: "Built for Your Phone",
      description:
        "You are on the road, at client meetings, or showing properties. Ridhzo is designed for your mobile screen, works 100% offline, and never needs an app store download.",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-border bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Heart className="h-3.5 w-3.5" />
            <span>Our Story &amp; Mission</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Why We Built Ridhzo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Old CRMs were built 15 years ago for managers sitting at big desks.
            We built Ridhzo for salespeople who work on their phones and close deals on WhatsApp.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-xl border border-border bg-card p-6 sm:p-10 shadow-lg">
          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              If you run Facebook ads or buy leads, you know how painful the old process is. A lead comes in, sits
              unread in an ad dashboard for hours, gets exported into a messy spreadsheet, and someone manually types
              the phone number into their phone book just to send a WhatsApp message.
            </p>
            <p className="text-foreground font-medium">
              By the time you message them, they have already bought from someone else.
            </p>
            <p>
              We built Ridhzo to fix this once and for all. We connected ad forms directly to your mobile phone.
              When a prospect submits an inquiry, your phone vibrates immediately. You tap once, and WhatsApp opens
              with a personal message ready to go. No typing, no copying numbers, no delayed follow-ups.
            </p>
          </div>

          {/* 3 Core Values */}
          <div className="mt-10 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground shrink-0" />
                  <h3 className="text-sm font-bold text-foreground">{v.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
