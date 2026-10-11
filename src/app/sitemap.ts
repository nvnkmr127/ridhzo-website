import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_ROUTES, CONTENT_ROUTE_LIST } from "@/lib/content-routes";
import { getCompetitorSlugs } from "@/lib/competitors";
import { SITE_URL } from "@/lib/config";

// When /blog is proxied to WordPress (see src/middleware.ts), WordPress owns those URLs and publishes its
// own sitemap, so the Markdown blog posts would be unreachable here and must not be listed.
const BLOG_ON_WORDPRESS = Boolean(process.env.WORDPRESS_ORIGIN);

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

  const indexEntries: MetadataRoute.Sitemap = CONTENT_ROUTE_LIST.filter((r) => !(BLOG_ON_WORDPRESS && r.type === "blog")).map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const contentEntries: MetadataRoute.Sitemap = getAllContentPaths()
    .filter(({ type }) => !(BLOG_ON_WORDPRESS && type === "blog"))
    .map(({ type, slug }) => ({
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
