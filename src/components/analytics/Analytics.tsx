"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { analyticsConfig } from "@/lib/analytics-config";
import { useConsent } from "@/lib/consent";
import { MetaPixel } from "./MetaPixel";

/**
 * Loads all configured marketing/analytics tags, but only after the visitor
 * has explicitly granted consent. Nothing here runs until `useConsent()`
 * returns "granted", which keeps the site GDPR-friendly by default.
 *
 * Each tag is additionally gated on its own env-var ID, so unconfigured tools
 * never render.
 */
export function Analytics() {
  const consent = useConsent();
  const { gaId, gtmId, metaPixelId } = analyticsConfig;

  if (consent !== "granted") return null;

  return (
    <>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      {metaPixelId ? <MetaPixel pixelId={metaPixelId} /> : null}
    </>
  );
}
