import { appUrl } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

/** Figma "Ridhzo / Navigation / Footer" columns, mapped to the site's real routes. */
const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
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
    title: "Solutions",
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
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "How-To Guides", href: "/how-to" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refunds", href: "/refund-policy" },
  { label: "Shipping", href: "/shipping-policy" },
  { label: "Security", href: "/security" },
  { label: "Cookies", href: "/cookie-policy" },
];

const LINK = "focus-ring rounded-sm text-base leading-6 text-white/[0.41] transition-colors hover:text-white";

export function MarketingFooter() {
  return (
    <footer className="relative overflow-hidden bg-black bg-[linear-gradient(122deg,rgba(13,39,16,0.2)_0%,rgba(94,232,120,0.16)_102.8%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-[84px]">
      {/* Figma Frame 6: grain photo, overlay blend at 40% */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/home/texture.webp')] bg-cover bg-center opacity-40 mix-blend-overlay"
        aria-hidden="true"
      />
      {/* Giant faded wordmark bleeding off the bottom edge */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/home/footer-wordmark.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[0.46%] h-auto w-full select-none"
      />

      <div className="relative mx-auto max-w-[1272px] rounded-3xl border border-white/12 bg-white/[0.04] px-6 pb-8 pt-10 sm:px-12 sm:pt-12">
        {/* Brand + CTA */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="flex max-w-[300px] flex-col gap-4">
            <Link href="/" aria-label="Ridhzo home" className="focus-ring inline-flex w-fit rounded-md">
              <Image
                src="/logo/Ridhzo-Logo-Final_Horizontal-Light.png"
                alt="Ridhzo — Leads Move Faster"
                width={130}
                height={42}
                className="h-9 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-base leading-6 text-white/[0.64]">
              The mobile-first CRM built to help sales teams respond faster and follow through.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link
              href={appUrl("/signup")}
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white bg-white/80 px-5 text-sm font-medium text-black transition-colors hover:bg-white"
            >
              Start Free <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <p className="whitespace-nowrap text-xs leading-[18px] text-white/[0.64]">No credit card · Free forever</p>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 pt-12 sm:pt-16 lg:grid-cols-4 lg:gap-x-12">
          {FOOTER_SECTIONS.map((section, i) => (
            <div key={section.title} className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase leading-5 text-white">{section.title}</p>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={LINK}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {i === FOOTER_SECTIONS.length - 1 && <SocialIcons className="pt-2" />}
            </div>
          ))}
        </nav>

        {/* Legal */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:mt-14 sm:pt-12">
          <div className="flex flex-col items-start justify-between gap-4 text-xs leading-[18px] text-white/[0.64] sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Ridhzo. All rights reserved. Made with ♥ by{" "}
              <a
                href="https://digicloudify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-sm underline underline-offset-2 hover:text-white"
              >
                Digicloudify
              </a>
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="focus-ring rounded-sm transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
