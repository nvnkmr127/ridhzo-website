"use client";

import { resetConsent } from "@/lib/consent";

/** Footer control that reopens the consent banner so visitors can change or withdraw consent. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={resetConsent} className={className}>
      Cookie settings
    </button>
  );
}
