"use client";

import { useEffect } from "react";

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];
const STORE = "ridhzo.attr";

// Remembers the ad/campaign parameters the visitor arrived with (first touch wins until a new
// campaign click) and appends them to every link into the app, so signups can be attributed.
// Plain URL parameters, no cookies — doesn't need the analytics consent banner.
export function AttributionLinks() {
  useEffect(() => {
    let saved: Record<string, string> = {};
    try {
      saved = JSON.parse(localStorage.getItem(STORE) || "{}");
    } catch {}
    const now = new URLSearchParams(window.location.search);
    const fresh: Record<string, string> = {};
    for (const k of KEYS) if (now.get(k)) fresh[k] = now.get(k)!;
    if (Object.keys(fresh).length) {
      saved = fresh;
      try {
        localStorage.setItem(STORE, JSON.stringify(saved));
      } catch {}
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a || !a.href) return;
      let url: URL;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }
      if (url.hostname !== "app.ridhzo.com") return;
      for (const [k, v] of Object.entries(saved)) if (!url.searchParams.has(k)) url.searchParams.set(k, v);
      a.href = url.toString();
    };
    // Capture phase: runs before the browser follows the link.
    document.addEventListener("click", onClick, true);
    document.addEventListener("auxclick", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("auxclick", onClick, true);
    };
  }, []);
  return null;
}
