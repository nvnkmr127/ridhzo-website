"use client";

import { appUrl } from "@/lib/config";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import {
  TOP_NAV,
  FEATURE_CATEGORIES,
  featuresByCategory,
  SOLUTION_NAV,
  RESOURCE_NAV,
  type NavItem,
  type TopNavEntry,
} from "@/lib/navigation";

type MenuId = Extract<TopNavEntry, { kind: "menu" }>["id"];

/** Which top-level menu a pathname belongs to, for the active underline. */
function activeMenuFor(pathname: string): MenuId | string | null {
  if (pathname.startsWith("/features")) return "product";
  if (pathname.startsWith("/usecases")) return "solutions";
  if (["/blog", "/how-to", "/help", "/compare"].some((p) => pathname.startsWith(p))) return "resources";
  return pathname;
}

export function MarketingNavbar() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Escape closes; clicking outside the header closes the desktop dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [closeAll]);

  // Slightly stronger header surface once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hoverOpen = (id: MenuId) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setOpenMenu(id);
  };
  const hoverClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const active = activeMenuFor(pathname);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled || openMenu || mobileOpen
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Ridhzo home" className="focus-ring rounded-md flex items-center group py-1">
          <Image
            src="/logo/Ridhzo-Logo-Final_Horizontal-Light.png"
            alt="Ridhzo — Leads Move Faster"
            width={126}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 text-sm font-medium text-muted-foreground">
          {TOP_NAV.map((entry) => {
            if (entry.kind === "link") {
              const isActive = active === entry.href;
              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`focus-ring rounded-md px-3 py-2 transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : ""
                  }`}
                >
                  {entry.label}
                </Link>
              );
            }
            const isOpen = openMenu === entry.id;
            const isActive = active === entry.id;
            return (
              <div key={entry.id} onMouseEnter={() => hoverOpen(entry.id)} onMouseLeave={hoverClose}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`nav-panel-${entry.id}`}
                  onClick={() => setOpenMenu(isOpen ? null : entry.id)}
                  className={`focus-ring flex items-center gap-1 rounded-md px-3 py-2 transition-colors hover:text-foreground ${
                    isOpen || isActive ? "text-foreground" : ""
                  }`}
                >
                  {entry.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent text-sm">
            <Link href={appUrl("/login")}>Sign in</Link>
          </Button>
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm shadow-sm">
            <Link href={appUrl("/signup")} className="flex items-center gap-1.5">
              <span>Start Free</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Button asChild size="sm" className="h-9 bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold">
            <Link href={appUrl("/signup")}>Start Free</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="focus-ring p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Desktop dropdown panels */}
      {openMenu ? (
        <div
          id={`nav-panel-${openMenu}`}
          onMouseEnter={() => hoverOpen(openMenu)}
          onMouseLeave={hoverClose}
          className="hidden lg:block absolute inset-x-0 top-full border-b border-border bg-background shadow-2xl"
        >
          <div className="mx-auto max-w-7xl px-8 py-8">
            {openMenu === "product" ? <ProductPanel /> : null}
            {openMenu === "solutions" ? (
              <LinkGridPanel
                title="Built for fast-moving sales teams"
                items={SOLUTION_NAV}
                footer={{ label: "Explore all industries", href: "/usecases" }}
              />
            ) : null}
            {openMenu === "resources" ? (
              <LinkGridPanel
                title="Learn, set up and compare"
                items={RESOURCE_NAV}
                footer={{ label: "Getting started with Ridhzo", href: "/help/getting-started" }}
              />
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-border bg-background px-4 pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))] h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain"
        >
          <nav aria-label="Primary" className="flex flex-col text-sm font-medium text-foreground">
            {TOP_NAV.map((entry) => {
              if (entry.kind === "link") {
                return (
                  <Link
                    key={entry.label}
                    href={entry.href}
                    className="focus-ring flex min-h-[48px] items-center border-b border-border/70 px-1"
                  >
                    {entry.label}
                  </Link>
                );
              }
              const isOpen = mobileSection === entry.id;
              return (
                <div key={entry.id} className="border-b border-border/70">
                  <button
                    type="button"
                    onClick={() => setMobileSection(isOpen ? null : entry.id)}
                    aria-expanded={isOpen}
                    aria-controls={`mobile-section-${entry.id}`}
                    className="focus-ring flex w-full min-h-[48px] items-center justify-between px-1 text-left"
                  >
                    {entry.label}
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen ? (
                    <div id={`mobile-section-${entry.id}`} className="pb-4">
                      {entry.id === "product" ? (
                        <div className="space-y-4">
                          {FEATURE_CATEGORIES.map((cat) => (
                            <div key={cat.id}>
                              <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                {cat.label}
                              </p>
                              <MobileLinks items={featuresByCategory(cat.id)} />
                            </div>
                          ))}
                          <MobileLinks items={[{ label: "All features →", href: "/features" }]} />
                        </div>
                      ) : null}
                      {entry.id === "solutions" ? (
                        <MobileLinks items={[...SOLUTION_NAV, { label: "All industries →", href: "/usecases" }]} />
                      ) : null}
                      {entry.id === "resources" ? <MobileLinks items={RESOURCE_NAV} /> : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="pt-5 flex flex-col gap-2.5">
            <Button asChild className="w-full h-11 bg-foreground text-background hover:bg-foreground/90 text-sm font-semibold shadow-sm">
              <Link href={appUrl("/signup")}>Start Free — No Card Needed</Link>
            </Button>
            <Button asChild variant="outline" className="w-full h-11 text-sm border-border bg-secondary/50">
              <Link href={appUrl("/login")}>Sign in</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function ProductPanel() {
  // Six categories laid out as three columns of two.
  const columns = [
    FEATURE_CATEGORIES.slice(0, 2),
    FEATURE_CATEGORIES.slice(2, 4),
    FEATURE_CATEGORIES.slice(4, 6),
  ];
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_17rem] gap-8">
      {columns.map((cats, i) => (
        <div key={i} className="space-y-6">
          {cats.map((cat) => (
            <div key={cat.id}>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{cat.label}</p>
              <ul className="space-y-0.5">
                {featuresByCategory(cat.id).map((item) => (
                  <li key={item.href}>
                    <MenuLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      <div className="flex flex-col gap-3">
        <Link
          href="/features/ai-assistant"
          className="focus-ring group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground">
              <Sparkles className="h-3 w-3" aria-hidden="true" /> New
            </span>
            <p className="mt-3 text-sm font-bold text-foreground">Meet your AI Sales Copilot</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Ask &ldquo;what should I focus on today?&rdquo;, get a 3-second recap before every call, and approve
              AI-drafted follow-ups in one tap.
            </p>
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
            See how it works <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </Link>
        <Link
          href="/features"
          className="focus-ring flex items-center justify-between rounded-lg border border-border px-4 py-3 text-xs font-semibold text-foreground transition-colors hover:bg-secondary/60"
        >
          View all features
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function LinkGridPanel({
  title,
  items,
  footer,
}: {
  title: string;
  items: readonly NavItem[];
  footer: { label: string; href: string };
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <MenuLink item={item} />
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-border pt-4">
        <Link href={footer.href} className="focus-ring inline-flex items-center gap-1 rounded-sm text-xs font-semibold text-foreground hover:underline underline-offset-4">
          {footer.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function MenuLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="focus-ring group flex items-start gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-secondary/60"
    >
      {Icon ? (
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-foreground">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      ) : null}
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          {item.label}
          {item.badge ? (
            <span className="rounded border border-border bg-secondary px-1.5 py-px text-[10px] font-medium text-muted-foreground">
              {item.badge}
            </span>
          ) : null}
        </span>
        {item.description ? (
          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{item.description}</span>
        ) : null}
      </span>
    </Link>
  );
}

function MobileLinks({ items }: { items: readonly NavItem[] }) {
  return (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className="focus-ring flex min-h-[44px] items-center gap-3 rounded-lg px-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {Icon ? <Icon className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" /> : null}
              <span>{item.label}</span>
              {item.badge ? (
                <span className="rounded border border-border bg-secondary px-1.5 py-px text-[10px] font-medium">{item.badge}</span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
