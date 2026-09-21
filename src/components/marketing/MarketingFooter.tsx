"use client";

import { appUrl } from "@/lib/config";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ChevronDown } from "lucide-react";

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "All Features", href: "/features" },
      { label: "Instant Lead Capture", href: "/features/lead-capture" },
      { label: "WhatsApp Follow-ups", href: "/features/whatsapp" },
      { label: "Pipeline & SLA Engine", href: "/features/pipeline-kanban" },
      { label: "Pricing Plans", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Real Estate Brokers", href: "/usecases/real-estate" },
      { label: "Performance Agencies", href: "/usecases/marketing-agencies" },
      { label: "Financial & Insurance", href: "/usecases/financial-advisors" },
      { label: "All Use Cases", href: "/usecases" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "How-To Guides", href: "/how-to" },
      { label: "Help Center", href: "/help" },
      { label: "Compare Ridhzo", href: "/compare" },
      { label: "FAQ & Architecture", href: "/#faq" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund & Cancellation", href: "/refund-policy" },
      { label: "Shipping & Delivery", href: "/shipping-policy" },
      { label: "Security Architecture", href: "/security" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
  {
    title: "Access",
    links: [
      { label: "Sign In to Workspace", href: appUrl("/login") },
      { label: "Create Workspace", href: appUrl("/signup") },
      { label: "Reset Password", href: appUrl("/forgot-password") },
      { label: "Talk to Support", href: "/contact" },
    ],
  },
];

export function MarketingFooter() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <footer className="border-t border-border bg-card text-muted-foreground text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 sm:gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              aria-label="Ridhzo home"
              className="focus-ring rounded-md inline-flex items-center group py-0.5"
            >
              <Image
                src="/ridhzo_logo.png"
                alt="Ridhzo — The 1-Tap Mobile CRM"
                width={130}
                height={42}
                className="h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
                unoptimized
              />
            </Link>
            <p className="text-muted-foreground text-xs max-w-sm leading-relaxed">
              The 1-tap mobile CRM engineered for sub-minute lead response, instant WhatsApp follow-ups,
              atomic round-robin routing, and automated pipeline closing.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-1">
              <ShieldCheck className="h-3.5 w-3.5 text-foreground" />
              <span>AES-256 Encrypted &amp; Tenant-Isolated Postgres</span>
            </div>
          </div>

          {/* Mobile Accordion (md:hidden) */}
          <div className="md:hidden space-y-1">
            {FOOTER_SECTIONS.map((section) => {
              const isOpen = openSection === section.title;
              return (
                <div key={section.title} className="border-b border-border/70 first:border-t">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.title)}
                    aria-expanded={isOpen}
                    aria-controls={`footer-accordion-${section.title}`}
                    className="focus-ring flex w-full items-center justify-between py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-foreground/80"
                  >
                    <span>{section.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-foreground" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <ul
                      id={`footer-accordion-${section.title}`}
                      className="pb-4 pt-1 space-y-2 text-xs text-muted-foreground"
                    >
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="focus-ring block py-1 hover:text-foreground transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Grid Columns (hidden md:grid) */}
          <div className="hidden md:grid md:grid-cols-3 md:col-span-4 gap-x-8 gap-y-10">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-2.5">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  {section.title}
                </p>
                <ul className="space-y-2 text-xs">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="focus-ring rounded-sm hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
            <p>© {new Date().getFullYear()} Ridhzo CRM. All rights reserved.</p>
            <span className="hidden sm:inline text-border">•</span>
            <p>
              Made with <span className="text-red-500 font-sans">♥</span> by{" "}
              <a
                href="https://digicloudify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-2 hover:text-foreground/80 transition-colors"
              >
                Digicloudify
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
            <Link href="/privacy" className="focus-ring rounded-sm hover:text-foreground transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="focus-ring rounded-sm hover:text-foreground transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="focus-ring rounded-sm hover:text-foreground transition-colors">
              Refunds
            </Link>
            <span>•</span>
            <Link href="/shipping-policy" className="focus-ring rounded-sm hover:text-foreground transition-colors">
              Shipping
            </Link>
            <span>•</span>
            <Link href="/security" className="focus-ring rounded-sm hover:text-foreground transition-colors">
              Security
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="focus-ring rounded-sm hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

