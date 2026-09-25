import Link from "next/link";
import {
  Plug,
  Megaphone,
  Search,
  FileText,
  Webhook,
  Table2,
  Code2,
  MessageSquare,
  Mail,
  CalendarDays,
  Target,
  Database,
  Briefcase,
  MessageCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

type Integration = {
  icon: typeof Plug;
  name: string;
  detail: string;
  href: string;
  soon?: boolean;
};

/* Mirrors the live Sources, Messaging and Lead Intelligence settings in the
   app. Roadmap items are labelled so we never over-promise. */
const GROUPS: { title: string; items: Integration[] }[] = [
  {
    title: "Lead sources in",
    items: [
      { icon: Megaphone, name: "Facebook & Instagram Lead Ads", detail: "Leads in seconds, past-lead sync", href: "/features/lead-capture" },
      { icon: Search, name: "Google Lead Form Ads", detail: "Leads in seconds with campaign details", href: "/features/lead-capture" },
      { icon: FileText, name: "Web Forms & Webhooks", detail: "Your website, Zapier, Make, Pabbly", href: "/features/lead-capture" },
      { icon: Table2, name: "CSV Import", detail: "Bring in an existing list", href: "/features/lead-capture" },
      { icon: Phone, name: "Telephony", detail: "Missed call → instant WhatsApp", href: "/features/integrations" },
      { icon: Code2, name: "REST API", detail: "Full or read-only API keys", href: "/features/integrations" },
      { icon: Briefcase, name: "LinkedIn Lead Gen", detail: "B2B lead form sync", href: "/features/integrations", soon: true },
      { icon: MessageCircle, name: "WhatsApp Inbound", detail: "New chats become leads", href: "/features/integrations", soon: true },
    ],
  },
  {
    title: "Conversations & data out",
    items: [
      { icon: MessageSquare, name: "WhatsApp", detail: "1-tap personal or Business API", href: "/features/whatsapp" },
      { icon: Mail, name: "Your Email (SMTP)", detail: "Gmail, Workspace, Zoho, Outlook, SES", href: "/features/integrations" },
      { icon: CalendarDays, name: "Google Calendar", detail: "Meetings sync, Google Meet links", href: "/features/meetings" },
      { icon: Target, name: "Meta Conversions API", detail: "Tell Meta which leads won", href: "/features/integrations" },
      { icon: Database, name: "Lead Enrichment & Inbound Email", detail: "Fill gaps, log email replies", href: "/features/integrations" },
      { icon: Webhook, name: "Outbound Webhooks", detail: "Signed events, auto-retry & replay", href: "/features/integrations" },
    ],
  },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-16 sm:py-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Plug className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Integrations</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Plugs Into the Tools You Already Use
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Every lead source feeds one pipeline, and every outcome flows back to your ads, calendar and systems.
            You don&apos;t need Zapier.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 space-y-10">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{group.title}</h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((it) => (
                  <li key={it.name}>
                    <Link
                      href={it.href}
                      className={`focus-ring group flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30 ${
                        it.soon ? "opacity-70" : ""
                      }`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
                        <it.icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-foreground">
                          {it.name}
                          {it.soon ? (
                            <span className="rounded border border-border bg-secondary px-1.5 py-px text-[10px] font-medium text-muted-foreground">
                              Coming soon
                            </span>
                          ) : null}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">{it.detail}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/features/integrations"
            className="focus-ring inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-foreground hover:underline underline-offset-4"
          >
            Building something custom? See integrations &amp; the API <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
