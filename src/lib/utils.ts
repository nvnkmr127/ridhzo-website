import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Human date for content meta ("September 15, 2026" / "Sep 15, 2026"); falls back to the raw string. */
export function formatDate(date: string, month: "long" | "short" = "long"): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { year: "numeric", month, day: "numeric", timeZone: "UTC" });
}

/** Frontmatter badges carry emojis; strip them so pills stay typographic. */
export function stripEmoji(text: string): string {
  return text.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu, "").trim();
}
