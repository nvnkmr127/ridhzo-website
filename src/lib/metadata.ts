import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";

/**
 * Per-page metadata with a self-referencing canonical and matching Open Graph fields.
 * Titles are bare ("Pricing"); the root layout template appends the brand.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  type = "website",
  publishedTime,
}: {
  title?: string;
  description?: string;
  path: string;
  ogTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const resolvedOgTitle = ogTitle ?? (title ? `${title} — Ridhzo` : undefined);
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical: url },
    openGraph: {
      ...(resolvedOgTitle ? { title: resolvedOgTitle } : {}),
      ...(description ? { description } : {}),
      url,
      siteName: "Ridhzo",
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    // Without this, every page would inherit the homepage's Twitter card copy from the root layout.
    twitter: {
      card: "summary_large_image",
      ...(resolvedOgTitle ? { title: resolvedOgTitle } : {}),
      ...(description ? { description } : {}),
    },
  };
}
