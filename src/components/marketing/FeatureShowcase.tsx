import {
  MessageSquare,
  BellRing,
  WifiOff,
  Kanban,
  Users,
  Workflow,
  Layers,
  CheckCircle2,
  Bot,
  CalendarCheck,
  UserPlus,
  Sliders,
  Send,
  BarChart3,
  FileText,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export function FeatureShowcase() {
  const mainFeatures = [
    {
      icon: BellRing,
      tag: "Instant Alerts",
      href: "/features/lead-capture",
      title: "Automatic Lead Capture",
      description:
        "Leads from Facebook Ads, Google Ads, and website forms appear in Ridhzo instantly. Your phone vibrates and rings the second a new inquiry comes in.",
      bullets: ["Facebook, Instagram & Google Lead Forms", "Hosted web forms, webhooks, CSV & API", "Blocks duplicate phones & emails automatically"],
    },
    {
      icon: MessageSquare,
      tag: "Fast WhatsApp",
      href: "/features/whatsapp",
      title: "1-Tap WhatsApp Messages",
      description:
        "Send WhatsApp messages without saving numbers to your phone book. Ridhzo pre-fills your prospect's name and interest so you can reply in one tap.",
      bullets: ["No need to save phone numbers", "Pre-filled message templates", "Direct phone calling & email links"],
    },
    {
      icon: Kanban,
      tag: "Visual Board",
      href: "/features/pipeline-kanban",
      title: "Simple Pipeline & Cold Lead Radar",
      description:
        "See all your deals on an easy drag-and-drop board. Plus, an automated radar alerts you if a lead has not been contacted for 14 days so you never lose a deal.",
      bullets: ["Drag leads between stages", "Flags silent leads after 14 days", "1-Click 'Escalate to High' button"],
    },
    {
      icon: Workflow,
      tag: "Automations",
      href: "/features/automations",
      title: "No-Code Automation Rules",
      description:
        "Build simple 'When → If → Then' rules. Automatically send a WhatsApp welcome, assign the right rep, book a follow-up, or start a drip sequence.",
      bullets: ["4 ready-made templates to start", "Filter by source, budget, tags or custom fields", "Loop-proof and safe behind the scenes"],
    },
    {
      icon: Users,
      tag: "Team Sharing",
      href: "/features/team-routing",
      title: "Fair Team Lead Distribution",
      description:
        "Distribute new leads fairly among your sales reps using round-robin. Reps only get leads when they are on duty and have room to take more.",
      bullets: ["No lead fighting between reps", "Set maximum leads per person", "Custom roles from 13 permissions"],
    },
    {
      icon: WifiOff,
      tag: "Works Offline",
      href: "/features/offline-mode",
      title: "Offline-Ready Mobile App",
      description:
        "Working in a basement, elevator, or site with poor signal? You can still add leads and notes. Ridhzo saves your work and uploads it the second you are back online.",
      bullets: ["Installs directly on iPhone & Android", "No internet needed to add leads", "Auto-syncs when signal returns"],
    },
  ];

  const extraFeatures = [
    {
      icon: Bot,
      href: "/features/ai-assistant",
      title: "AI Sales Copilot",
      description: "Ask what to focus on today, get a 3-second recap before a call, and approve AI-drafted follow-ups in one tap.",
      badge: "New",
    },
    {
      icon: Send,
      href: "/features/sequences",
      title: "WhatsApp & Email Drip Sequences",
      description: "Day 0 → Day 2 → Day 5 cadences that respect quiet hours and stop the moment a lead replies.",
    },
    {
      icon: CalendarCheck,
      href: "/features/follow-ups",
      title: "Follow-ups & Calendar",
      description: "Daily follow-up list, month calendar, reminders 15 minutes before each task, and Google Calendar sync.",
    },
    {
      icon: BarChart3,
      href: "/features/analytics",
      title: "Dashboards & Insights",
      description: "Speed-to-lead and SLA tracking, weighted forecasts, pipeline health grades and source ROI.",
    },
    {
      icon: FileText,
      href: "/features/web-forms",
      title: "Hosted Web Forms",
      description: "Multi-step lead forms you can share as a link or embed on WordPress, Webflow or Shopify.",
    },
    {
      icon: Sliders,
      href: "/features/custom-fields-templates",
      title: "Custom Fields & Templates",
      description: "10 field types, your own pipeline stages, and one-tap WhatsApp, email & SMS templates.",
    },
    {
      icon: UserPlus,
      href: "/features/leads-hub",
      title: "Smart Segments & Bulk Actions",
      description: "Hot, at-risk and unassigned segments, saved views, bulk WhatsApp and a dry-run CSV import.",
    },
    {
      icon: Layers,
      href: "/features/api-webhooks",
      title: "API & Webhooks",
      description: "Scoped REST API keys and signed outbound webhooks with retries to sync your whole stack.",
    },
    {
      icon: CheckCircle2,
      href: "/features/lead-profile",
      title: "Trackable Proposals",
      description: "Share brochures as tracked links and get a buying-signal alert the moment a lead opens them.",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Layers className="h-3.5 w-3.5" />
            <span>Everything Included</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Built for Fast Closers, Not Spreadsheet Typists
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Simple, clean tools that help you talk to prospects faster, manage your pipeline on your phone,
            and close more deals.
          </p>
        </div>

        {/* Main 6 Core Features */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFeatures.map((f, i) => (
            <Link
              key={i}
              href={f.href}
              className="focus-ring group rounded-xl border border-border bg-card p-5 sm:p-7 flex flex-col justify-between transition-all hover:border-foreground/30 hover:-translate-y-0.5 shadow-sm"
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
                <span className="pt-3 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Extra Features Grid */}
        <div className="mt-10 sm:mt-16 rounded-xl border border-border bg-card p-4 sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-left">
              <h3 className="text-lg font-bold text-foreground">Even More Built-In Tools</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Everything you need to run your sales day, on your phone or at your desk. All included.
              </p>
            </div>
            <Link
              href="/features"
              className="focus-ring inline-flex items-center gap-1 rounded-sm text-xs font-semibold text-foreground hover:underline underline-offset-4"
            >
              Explore all features <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraFeatures.map((f, i) => (
              <Link
                key={i}
                href={f.href}
                className="focus-ring group flex items-start gap-3.5 p-3 rounded-lg hover:bg-secondary/40 transition-colors"
              >
                <div className="h-9 w-9 rounded-lg bg-secondary border border-border text-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    {f.title}
                    {f.badge ? (
                      <span className="rounded border border-border bg-secondary px-1.5 py-px text-[10px] font-medium text-muted-foreground">
                        {f.badge}
                      </span>
                    ) : null}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


