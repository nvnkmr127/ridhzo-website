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
  /** Ordering hint for index pages (lower = earlier). */
  order?: number;
}

export interface ContentItem extends ContentMeta {
  type: ContentType;
  /** Rendered HTML body (frontmatter + leading H1 stripped). */
  html: string;
  /** Estimated reading time in minutes, from the raw body word count. */
  readingTime: number;
}

/** Summary shape used by index/listing pages (no rendered body). */
export type ContentSummary = Omit<ContentItem, "html">;

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

/**
 * Resolve a frontmatter `slug` (which may differ from the filename) to its
 * source filename for a given type. Falls back to matching the filename.
 */
function resolveFileForSlug(type: ContentType, slug: string): string | null {
  const dir = typeDir(type);
  if (!fs.existsSync(dir)) return null;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  // Prefer an explicit frontmatter slug match, then a filename match.
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    if (data?.slug === slug) return file;
  }
  const byName = `${slug}.md`;
  return files.includes(byName) ? byName : null;
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

async function renderMarkdown(body: string): Promise<string> {
  // Drop a single leading H1 — the page renders the title in its own hero,
  // so keeping the markdown H1 would duplicate it.
  const withoutLeadingH1 = body.replace(/^\s*#\s+.*\r?\n/, "");
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(withoutLeadingH1);
  return processed.toString();
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
    order: typeof data.order === "number" ? data.order : undefined,
  };
}

/** Load and render a single content item by its (frontmatter or file) slug. */
export async function getContentItem(type: ContentType, slug: string): Promise<ContentItem | null> {
  const file = resolveFileForSlug(type, slug);
  if (!file) return null;

  const raw = fs.readFileSync(path.join(typeDir(type), file), "utf8");
  const { data, content } = matter(raw);
  const meta = normalizeMeta(type, file.replace(/\.md$/, ""), data);
  const html = await renderMarkdown(content);

  return {
    ...meta,
    type,
    html,
    readingTime: estimateReadingTime(content),
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
