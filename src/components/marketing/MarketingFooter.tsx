import { appUrl, SOCIAL_LINKS } from "@/lib/config";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/analytics/CookieSettingsButton";
import { hasAnyTag } from "@/lib/analytics-config";
import { RidhzoLogo } from "./RidhzoLogo";

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "PRODUCT",
    links: [
      { label: "Lead Management", href: "/features/lead-management" },
      { label: "Pipeline", href: "/features/pipeline-kanban" },
      { label: "Follow-ups", href: "/features/follow-ups" },
      { label: "Automations", href: "/features/automations" },
      { label: "Insights", href: "/features/dashboards" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "Real Estate", href: "/usecases/real-estate" },
      { label: "Marketing Agencies", href: "/usecases/marketing-agencies" },
      { label: "Finance & Insurance", href: "/usecases/financial-advisors" },
      { label: "Education", href: "/usecases/education" },
      { label: "Clinics", href: "/usecases/clinics" },
      { label: "Home Services", href: "/usecases/solar-contractors" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "How-To Guides", href: "/how-to" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Security", href: "/security" },
      { label: "Careers", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refunds", href: "/refund-policy" },
  { label: "Security", href: "/security" },
];

const FIGMA_SOCIALS = [
  { label: "LinkedIn", icon: "/figma/23338.svg", href: SOCIAL_LINKS.find((s) => s.id === "linkedin")?.href ?? "https://www.linkedin.com/company/ridhzoapp/" },
  { label: "Instagram", icon: "/figma/70788.svg", href: SOCIAL_LINKS.find((s) => s.id === "instagram")?.href ?? "https://www.instagram.com/ridhzoapp" },
  { label: "X", icon: "/figma/1a0ad.svg", href: "https://x.com/ridhzoapp" },
  { label: "Product Hunt", icon: "/figma/c094d.svg", href: SOCIAL_LINKS.find((s) => s.id === "producthunt")?.href ?? "https://www.producthunt.com/products/ridhzo" },
];

export function MarketingFooter() {
  return (
    <footer className="relative z-[1] overflow-hidden border-t border-white/[0.32] bg-black px-4 py-16 [font-feature-settings:normal] sm:px-6 sm:py-20 lg:h-[760px] lg:px-[84px] lg:py-[80px]">
      {/* Figma grain photo overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40 mix-blend-overlay" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/acd60.png" className="absolute left-0 top-[-7.77%] h-[126.48%] w-full max-w-none object-cover" />
      </div>

      {/* Giant faded Ridhzo wordmark bleeding off the bottom edge (554:7650) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-0.53%] top-[57.76%]" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma/a6b6d.svg" className="block size-full max-w-none" />
      </div>

      <div className="relative mx-auto flex max-w-[1272px] flex-col items-start rounded-[24px] py-[32px]">
        {/* Brand + CTA */}
        <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="flex w-full max-w-[300px] flex-col gap-[16px]">
            <Link href="/" aria-label="Ridhzo home" className="focus-ring inline-flex w-fit items-center rounded-md">
              <RidhzoLogo tone="light" />
            </Link>
            <p className="text-[16px] font-normal leading-[24px] text-white/[0.41]">
              The mobile-first CRM built to help sales teams respond faster and follow through.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[12px] sm:items-center">
            <Link
              href={appUrl("/signup")}
              className="focus-ring inline-flex h-[48px] items-center justify-center gap-[8px] rounded-[12px] border border-white bg-white px-[20px] text-[14px] font-medium leading-[20px] text-black transition-colors hover:bg-white/90"
            >
              Start Free
              <span className="relative size-[24px] shrink-0" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/7e649.svg" className="block size-full max-w-none" />
              </span>
            </Link>
            <p className="whitespace-nowrap text-[12px] font-normal leading-[18px] text-white/[0.41]">
              No credit card · Free forever
            </p>
          </div>
        </div>

        {/* Navigation columns */}
        <nav aria-label="Footer" className="grid w-full grid-cols-2 gap-x-[48px] gap-y-10 pt-[64px] lg:grid-cols-4">
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={section.title} className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[24px]">
                <p className="text-[14px] font-semibold uppercase leading-[20px] text-white">{section.title}</p>
                <ul className="flex flex-col gap-[12px]">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="focus-ring rounded-sm text-[16px] font-normal leading-[24px] text-white/[0.41] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {idx === FOOTER_SECTIONS.length - 1 ? (
                <ul className="flex items-center gap-[16px]" aria-label="Ridhzo on social media">
                  {FIGMA_SOCIALS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ridhzo on ${s.label}`}
                        title={s.label}
                        className="focus-ring relative block size-[24px] shrink-0 opacity-85 transition-opacity hover:opacity-100"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" src={s.icon} className="block size-full max-w-none" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </nav>

        {/* Legal */}
        <div className="flex w-full flex-col gap-[24px] pt-[56px]">
          <div className="h-px w-full bg-white/10" aria-hidden="true" />
          <div className="flex w-full flex-col items-start justify-between gap-4 text-[12px] font-normal leading-[18px] text-white/[0.64] sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Ridhzo. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-x-[24px] gap-y-3">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="focus-ring rounded-sm transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              {hasAnyTag && (
                <li>
                  <CookieSettingsButton className="focus-ring rounded-sm transition-colors hover:text-white" />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
