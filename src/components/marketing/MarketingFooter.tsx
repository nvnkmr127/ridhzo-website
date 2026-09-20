import { appUrl } from "@/lib/config";
import Link from "next/link";
import { Zap, ShieldCheck } from "lucide-react";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-card text-muted-foreground text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 sm:gap-10">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-base tracking-tight text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background">
                <Zap className="h-3.5 w-3.5 fill-current" />
              </div>
              <span className="font-semibold text-foreground">Ridhzo</span>
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

          {/* Col 1: Product Architecture */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Product</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#features" className="hover:text-foreground transition-colors">
                  Multi-Channel Capture
                </Link>
              </li>
              <li>
                <Link href="/#speed" className="hover:text-foreground transition-colors">
                  Speed SLA Engine
                </Link>
              </li>
              <li>
                <Link href="/#pipeline" className="hover:text-foreground transition-colors">
                  Pipeline Kanban Board
                </Link>
              </li>
              <li>
                <Link href="/#pipeline" className="hover:text-foreground transition-colors">
                  Going Cold Radar
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-foreground transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Solutions</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#solutions" className="hover:text-foreground transition-colors">
                  Real Estate Brokers
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-foreground transition-colors">
                  Performance Agencies
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-foreground transition-colors">
                  Financial &amp; Insurance
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-foreground transition-colors">
                  FAQ &amp; Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Legal &amp; Trust</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-foreground transition-colors">
                  Refund &amp; Cancellation
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-foreground transition-colors">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portal Access */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Access</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={appUrl("/login")} className="hover:text-foreground transition-colors">
                  Sign In to Workspace
                </Link>
              </li>
              <li>
                <Link href={appUrl("/signup")} className="hover:text-foreground transition-colors">
                  Create Workspace
                </Link>
              </li>
              <li>
                <Link href={appUrl("/forgot-password")} className="hover:text-foreground transition-colors">
                  Reset Password
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Talk to Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} Ridhzo CRM. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-foreground transition-colors">
              Refunds
            </Link>
            <span>•</span>
            <Link href="/shipping-policy" className="hover:text-foreground transition-colors">
              Shipping
            </Link>
            <span>•</span>
            <Link href="/security" className="hover:text-foreground transition-colors">
              Security
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

