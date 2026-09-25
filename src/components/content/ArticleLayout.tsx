import Link from "next/link";
import { ChevronRight, ArrowLeft, Clock } from "lucide-react";
import type { ContentItem, ContentSummary } from "@/lib/content";
import { ContentCard } from "./ContentCard";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { CtaBanner } from "@/components/marketing/CtaBanner";

/** Full single-article page: breadcrumb, hero, rendered prose, and CTA. */
export function ArticleLayout({ item, related = [] }: { item: ContentItem; related?: ContentSummary[] }) {
  const route = CONTENT_ROUTES[item.type];
  const metaChips: string[] = [];
  if (item.keyMetric) metaChips.push(item.keyMetric);
  if (item.targetAudience) metaChips.push(item.targetAudience);
  if (item.author) metaChips.push(item.author);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/40 py-8 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Link href="/" className="focus-ring rounded-sm hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href={route.path} className="focus-ring rounded-sm hover:text-foreground">
              {route.label}
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="truncate text-foreground">{item.title}</span>
          </nav>

          {item.badge ? (
            <span className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
              {item.badge}
            </span>
          ) : null}

          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            {item.title}
          </h1>

          {item.summary ? (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              {item.summary}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/80 pt-4 text-[11px] text-muted-foreground sm:text-xs">
            {item.date ? <span>{formatDate(item.date)}</span> : null}
            {metaChips.map((chip) => (
              <span key={chip} className="font-mono text-foreground">
                {chip}
              </span>
            ))}
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {item.readingTime} min read
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article
          className="prose prose-invert prose-sm sm:prose-base max-w-none
            prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-foreground
            prose-p:text-muted-foreground prose-li:text-muted-foreground
            prose-strong:text-foreground prose-a:text-foreground prose-a:underline-offset-2
            prose-table:text-xs sm:prose-table:text-sm prose-th:text-foreground
            prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none
            prose-hr:border-border prose-thead:border-border prose-tr:border-border"
          dangerouslySetInnerHTML={{ __html: item.html }}
        />

        <div className="mt-12 border-t border-border pt-6">
          <Link
            href={route.path}
            className="focus-ring inline-flex items-center gap-1.5 rounded-sm text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to {route.label}
          </Link>
        </div>
      </div>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="border-t border-border bg-card/30 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
              {item.type === "features" ? "Works great with" : `More from ${route.label}`}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ContentCard key={r.slug} item={r} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner />
    </div>
  );
}

function formatDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
