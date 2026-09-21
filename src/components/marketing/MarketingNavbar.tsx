"use client";

import { appUrl } from "@/lib/config";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

/* Single source of truth for the in-page nav, ordered to match the actual
   scroll order of the home page sections (see src/app/page.tsx). Desktop and
   mobile menus both render from this array so they can never drift apart. */
type NavLink = { label: string; id?: string; href?: string };

const NAV_LINKS: readonly NavLink[] = [
  { id: "speed", label: "Speed SLA" },
  { id: "features", label: "Features" },
  { id: "pipeline", label: "Pipeline" },
  { href: "/usecases", label: "Use Cases" },
  { id: "pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/help", label: "Help" },
  { id: "contact", label: "Contact" },
] as const;

/** Resolve the href for a nav link: an explicit route, or an in-page anchor. */
function linkHref(link: NavLink): string {
  return link.href ?? `/#${link.id}`;
}

export function MarketingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Scroll-spy: highlight the nav link for the section currently in view.
  // Only runs where the sections exist (the home page); no-ops elsewhere.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => (l.id ? document.getElementById(l.id) : null)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Trigger around the upper third of the viewport, below the sticky nav.
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Ridhzo home"
          className="focus-ring rounded-md flex items-center group py-1"
        >
          <Image
            src="/ridhzo_logo.png"
            alt="Ridhzo — The 1-Tap Mobile CRM"
            width={126}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-muted-foreground"
        >
          {NAV_LINKS.map((link) => {
            const isActive = Boolean(link.id) && activeId === link.id;
            return (
              <a
                key={link.label}
                href={linkHref(link)}
                aria-current={isActive ? "true" : undefined}
                className={`focus-ring rounded-sm transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons - CRED Style */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent text-xs">
            <Link href={appUrl("/login")}>Sign in</Link>
          </Button>
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 font-medium text-xs shadow-sm">
            <Link href={appUrl("/signup")} className="flex items-center gap-1.5">
              <span>Start Free Trial</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="focus-ring p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-border bg-card/95 backdrop-blur-xl px-4 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-4 max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          <nav aria-label="Primary" className="flex flex-col space-y-1 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => {
              const isActive = Boolean(link.id) && activeId === link.id;
              return (
                <a
                  key={link.label}
                  href={linkHref(link)}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`focus-ring px-3.5 py-2.5 min-h-[44px] flex items-center rounded-lg transition-colors hover:bg-accent hover:text-foreground ${
                    isActive ? "bg-accent/70 text-foreground font-semibold" : ""
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5 border-t border-border/70">
            <Button asChild variant="outline" className="w-full h-11 text-sm border-border bg-secondary/50">
              <Link href={appUrl("/login")} onClick={() => setMobileOpen(false)}>
                Sign in
              </Link>
            </Button>
            <Button asChild className="w-full h-11 bg-foreground text-background hover:bg-foreground/90 text-sm font-semibold shadow-sm">
              <Link href={appUrl("/signup")} onClick={() => setMobileOpen(false)}>
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
