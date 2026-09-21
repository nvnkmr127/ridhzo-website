"use client";

import Link from "next/link";
import { useConsent, setConsent } from "@/lib/consent";
import { hasAnyTag } from "@/lib/analytics-config";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

/**
 * Lightweight cookie-consent banner. Shows only when there is at least one
 * analytics/marketing tag configured AND the visitor hasn't chosen yet.
 * Choice is stored in localStorage via the consent module, which the
 * <Analytics /> loader watches to decide whether to fire any tags.
 */
export function CookieConsent() {
  const consent = useConsent();

  // Nothing to consent to (no tags), or the visitor already chose.
  if (!hasAnyTag || consent !== "unset") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/95 backdrop-blur-md p-4 sm:p-5 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-foreground" aria-hidden="true" />
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              We use cookies for analytics and to improve your experience. See our{" "}
              <Link
                href="/cookie-policy"
                className="focus-ring rounded-sm font-medium text-foreground underline underline-offset-2 hover:text-foreground/80"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9 flex-1 border-border bg-secondary/50 text-xs sm:flex-none"
              onClick={() => setConsent("denied")}
            >
              Decline
            </Button>
            <Button
              type="button"
              size="sm"
              className="h-9 flex-1 bg-foreground text-background hover:bg-foreground/90 text-xs font-medium sm:flex-none"
              onClick={() => setConsent("granted")}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
