import {
  MessageSquare,
  Zap,
  BellRing,
  WifiOff,
  Kanban,
  Users,
  Workflow,
  Layers,
  CheckCircle2,
  Clock,
  Sparkles,
  Bot,
  CalendarCheck,
  UserPlus,
  PhoneCall,
  Sliders,
  Send,
} from "lucide-react";

export function FeatureShowcase() {
  const mainFeatures = [
    {
      icon: BellRing,
      tag: "Instant Alerts",
      title: "Automatic Lead Capture",
      description:
        "Leads from Facebook Ads, Google Ads, and website forms appear in Ridhzo instantly. Your phone vibrates and rings the second a new inquiry comes in.",
      bullets: ["Connects to Facebook & Google Ads", "Custom website forms & webhooks", "Blocks duplicate phone numbers automatically"],
    },
    {
      icon: MessageSquare,
      tag: "Fast WhatsApp",
      title: "1-Tap WhatsApp Messages",
      description:
        "Send WhatsApp messages without saving numbers to your phone book. Ridhzo pre-fills your prospect's name and interest so you can reply in one tap.",
      bullets: ["No need to save phone numbers", "Pre-filled message templates", "Direct phone calling & email links"],
    },
    {
      icon: Kanban,
      tag: "Visual Board",
      title: "Simple Pipeline & Cold Lead Radar",
      description:
        "See all your deals on an easy drag-and-drop board. Plus, an automated radar alerts you if a lead has not been contacted for 14 days so you never lose a deal.",
      bullets: ["Drag leads between stages", "Flags silent leads after 14 days", "1-Click 'Escalate to High' button"],
    },
    {
      icon: Workflow,
      tag: "Automations",
      title: "Automatic Follow-up Rules",
      description:
        "Set up simple 'When this happens, do that' rules. Automatically send a welcome message, assign the lead to a rep, or schedule a follow-up call.",
      bullets: ["Send welcome messages automatically", "Assign leads without manual work", "Safe and reliable behind the scenes"],
    },
    {
      icon: Users,
      tag: "Team Sharing",
      title: "Fair Team Lead Distribution",
      description:
        "Distribute new leads fairly among your sales reps using round-robin. Reps only get leads when they are on duty and have room to take more.",
      bullets: ["No lead fighting between reps", "Set maximum leads per person", "Turn reps off when on leave"],
    },
    {
      icon: WifiOff,
      tag: "Works Offline",
      title: "100% Offline Mobile App",
      description:
        "Working in a basement, elevator, or site with poor signal? You can still add leads and notes. Ridhzo saves your work and uploads it the second you are back online.",
      bullets: ["Installs directly on iPhone & Android", "No internet needed to add leads", "Auto-syncs when signal returns"],
    },
  ];

  const extraFeatures = [
    {
      icon: Bot,
      title: "AI Lead Summary & Quick Replies",
      description: "AI reads long form answers, tells you what the buyer wants, and suggests the best message to send.",
    },
    {
      icon: CalendarCheck,
      title: "Smart Follow-up Reminders",
      description: "Pick a date and time to call back. Your phone reminds you so you never forget an appointment.",
    },
    {
      icon: UserPlus,
      title: "10-Second Quick Lead Add",
      description: "Met someone at an event? Type their name and number in 10 seconds. Ridhzo warns you if they already exist.",
    },
    {
      icon: Send,
      title: "Automated Drip Sequences",
      description: "Send a sequence of messages over 7 days (Day 1, Day 3, Day 5) until the lead answers your message.",
    },
    {
      icon: PhoneCall,
      title: "Call History & Audio Notes",
      description: "Tap to call prospects. After the call, record a quick voice note so the rest of your team knows what was discussed.",
    },
    {
      icon: Sliders,
      title: "Custom Fields for Any Business",
      description: "Add custom boxes for budget, property type, location, loan status, or any detail your team needs.",
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Layers className="h-3.5 w-3.5" />
            <span>Everything Included</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Built for Fast Closers, Not Spreadsheet Typists
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Simple, clean tools that help you talk to prospects faster, manage your pipeline on your phone,
            and close more deals.
          </p>
        </div>

        {/* Main 6 Core Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFeatures.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-foreground/30 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-secondary border border-border text-foreground flex items-center justify-center">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-secondary border border-border px-2 py-0.5 rounded">
                    {f.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border space-y-1.5">
                {f.bullets.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Features Grid */}
        <div className="mt-16 rounded-xl border border-border bg-card p-6 sm:p-9">
          <div className="text-left mb-6">
            <h3 className="text-lg font-bold text-foreground">Even More Built-In Tools</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Every tool you need to run your sales day directly from your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                <div className="h-9 w-9 rounded-lg bg-secondary border border-border text-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


