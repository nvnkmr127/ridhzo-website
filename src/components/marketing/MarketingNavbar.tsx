"use client";

import { appUrl } from "@/lib/config";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/site/Button";
import { FeatherMenu, FeatherX, FeatherChevronDown } from "@/components/site/icons";
import { RidhzoLogo } from "./RidhzoLogo";
import {
  FEATURE_CATEGORIES,
  featuresByCategory,
  SOLUTION_NAV,
  RESOURCE_NAV,
  type NavItem,
} from "@/lib/navigation";

type MenuId = "product" | "solutions" | "resources";

const EXPLORE_PRODUCT_LINKS = [
  { label: "All features", description: "Browse the complete feature toolkit", href: "/features" },
  { label: "Lead management", description: "Search, filter, assign and contact", href: "/features/lead-management" },
  { label: "Pipeline", description: "Move deals through clear stages", href: "/features/pipeline-kanban" },
  { label: "Follow-ups", description: "Never lose a next action", href: "/features/follow-ups" },
  { label: "Automations", description: "Event-based sales actions", href: "/features/automations" },
  { label: "Insights", description: "Spot risk, progress and opportunity", href: "/features/dashboards" },
  { label: "AI Assistant", description: "Ask questions, review helpful drafts", href: "/features/ai" },
  { label: "Integrations & API", description: "Connect sources and workflows", href: "/features/integrations" },
  { label: "Mobile app", description: "Your day and deals on the move", href: "/features/mobile-pwa" },
] as const;

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
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openSourceRef = useRef<"hover" | "click" | null>(null);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  }, []);

  const closeAll = useCallback(() => {
    clearHoverTimer();
    openSourceRef.current = null;
    setOpenMenu(null);
    setMobileOpen(false);
  }, [clearHoverTimer]);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        clearHoverTimer();
        openSourceRef.current = null;
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      clearHoverTimer();
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [closeAll, clearHoverTimer]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hoverOpen = (id: MenuId) => {
    clearHoverTimer();
    if (openMenu !== id) {
      openSourceRef.current = "hover";
    }
    setOpenMenu(id);
  };
  const hoverClose = () => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => {
      openSourceRef.current = null;
      setOpenMenu(null);
    }, 160);
  };
  const handleMenuClick = (id: MenuId) => {
    clearHoverTimer();
    if (openMenu === id && openSourceRef.current === "click") {
      openSourceRef.current = null;
      setOpenMenu(null);
      return;
    }
    openSourceRef.current = "click";
    setOpenMenu(id);
  };

  const active = activeMenuFor(pathname);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Figma Homepage/Announcement bar (554:6624) */}
      <div className="relative flex min-h-[40px] w-full items-center justify-center bg-black px-3 py-1.5 [font-feature-settings:normal] sm:h-[40px] sm:py-0">
        <div className="flex flex-wrap items-center justify-center gap-x-[16px] gap-y-1">
          <div className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-0.5">
            <span className="text-[12px] font-normal leading-[18px] text-white sm:text-[14px] sm:leading-[20px]">
              Starter plan
            </span>
            <span className="size-[5px] shrink-0 rounded-[8px] bg-white/80" aria-hidden="true" />
            <span className="text-[13px] font-semibold leading-[20px] text-[#5ee878] sm:text-[16px] sm:leading-[24px]">
              14 days free trial
            </span>
            <span className="hidden size-[5px] shrink-0 rounded-[8px] bg-white/80 sm:inline-block" aria-hidden="true" />
            <span className="hidden text-[16px] font-normal leading-[24px] text-white sm:inline">
              No Card Required
            </span>
          </div>
          <Link
            href={appUrl("/signup")}
            className="focus-ring inline-flex items-center justify-center gap-[2px] rounded-[10px] px-[8px] py-[4px] text-[12px] font-medium leading-[18px] text-[#5ee878] underline [text-underline-position:from-font] transition-opacity hover:opacity-85 sm:px-[16px] sm:py-[6px] sm:text-[14px] sm:leading-[20px]"
          >
            Start Free Trial
            <span className="relative size-[18px] shrink-0 sm:size-[20px]" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/4059a.svg" className="block size-full max-w-none" />
            </span>
          </Link>
        </div>
      </div>

      {/* Figma Homepage/Navigation (570:10654) */}
      <header ref={headerRef} className="relative w-full border-b border-black/20 bg-white text-black [font-feature-settings:normal] lg:h-[88px]">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-full lg:px-[32px]">
          <Link href="/" aria-label="Ridhzo home" className="focus-ring focus-ring-light flex shrink-0 items-center rounded-md py-1">
            <RidhzoLogo tone="dark" />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden items-center justify-center gap-[32px] lg:flex lg:h-full">
            <div className="flex h-full items-center" onMouseEnter={() => hoverOpen("product")} onMouseLeave={hoverClose}>
              <button
                type="button"
                aria-expanded={openMenu === "product"}
                aria-controls="nav-panel-product"
                onClick={() => handleMenuClick("product")}
                className={`focus-ring focus-ring-light flex items-center gap-[4px] rounded-md py-2 text-[16px] leading-[24px] transition-colors hover:text-black/[0.64] ${openMenu === "product" || active === "product" ? "font-medium text-black" : "font-normal text-black"
                  }`}
              >
                Product
                <FeatherChevronDown
                  className={`h-6 w-6 text-black transition-transform duration-200 ${openMenu === "product" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div className="flex h-full items-center" onMouseEnter={() => hoverOpen("solutions")} onMouseLeave={hoverClose}>
              <button
                type="button"
                aria-expanded={openMenu === "solutions"}
                aria-controls="nav-panel-solutions"
                onClick={() => handleMenuClick("solutions")}
                className={`focus-ring focus-ring-light flex items-center gap-[4px] rounded-md py-2 text-[16px] leading-[24px] transition-colors hover:text-black/[0.64] ${openMenu === "solutions" || active === "solutions" ? "font-medium text-black" : "font-normal text-black"
                  }`}
              >
                Solutions
                <FeatherChevronDown
                  className={`h-6 w-6 text-black transition-transform duration-200 ${openMenu === "solutions" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <Link
              href="/pricing"
              aria-current={active === "/pricing" ? "page" : undefined}
              className={`focus-ring focus-ring-light rounded-md py-2 text-[16px] leading-[24px] transition-colors ${active === "/pricing" ? "font-bold text-[#5ee878] hover:text-[#5ee878]/80" : "font-normal text-black hover:text-black/[0.64]"
                }`}
            >
              Pricing
            </Link>

            <div className="flex h-full items-center" onMouseEnter={() => hoverOpen("resources")} onMouseLeave={hoverClose}>
              <button
                type="button"
                aria-expanded={openMenu === "resources"}
                aria-controls="nav-panel-resources"
                onClick={() => handleMenuClick("resources")}
                className={`focus-ring focus-ring-light flex items-center gap-[4px] rounded-md py-2 text-[16px] leading-[24px] transition-colors hover:text-black/[0.64] ${openMenu === "resources" || active === "resources" ? "font-medium text-black" : "font-normal text-black"
                  }`}
              >
                Resources
                <FeatherChevronDown
                  className={`h-6 w-6 text-black transition-transform duration-200 ${openMenu === "resources" ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <Link
              href="/contact"
              aria-current={active === "/contact" ? "page" : undefined}
              className={`focus-ring focus-ring-light rounded-md py-2 text-[16px] leading-[24px] transition-colors ${active === "/contact" ? "font-bold text-[#5ee878] hover:text-[#5ee878]/80" : "font-normal text-black hover:text-black/[0.64]"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center justify-end gap-[20px] lg:flex">
            <Button href={appUrl("/login")} size="md" variant="secondary-light">
              Sign in
            </Button>
            <Button href={appUrl("/signup")} size="md" variant="primary-dark" icon="trailing">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button href={appUrl("/signup")} size="sm" variant="primary-dark">
              Start Free
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="focus-ring focus-ring-light rounded-md p-2 text-black/[0.64] hover:bg-black/[0.04] hover:text-black"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileOpen ? <FeatherX className="h-5 w-5" /> : <FeatherMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Desktop dropdown panels */}
        {openMenu ? (
          <div
            id={`nav-panel-${openMenu}`}
            onMouseEnter={() => hoverOpen(openMenu)}
            onMouseLeave={hoverClose}
            className="pointer-events-none absolute inset-x-0 top-full hidden justify-center pt-2 lg:flex"
          >
            <div className="pointer-events-auto w-[850px] max-w-[calc(100vw-2rem)] rounded-[17px] border border-black/20 bg-white px-[28px] pb-[24.75px] pt-[28px] text-black shadow-[0px_28px_40px_rgba(0,0,0,0.13)] [font-feature-settings:normal]">
              {openMenu === "product" ? (
                <DropdownGridPanel
                  eyebrow="EXPLORE PRODUCT"
                  items={EXPLORE_PRODUCT_LINKS}
                  footer={{ label: "Explore Product", href: "/features" }}
                  onNavigate={closeAll}
                />
              ) : null}
              {openMenu === "solutions" ? (
                <DropdownGridPanel
                  eyebrow="SOLUTIONS BY INDUSTRY"
                  items={SOLUTION_NAV}
                  footer={{ label: "Explore all industries", href: "/usecases" }}
                  onNavigate={closeAll}
                />
              ) : null}
              {openMenu === "resources" ? (
                <DropdownGridPanel
                  eyebrow="LEARN, SET UP AND COMPARE"
                  items={RESOURCE_NAV}
                  footer={{ label: "Getting started with Ridhzo", href: "/help/getting-started" }}
                  onNavigate={closeAll}
                />
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            id="mobile-nav-drawer"
            className="h-[calc(100dvh-112px)] overflow-y-auto overscroll-contain border-t border-black/20 bg-white px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 text-black lg:hidden"
          >
            <nav aria-label="Primary" className="flex flex-col text-sm font-medium text-black">
              {(
                [
                  { kind: "menu", id: "product", label: "Product" },
                  { kind: "menu", id: "solutions", label: "Solutions" },
                  { kind: "link", label: "Pricing", href: "/pricing" },
                  { kind: "menu", id: "resources", label: "Resources" },
                  { kind: "link", label: "Contact", href: "/contact" },
                ] as const
              ).map((entry) => {
                if (entry.kind === "link") {
                  return (
                    <Link
                      key={entry.label}
                      href={entry.href}
                      onClick={closeAll}
                      className="focus-ring focus-ring-light flex min-h-[48px] items-center border-b border-black/20 px-1"
                    >
                      {entry.label}
                    </Link>
                  );
                }
                const isOpen = mobileSection === entry.id;
                return (
                  <div key={entry.id} className="border-b border-black/20">
                    <button
                      type="button"
                      onClick={() => setMobileSection(isOpen ? null : entry.id)}
                      aria-expanded={isOpen}
                      aria-controls={`mobile-section-${entry.id}`}
                      className="focus-ring focus-ring-light flex min-h-[48px] w-full items-center justify-between px-1 text-left"
                    >
                      {entry.label}
                      <FeatherChevronDown
                        className={`h-4 w-4 text-black/[0.64] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen ? (
                      <div id={`mobile-section-${entry.id}`} className="pb-4">
                        {entry.id === "product" ? (
                          <div className="space-y-4">
                            {FEATURE_CATEGORIES.map((cat) => (
                              <div key={cat.id}>
                                <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-wider text-black/[0.48]">
                                  {cat.label}
                                </p>
                                <MobileLinks items={featuresByCategory(cat.id)} onNavigate={closeAll} />
                              </div>
                            ))}
                            <MobileLinks items={[{ label: "All features →", href: "/features" }]} onNavigate={closeAll} />
                          </div>
                        ) : null}
                        {entry.id === "solutions" ? (
                          <MobileLinks items={[...SOLUTION_NAV, { label: "All industries →", href: "/usecases" }]} onNavigate={closeAll} />
                        ) : null}
                        {entry.id === "resources" ? <MobileLinks items={RESOURCE_NAV} onNavigate={closeAll} /> : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>
            <div className="flex flex-col gap-2.5 pt-5">
              <Button href={appUrl("/signup")} size="md" variant="primary-dark" icon="trailing" className="w-full">
                Start Free Trial
              </Button>
              <Button href={appUrl("/login")} size="md" variant="secondary-light" className="w-full">
                Sign in
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

/** Figma "Explore Features" (573:25419) with "Explore Features-Hover" (573:25479) green hover state. */
function DropdownLinkCard({
  href,
  label,
  description,
  onNavigate,
}: {
  href: string;
  label: string;
  description?: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="focus-ring flex min-h-[62.45px] flex-col gap-[4px] rounded-[10px] p-[12px] transition-colors hover:bg-[#5ee878]/20 focus-visible:bg-[#5ee878]/20 focus-visible:ring-offset-white"
    >
      <span className="flex items-center gap-[4px] font-inter text-[14px] font-semibold leading-[normal] tracking-[-0.26px] text-black">
        {label}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/figma/nav-190ea.svg"
          width={16}
          height={16}
          aria-hidden="true"
          className="block size-[16px] shrink-0 max-w-none"
        />
      </span>
      {description ? (
        <span className="font-inter text-[12px] font-normal leading-[15.95px] text-black/[0.48]">
          {description}
        </span>
      ) : null}
    </Link>
  );
}

function DropdownGridPanel({
  eyebrow,
  items,
  footer,
  onNavigate,
}: {
  eyebrow: string;
  items: readonly NavItem[];
  footer: { label: string; href: string };
  onNavigate: () => void;
}) {
  return (
    <div>
      <p className="text-[12px] font-normal leading-[18px] text-black/[0.48]">{eyebrow}</p>
      <div className="mt-[12px] grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
        {items.map((item) => (
          <DropdownLinkCard
            key={item.href}
            href={item.href}
            label={item.label}
            description={item.description}
            onNavigate={onNavigate}
          />
        ))}
        <Button
          href={footer.href}
          onClick={onNavigate}
          size="lg"
          variant="primary-dark"
          icon="trailing"
          className="col-span-2 w-full"
        >
          {footer.label}
        </Button>
      </div>
    </div>
  );
}

function MobileLinks({ items, onNavigate }: { items: readonly NavItem[]; onNavigate: () => void }) {
  return (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="focus-ring focus-ring-light flex min-h-[44px] items-center gap-3 rounded-lg px-2 text-sm text-black/[0.64] transition-colors hover:bg-[#5ee878]/20 hover:text-black"
            >
              {Icon ? <Icon className="h-4 w-4 shrink-0 text-black" aria-hidden="true" /> : null}
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
