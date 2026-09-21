import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_ROUTES, CONTENT_ROUTE_LIST } from "@/lib/content-routes";
import { getCompetitorSlugs } from "@/lib/competitors";

const SITE_URL = "https://ridhzo.com";

/** Static marketing + legal routes that always exist. */
const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/pricing",
  "/compare",
  "/security",
  "/privacy",
  "/terms",
  "/refund-policy",
  "/shipping-policy",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));

  const indexEntries: MetadataRoute.Sitemap = CONTENT_ROUTE_LIST.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const contentEntries: MetadataRoute.Sitemap = getAllContentPaths().map(({ type, slug }) => ({
    url: `${SITE_URL}${CONTENT_ROUTES[type].path}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const compareEntries: MetadataRoute.Sitemap = getCompetitorSlugs().map((slug) => ({
    url: `${SITE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...indexEntries, ...contentEntries, ...compareEntries];
}
