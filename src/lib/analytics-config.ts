/**
 * Central registry of marketing/analytics tag IDs, sourced from public env
 * vars. Each integration is optional: when its ID is unset, the corresponding
 * tag simply never renders. This keeps dev/preview clean and lets the team turn
 * tools on by adding an env var — no code change required.
 *
 * Recommended setup (avoids double-counting): use Google Tag Manager as the hub
 * and configure GA4 + Meta Pixel *inside* GTM. In that case set only
 * NEXT_PUBLIC_GTM_ID and leave GA/Pixel IDs empty. To fire tags directly
 * instead, set the individual IDs and leave GTM empty.
 */
export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;

export const hasAnyTag =
  Boolean(analyticsConfig.gaId) ||
  Boolean(analyticsConfig.gtmId) ||
  Boolean(analyticsConfig.metaPixelId);
