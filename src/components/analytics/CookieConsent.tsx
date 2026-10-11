"use client";

import Link from "next/link";
import { useConsent, setConsent } from "@/lib/consent";
import { hasAnyTag } from "@/lib/analytics-config";
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
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/12 bg-[rgba(10,12,11,0.92)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-highlight" aria-hidden="true" />
            <p className="text-sm leading-6 text-white/65">
              We use cookies for analytics and to improve your experience. See our{" "}
              <Link
                href="/cookie-policy"
                className="focus-ring rounded-sm font-medium text-highlight underline underline-offset-2 hover:text-highlight-soft"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              className="focus-ring inline-flex h-10 flex-1 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-4 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:flex-none"
              onClick={() => setConsent("denied")}
            >
              Decline
            </button>
            <button
              type="button"
              className="focus-ring inline-flex h-10 flex-1 items-center justify-center rounded-xl border border-white bg-white/80 px-4 text-sm font-medium text-black transition-colors hover:bg-white sm:flex-none"
              onClick={() => setConsent("granted")}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
