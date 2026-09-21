"use client";

import { useEffect, useState } from "react";

/**
 * Minimal, dependency-free consent state for analytics/marketing tags.
 *
 * We store the visitor's choice in localStorage and broadcast changes via a
 * custom event so every subscriber (the banner + the tag loader) stays in sync
 * within the same tab. Tracking scripts only mount once consent is "granted".
 */

export type ConsentValue = "granted" | "denied" | "unset";

const STORAGE_KEY = "ridhzo.consent";
const EVENT_NAME = "ridhzo:consent-change";

export function readConsent(): ConsentValue {
  if (typeof window === "undefined") return "unset";
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

export function setConsent(value: Exclude<ConsentValue, "unset">): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore — private mode / blocked storage. Consent simply won't persist.
  }
  window.dispatchEvent(new CustomEvent<ConsentValue>(EVENT_NAME, { detail: value }));
}

/** React hook: current consent value, kept live across banner interactions. */
export function useConsent(): ConsentValue {
  // Start "unset" on both server and first client render to avoid hydration
  // mismatch; the real value is read in the effect below.
  const [consent, setConsentState] = useState<ConsentValue>("unset");

  useEffect(() => {
    setConsentState(readConsent());

    const handleChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentValue>).detail;
      setConsentState(detail ?? readConsent());
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) setConsentState(readConsent());
    };

    window.addEventListener(EVENT_NAME, handleChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(EVENT_NAME, handleChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return consent;
}
