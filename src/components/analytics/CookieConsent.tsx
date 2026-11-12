"use client";

import Link from "next/link";
import { useConsent, setConsent } from "@/lib/consent";
import { hasAnyTag } from "@/lib/analytics-config";
import { Button } from "@/components/site/Button";
import { CookieIcon } from "@/components/site/icons";

/**
 * Lightweight cookie-consent banner aligned to Ridhzo Design System tokens:
 * pure Black/White/Highlight-Green surfaces and 40px Small button specs.
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
      <div className="mx-auto max-w-3xl rounded-[16px] border border-white/[0.16] bg-black p-4 shadow-[0_20px_50px_rgba(0,0,0,0.64)] backdrop-blur-md sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <CookieIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#5ee878]" />
            <p className="font-sans text-[14px] leading-[22px] text-white/[0.64]">
              We use cookies for analytics and to improve your experience. See our{" "}
              <Link
                href="/cookie-policy"
                className="focus-ring rounded-sm font-medium text-[#5ee878] underline underline-offset-2 hover:text-[#5ee878]/80"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="flex-1 sm:flex-none"
              onClick={() => setConsent("denied")}
            >
              Decline
            </Button>
            <Button
              type="button"
              size="sm"
              variant="primary"
              className="flex-1 sm:flex-none"
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
