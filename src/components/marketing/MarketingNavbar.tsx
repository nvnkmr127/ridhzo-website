"use client";

import { appUrl } from "@/lib/config";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

/* Single source of truth for the in-page nav, ordered to match the actual
   scroll order of the home page sections (see src/app/page.tsx). Desktop and
   mobile menus both render from this array so they can never drift apart. */
const NAV_LINKS = [
  { id: "speed", label: "Speed SLA" },
  { id: "features", label: "Features" },
  { id: "pipeline", label: "Pipeline" },
  { id: "solutions", label: "Solutions" },
  { id: "about", label: "About" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

export function MarketingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Scroll-spy: highlight the nav link for the section currently in view.
  // Only runs where the sections exist (the home page); no-ops elsewhere.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
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
        <Link href="/" aria-label="Ridhzo home" className="focus-ring rounded-md flex items-center gap-2.5 font-bold text-lg tracking-tight text-foreground group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background transition-transform group-hover:scale-105">
            <Zap className="h-4 w-4 fill-current" aria-hidden="true" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">Ridhzo</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-muted-foreground"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`/#${link.id}`}
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
        <div id="mobile-nav-drawer" className="lg:hidden border-b border-border bg-card px-4 pt-3 pb-6 space-y-4">
          <nav aria-label="Primary" className="flex flex-col space-y-2 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`focus-ring px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-foreground ${
                    isActive ? "bg-accent/60 text-foreground" : ""
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <Button asChild variant="outline" className="w-full text-xs">
              <Link href={appUrl("/login")} onClick={() => setMobileOpen(false)}>
                Sign in
              </Link>
            </Button>
            <Button asChild className="w-full bg-foreground text-background hover:bg-foreground/90 text-xs font-medium">
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
