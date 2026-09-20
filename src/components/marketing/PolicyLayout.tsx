import Link from "next/link";
import { Shield, Clock, FileText, ArrowUpRight, Mail, Phone, HelpCircle } from "lucide-react";
import { ReactNode } from "react";

export interface PolicySection {
  id: string;
  title: string;
}

export interface PolicyLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  effectiveDate: string;
  version?: string;
  sections: PolicySection[];
  children: ReactNode;
  activePath: string;
}

const POLICY_PAGES = [
  { href: "/privacy", label: "Privacy Policy", desc: "Data collection, tenant isolation & user rights" },
  { href: "/terms", label: "Terms of Service", desc: "User agreements, acceptable use & liability" },
  { href: "/refund-policy", label: "Cancellation & Refund", desc: "14-day policy, billing & turnaround" },
  { href: "/shipping-policy", label: "Shipping & Delivery", desc: "Digital SaaS delivery & instant provisioning" },
  { href: "/security", label: "Security & Isolation", desc: "AES-256 encryption & zero cross-tenant leak" },
  { href: "/cookie-policy", label: "Cookie Policy", desc: "Session auth, local storage & analytics" },
];

export function PolicyLayout({
  title,
  description,
  lastUpdated,
  effectiveDate,
  version = "1.0",
  sections,
  children,
  activePath,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Policy Hero Header */}
      <header className="border-b border-border bg-card/40 py-14 sm:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground mb-6">
            <Shield className="h-3.5 w-3.5 text-foreground" />
            <span>Legal &amp; Compliance Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground pt-6 border-t border-border/80">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-foreground" />
              <span>Last updated: <strong className="text-foreground font-medium">{lastUpdated}</strong></span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div>
              <span>Effective: <strong className="text-foreground font-medium">{effectiveDate}</strong></span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted text-foreground font-mono text-[11px]">
              v{version}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5" />
                  Table of Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((section, idx) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="focus-ring block text-xs py-1.5 px-2 rounded hover:bg-secondary hover:text-foreground text-muted-foreground transition-colors leading-snug"
                    >
                      <span className="font-mono text-[10px] text-muted-foreground mr-1.5 opacity-70">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Direct Support Card */}
              <div className="rounded-xl border border-border bg-secondary/30 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <HelpCircle className="h-4 w-4" />
                  <span>Questions or Inquiries?</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our compliance and data protection team responds to all inquiries within 24 hours.
                </p>
                <div className="space-y-2 pt-1 text-xs">
                  <a
                    href="mailto:legal@ridhzo.com"
                    className="focus-ring rounded-sm flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span>legal@ridhzo.com</span>
                  </a>
                  <a
                    href="https://wa.me/919820144520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded-sm flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span>+91 98201 44520 (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Text (Prose content) */}
          <main className="lg:col-span-8 order-1 lg:order-2">
            <div className="space-y-12 text-muted-foreground text-sm sm:text-base leading-relaxed">
              {children}
            </div>

            {/* Cross-Policy Directory Footer */}
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-base font-bold text-foreground mb-4">
                Other Policies &amp; Legal Frameworks
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {POLICY_PAGES.map((policy) => {
                  const isCurrent = policy.href === activePath;
                  return (
                    <Link
                      key={policy.href}
                      href={policy.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`focus-ring p-4 rounded-xl border transition-all ${
                        isCurrent
                          ? "border-foreground/40 bg-muted/60 pointer-events-none"
                          : "border-border bg-card hover:border-foreground/30 hover:bg-secondary/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">
                          {policy.label}
                        </span>
                        {isCurrent ? (
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-foreground text-background font-medium">
                            Current
                          </span>
                        ) : (
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug">
                        {policy.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
