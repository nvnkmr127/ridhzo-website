import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

/**
 * Lightweight markdown content layer for the marketing site.
 *
 * Every content type (features, usecases, blog, how-to, help) lives as plain
 * `.md` files under the repo-root `content/<type>/` folder with YAML
 * frontmatter. This module reads, parses, and renders them at build time so
 * pages can be statically generated. No CMS, no database — the files are the
 * source of truth.
 */

/** Where all markdown lives, relative to the project root. */
const CONTENT_ROOT = path.join(process.cwd(), "content");

/** The content collections the site knows how to render. */
export type ContentType = "features" | "usecases" | "blog" | "how-to" | "help";

/** Frontmatter fields. Not every type uses every field — all optional except title/slug. */
export interface ContentMeta {
  title: string;
  slug: string;
  summary?: string;
  badge?: string;
  keyMetric?: string;
  targetAudience?: string;
  date?: string;
  author?: string;
  image?: string;
  featured?: boolean;
  /** Ordering hint for index pages (lower = earlier). */
  order?: number;
  /** Grouping key for index pages (features use FEATURE_CATEGORIES ids). */
  category?: string;
}

export interface ContentHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface ContentItem extends ContentMeta {
  type: ContentType;
  /** Rendered HTML body (frontmatter + leading H1 stripped, headings decorated with ids). */
  html: string;
  /** Extracted H2/H3 headings for the Table of Contents sidebar. */
  headings: ContentHeading[];
  /** Estimated reading time in minutes, from the raw body word count. */
  readingTime: number;
  /** Number of explicit step headings (`## Step ...`) in the guide body, if any. */
  stepCount?: number;
}

/** Summary shape used by index/listing pages (no rendered body). */
export type ContentSummary = Omit<ContentItem, "html" | "headings">;

function typeDir(type: ContentType): string {
  return path.join(CONTENT_ROOT, type);
}

/** Returns the slugs (filenames without .md) available for a content type. */
export function getSlugs(type: ContentType): string[] {
  const dir = typeDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/** slug -> filename per type, built once per process (content is static at build time). */
const slugIndexCache = new Map<ContentType, Map<string, string>>();

function slugIndex(type: ContentType): Map<string, string> {
  const cached = slugIndexCache.get(type);
  if (cached) return cached;
  const index = new Map<string, string>();
  const dir = typeDir(type);
  if (fs.existsSync(dir)) {
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
      const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      const fileSlug = file.replace(/\.md$/, "");
      // Frontmatter slug wins; the filename still resolves as a fallback.
      if (typeof data?.slug === "string") index.set(data.slug, file);
      if (!index.has(fileSlug)) index.set(fileSlug, file);
    }
  }
  slugIndexCache.set(type, index);
  return index;
}

/**
 * Resolve a frontmatter `slug` (which may differ from the filename) to its
 * source filename for a given type. Falls back to matching the filename.
 */
function resolveFileForSlug(type: ContentType, slug: string): string | null {
  return slugIndex(type).get(slug) ?? null;
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function countStepHeadings(text: string): number | undefined {
  const count = (text.match(/^##\s+Step\b/gim) ?? []).length;
  return count > 0 ? count : undefined;
}

const ENTITY_MAP: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  rsquo: "’",
  lsquo: "‘",
  ldquo: "“",
  rdquo: "”",
  mdash: "—",
  ndash: "–",
  rarr: "→",
};

function decodeHtmlEntities(value: string): string {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    const lower = code.toLowerCase();
    if (lower in ENTITY_MAP) return ENTITY_MAP[lower];
    if (lower.startsWith("#x")) {
      const cp = Number.parseInt(lower.slice(2), 16);
      return Number.isNaN(cp) ? match : String.fromCodePoint(cp);
    }
    if (lower.startsWith("#")) {
      const cp = Number.parseInt(lower.slice(1), 10);
      return Number.isNaN(cp) ? match : String.fromCodePoint(cp);
    }
    return match;
  });
}

function slugifyHeading(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section"
  );
}

function decorateMarkdownHtml(rawHtml: string): { html: string; headings: ContentHeading[] } {
  // Unwrap standalone markdown image paragraphs (<p><img ...></p>) so images align to exact layout spacing.
  const unwrappedImages = rawHtml.replace(/<p>\s*(<img\b[^>]*>)\s*<\/p>/gi, "$1");

  const headings: ContentHeading[] = [];
  const usedIds = new Map<string, number>();

  const html = unwrappedImages.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/gi,
    (_full, rawLevel: string, innerHtml: string) => {
      const level = Number(rawLevel) as 2 | 3;
      const text = decodeHtmlEntities(innerHtml.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
      const base = slugifyHeading(text);
      const count = usedIds.get(base) ?? 0;
      usedIds.set(base, count + 1);
      const id = count === 0 ? base : `${base}-${count + 1}`;
      if (text) headings.push({ id, text, level });
      return `<h${level} id="${id}">${innerHtml}</h${level}>`;
    },
  );

  return { html, headings };
}

async function renderMarkdown(body: string): Promise<{ html: string; headings: ContentHeading[] }> {
  // Drop a single leading H1 — the page renders the title in its own hero,
  // so keeping the markdown H1 would duplicate it.
  const withoutLeadingH1 = body.replace(/^\s*#\s+.*\r?\n/, "");
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(withoutLeadingH1);
  return decorateMarkdownHtml(processed.toString());
}

function normalizeMeta(type: ContentType, fileSlug: string, data: Record<string, unknown>): ContentMeta {
  return {
    title: (data.title as string) ?? fileSlug,
    slug: (data.slug as string) ?? fileSlug,
    summary: data.summary as string | undefined,
    badge: data.badge as string | undefined,
    keyMetric: data.keyMetric as string | undefined,
    targetAudience: data.targetAudience as string | undefined,
    date: data.date as string | undefined,
    author: data.author as string | undefined,
    image: data.image as string | undefined,
    featured: typeof data.featured === "boolean" ? data.featured : undefined,
    order: typeof data.order === "number" ? data.order : undefined,
    category: data.category as string | undefined,
  };
}

/** Load and render a single content item by its (frontmatter or file) slug. */
export async function getContentItem(type: ContentType, slug: string): Promise<ContentItem | null> {
  const file = resolveFileForSlug(type, slug);
  if (!file) return null;

  const raw = fs.readFileSync(path.join(typeDir(type), file), "utf8");
  const { data, content } = matter(raw);
  const meta = normalizeMeta(type, file.replace(/\.md$/, ""), data);
  const { html, headings } = await renderMarkdown(content);

  return {
    ...meta,
    type,
    html,
    headings,
    readingTime: estimateReadingTime(content),
    stepCount: countStepHeadings(content),
  };
}

/** List all items of a type (metadata only), sorted for index pages. */
export function getContentSummaries(type: ContentType): ContentSummary[] {
  const dir = typeDir(type);
  if (!fs.existsSync(dir)) return [];

  const items = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const meta = normalizeMeta(type, file.replace(/\.md$/, ""), data);
      return {
        ...meta,
        type,
        readingTime: estimateReadingTime(content),
        stepCount: countStepHeadings(content),
      } satisfies ContentSummary;
    });

  return items.sort((a, b) => {
    // Explicit order wins; then newest date; then alphabetical by title.
    if (a.order != null && b.order != null) return a.order - b.order;
    if (a.order != null) return -1;
    if (b.order != null) return 1;
    if (a.date && b.date) return b.date.localeCompare(a.date);
    return a.title.localeCompare(b.title);
  });
}

/** Every {type, slug} pair across all collections — used by the sitemap. */
export function getAllContentPaths(): { type: ContentType; slug: string }[] {
  const types: ContentType[] = ["features", "usecases", "blog", "how-to", "help"];
  return types.flatMap((type) =>
    getContentSummaries(type).map((item) => ({ type, slug: item.slug })),
  );
}

/**
 * Up to `limit` other items of the same type, preferring ones that share the
 * item's category, for "related" rails at the bottom of article pages.
 */
export function getRelatedSummaries(item: ContentSummary, limit = 3): ContentSummary[] {
  const others = getContentSummaries(item.type).filter((o) => o.slug !== item.slug);
  const sameCategory = item.category ? others.filter((o) => o.category === item.category) : [];
  const rest = others.filter((o) => !sameCategory.includes(o));
  return [...sameCategory, ...rest].slice(0, limit);
}
