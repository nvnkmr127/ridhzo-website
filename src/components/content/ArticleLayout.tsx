import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import type { ContentItem, ContentSummary } from "@/lib/content";
import { ContentCard } from "./ContentCard";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { formatDate, stripEmoji } from "@/lib/utils";
import { PageHero } from "@/components/site/PageHero";
import { SiteCta } from "@/components/site/SiteCta";
import { HomeSection, SectionTitle, PageGlows } from "@/components/site/primitives";

/** Full single-article page: breadcrumb hero, rendered prose, related items and the closing CTA. */
export function ArticleLayout({ item, related = [] }: { item: ContentItem; related?: ContentSummary[] }) {
  const route = CONTENT_ROUTES[item.type];
  const metaChips: string[] = [];
  if (item.keyMetric) metaChips.push(item.keyMetric);
  if (item.targetAudience) metaChips.push(item.targetAudience);
  if (item.author) metaChips.push(item.author);

  return (
    <div className="relative">
      <PageGlows />
      <PageHero
        eyebrow={item.badge ? stripEmoji(item.badge) : route.eyebrow}
        title={item.title}
        lead={item.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: route.label, href: route.path }, { label: item.title }]}
        innerClassName="max-w-[880px]"
      >
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-white/50">
          {item.date ? <span>{formatDate(item.date)}</span> : null}
          {metaChips.map((chip) => (
            <span key={chip} className="text-highlight">
              {chip}
            </span>
          ))}
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {item.readingTime} min read
          </span>
        </div>
      </PageHero>

      <div className="relative mx-auto max-w-[880px] px-4 pb-16 sm:px-6 lg:px-8">
        <article
          className="prose prose-invert max-w-none sm:prose-lg
            prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.02em] prose-headings:text-white
            prose-p:text-white/65 prose-li:text-white/65 prose-li:marker:text-highlight
            prose-strong:text-white prose-a:text-highlight prose-a:underline-offset-4 hover:prose-a:text-highlight-soft
            prose-table:text-sm prose-th:text-white prose-td:text-white/65
            prose-code:rounded prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-white prose-code:before:content-none prose-code:after:content-none
            prose-blockquote:border-l-highlight prose-blockquote:text-white/80
            prose-hr:border-white/10 prose-thead:border-white/20 prose-tr:border-white/10"
          dangerouslySetInnerHTML={{ __html: item.html }}
        />

        <div className="mt-12 border-t border-white/10 pt-6">
          <Link
            href={route.path}
            className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-medium text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to {route.label}
          </Link>
        </div>
      </div>

      {related.length > 0 ? (
        <HomeSection className="border-t border-white/10">
          <SectionTitle className="text-[28px] sm:text-[36px] lg:text-[40px] lg:leading-[44px]">
            {item.type === "features" ? "Works great with" : `More from ${route.label}`}
          </SectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ContentCard key={r.slug} item={r} />
            ))}
          </div>
        </HomeSection>
      ) : null}

      <SiteCta />
    </div>
  );
}
