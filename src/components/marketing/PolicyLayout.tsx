import Link from "next/link";
import type { ReactNode } from "react";
import { SUPPORT, whatsappUrl } from "@/lib/config";
import { PageHero } from "@/components/site/PageHero";
import { SiteCta } from "@/components/site/SiteCta";
import {
  EmailEnvelopeIcon,
  FeatherArrowUpRight,
  FeatherClock,
  FeatherFileText,
  FeatherHelpCircle,
  FeatherPhone,
} from "@/components/site/icons";

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
    <div className={`space-y-3 rounded-[16px] border border-white/[0.12] bg-white/[0.04] p-5 ${className}`}>
      <div className="flex items-center gap-2 font-sans text-[14px] font-semibold text-white">
        <FeatherHelpCircle className="h-4 w-4 text-[#5ee878]" />
        <span>Questions or inquiries?</span>
      </div>
      <p className="font-sans text-[14px] leading-[22px] text-white/[0.64]">
        Our compliance and data protection team responds to all inquiries within 24 hours.
      </p>
      <div className="space-y-2 pt-1 font-sans text-[14px]">
        <a
          href={`mailto:${SUPPORT.legalEmail}`}
          className="focus-ring flex items-center gap-2 rounded-sm text-white/[0.64] hover:text-white hover:underline"
        >
          <EmailEnvelopeIcon className="h-4 w-4 shrink-0" />
          <span>{SUPPORT.legalEmail}</span>
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center gap-2 rounded-sm text-white/[0.64] hover:text-white hover:underline"
        >
          <FeatherPhone className="h-4 w-4 shrink-0" />
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
          className="focus-ring block rounded-[10px] px-2.5 py-2 font-sans text-[14px] leading-snug text-white/[0.64] transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <span className="mr-2 font-mono text-[12px] text-[#5ee878]">{String(idx + 1).padStart(2, "0")}</span>
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
    <>
      <PageHero
        eyebrow="LEGAL & COMPLIANCE"
        title={title}
        description={description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
      >
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.08] pt-5 font-sans text-[13px] text-white/[0.48]">
          <span className="flex items-center gap-1.5">
            <FeatherClock className="h-4 w-4 text-[#5ee878]" />
            Last updated: <strong className="font-medium text-white">{lastUpdated}</strong>
          </span>
          <span>
            Effective: <strong className="font-medium text-white">{effectiveDate}</strong>
          </span>
          <span className="rounded-full border border-white/[0.12] bg-white/[0.04] px-2.5 py-0.5 text-[12px] text-white">
            v{version}
          </span>
        </div>
      </PageHero>

      <div className="relative z-[1] bg-black px-4 pb-20 pt-4 text-white sm:px-8 lg:px-[84px]">
        <div className="mx-auto w-full max-w-[1272px]">
          {/* Mobile table of contents */}
          <details className="group mb-8 rounded-[16px] border border-white/[0.12] bg-white/[0.04] p-4 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-[14px] font-semibold text-white">
              <span className="flex items-center gap-2">
                <FeatherFileText className="h-4 w-4 text-[#5ee878]" />
                Jump to section ({sections.length})
              </span>
              <span className="text-[12px] text-white/[0.48] group-open:hidden">Tap to expand</span>
            </summary>
            <TocLinks sections={sections} className="mt-3 border-t border-white/[0.08] pt-3" />
          </details>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <aside className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-36 space-y-6">
                <div className="rounded-[16px] border border-white/[0.12] bg-white/[0.04] p-5">
                  <p className="type-label mb-3 flex items-center gap-2 text-white">
                    <FeatherFileText className="h-4 w-4 text-[#5ee878]" />
                    Table of contents
                  </p>
                  <TocLinks sections={sections} />
                </div>
                <SupportCard />
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="type-body space-y-12 break-words text-white/[0.64]">
                {children}
              </div>

              <SupportCard className="mt-10 lg:hidden" />

              <div className="mt-16 border-t border-white/[0.08] pt-12">
                <h2 className="type-h4 mb-5 text-white">
                  Other policies
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {POLICY_PAGES.map((policy) => {
                    const isCurrent = policy.href === activePath;
                    return (
                      <Link
                        key={policy.href}
                        href={policy.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`focus-ring rounded-[16px] border p-5 transition-colors ${isCurrent
                          ? "pointer-events-none border-[#5ee878]/[0.48] bg-white/[0.06]"
                          : "border-white/[0.12] bg-white/[0.04] hover:border-[#5ee878]/[0.48] hover:bg-white/[0.06]"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-inter text-[16px] font-bold text-white">{policy.label}</span>
                          {isCurrent ? (
                            <span className="rounded-full bg-[#5ee878] px-2.5 py-0.5 font-sans text-[11px] font-medium uppercase text-black">
                              Current
                            </span>
                          ) : (
                            <FeatherArrowUpRight className="h-4 w-4 text-white/[0.48]" />
                          )}
                        </div>
                        <p className="mt-1.5 font-sans text-[14px] leading-snug text-white/[0.64]">{policy.desc}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteCta />
    </>
  );
}
