"use client";

import { appUrl } from "@/lib/config";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X, ArrowRight } from "lucide-react";

export function MarketingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-foreground group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background transition-transform group-hover:scale-105">
            <Zap className="h-4 w-4 fill-current" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">Ridhzo</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-muted-foreground">
          <a href="/#features" className="hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/#speed" className="hover:text-foreground transition-colors">
            Speed SLA
          </a>
          <a href="/#pipeline" className="hover:text-foreground transition-colors">
            Pipeline
          </a>
          <a href="/#solutions" className="hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="/#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="/#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="/#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
          <a href="/#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop Action Buttons - CRED Style */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-accent text-xs">
            <Link href={appUrl("/login")}>Sign in</Link>
          </Button>
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 font-medium text-xs shadow-sm">
            <Link href={appUrl("/signup")} className="flex items-center gap-1.5">
              <span>Start Free Trial</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-border bg-card px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-muted-foreground">
            <a
              href="/#features"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="/#speed"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              Speed SLA
            </a>
            <a
              href="/#pipeline"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              Pipeline
            </a>
            <a
              href="/#solutions"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <a
              href="/#about"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="/#faq"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition-colors"
            >
              FAQ
            </a>
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

