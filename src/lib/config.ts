/** Public marketing-site origin, used for canonicals, sitemaps and structured data. */
export const SITE_URL = "https://ridhzo.com";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.ridhzo.com";

/** Hostname of the product app, used to recognise links into it (e.g. for attribution). */
export const APP_HOST = (() => {
  try {
    return new URL(APP_URL).hostname;
  } catch {
    return "app.ridhzo.com";
  }
})();

/** Direct support channels, shown on the contact page and policy pages. */
export const SUPPORT = {
  whatsappNumber: "919820144520",
  whatsappDisplay: "+91 98201 44520",
  email: "hello@ridhzo.com",
  legalEmail: "legal@ridhzo.com",
  hours: "Monday to Saturday, 9:00 AM – 8:00 PM IST",
} as const;

export function whatsappUrl(text?: string) {
  return `https://wa.me/${SUPPORT.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export function appUrl(path: string) {
  return `${APP_URL.replace(/\/$/, "")}${path}`;
}

/** Official Ridhzo social profiles — used in the footer and Organization `sameAs` schema. */
export const SOCIAL_LINKS = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/ridhzoapp/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ridhzoapp" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/ridhzoapp/" },
  { id: "producthunt", label: "Product Hunt", href: "https://www.producthunt.com/products/ridhzo" },
] as const;

export type SocialId = (typeof SOCIAL_LINKS)[number]["id"];
