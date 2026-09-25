export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.ridhzo.com";

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
