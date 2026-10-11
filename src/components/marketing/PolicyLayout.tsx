import Link from "next/link";
import { Clock, FileText, ArrowUpRight, Mail, Phone, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";
import { SUPPORT, whatsappUrl } from "@/lib/config";
import { PageHero } from "@/components/site/PageHero";
import { PageGlows } from "@/components/site/primitives";

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
  { href: "/security", label: "Security & Isolation", desc: "Workspace isolation & encrypted secrets" },
  { href: "/cookie-policy", label: "Cookie Policy", desc: "Session auth, local storage & analytics" },
];

function SupportCard({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-3 rounded-3xl border border-white/12 bg-white/[0.04] p-5 ${className}`}>
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <HelpCircle className="h-4 w-4 text-highlight" aria-hidden="true" />
        <span>Questions or inquiries?</span>
      </div>
      <p className="text-sm leading-6 text-white/65">
        Our compliance and data protection team responds to all inquiries within 24 hours.
      </p>
      <div className="space-y-2 pt-1 text-sm">
        <a
          href={`mailto:${SUPPORT.legalEmail}`}
          className="focus-ring flex items-center gap-2 rounded-sm text-white/65 hover:text-white hover:underline"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{SUPPORT.legalEmail}</span>
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center gap-2 rounded-sm text-white/65 hover:text-white hover:underline"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{SUPPORT.whatsappDisplay} (WhatsApp)</span>
        </a>
      </div>
    </div>
  );
}

function TocLinks({ sections, className = "" }: { sections: PolicySection[]; className?: string }) {
  return (
    <nav aria-label="Table of contents" className={`space-y-0.5 ${className}`}>
      {sections.map((section, idx) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="focus-ring block rounded-lg px-2.5 py-2 text-sm leading-snug text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <span className="mr-2 text-xs text-highlight">{String(idx + 1).padStart(2, "0")}</span>
          {section.title.replace(/^\d+\.\s*/, "")}
        </a>
      ))}
    </nav>
  );
}

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
    <div className="relative">
      <PageGlows />
      <PageHero
        eyebrow="Legal & compliance"
        title={title}
        lead={description}
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
      >
        <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-white/50">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-highlight" aria-hidden="true" />
            Last updated: <strong className="font-medium text-white">{lastUpdated}</strong>
          </span>
          <span>
            Effective: <strong className="font-medium text-white">{effectiveDate}</strong>
          </span>
          <span className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-0.5 text-xs text-white">v{version}</span>
        </div>
      </PageHero>

      <div className="relative mx-auto max-w-[1272px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* Mobile table of contents */}
        <details className="group mb-8 rounded-3xl border border-white/12 bg-white/[0.04] p-4 lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-highlight" aria-hidden="true" />
              Jump to section ({sections.length})
            </span>
            <span className="text-xs text-white/50 group-open:hidden">Tap to expand</span>
          </summary>
          <TocLinks sections={sections} className="mt-3 border-t border-white/10 pt-3" />
        </details>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-5">
                <p className="mb-3 flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.04em] text-white">
                  <FileText className="h-4 w-4 text-highlight" aria-hidden="true" />
                  Table of contents
                </p>
                <TocLinks sections={sections} />
              </div>
              <SupportCard />
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="space-y-12 break-words text-base leading-7 text-white/65">{children}</div>

            <SupportCard className="mt-10 lg:hidden" />

            <div className="mt-16 border-t border-white/10 pt-12">
              <h2 className="mb-5 text-xl font-semibold tracking-[-0.015em] text-white">Other policies</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {POLICY_PAGES.map((policy) => {
                  const isCurrent = policy.href === activePath;
                  return (
                    <Link
                      key={policy.href}
                      href={policy.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`focus-ring rounded-3xl border p-5 transition-colors ${
                        isCurrent
                          ? "pointer-events-none border-highlight/50 bg-white/[0.06]"
                          : "border-white/12 bg-white/[0.04] hover:border-highlight/40 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-white">{policy.label}</span>
                        {isCurrent ? (
                          <span className="rounded-full bg-highlight px-2 py-0.5 text-[11px] font-medium uppercase text-black">
                            Current
                          </span>
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-white/50" aria-hidden="true" />
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-snug text-white/65">{policy.desc}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
