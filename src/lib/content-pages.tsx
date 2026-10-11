import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentItem, getContentSummaries, getRelatedSummaries, type ContentType } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { pageMetadata } from "@/lib/metadata";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ArticleJsonLd } from "@/components/content/JsonLd";
import { ContentIndex, type ContentGroup } from "@/components/content/ContentIndex";

/**
 * Route helpers shared by the five Markdown collections, so every /<type> and /<type>/[slug]
 * page gets identical metadata, static params and layout.
 */
type SlugParams = { params: Promise<{ slug: string }> };

export function indexMetadata(type: ContentType): Metadata {
  const route = CONTENT_ROUTES[type];
  return pageMetadata({ title: route.title, description: route.description, path: route.path });
}

export function IndexPage({ type, groups }: { type: ContentType; groups?: readonly ContentGroup[] }) {
  return <ContentIndex route={CONTENT_ROUTES[type]} items={getContentSummaries(type)} groups={groups} />;
}

export function staticParamsFor(type: ContentType) {
  return () => getContentSummaries(type).map((item) => ({ slug: item.slug }));
}

export function metadataFor(type: ContentType) {
  return async ({ params }: SlugParams): Promise<Metadata> => {
    const { slug } = await params;
    const item = await getContentItem(type, slug);
    if (!item) return {};
    const route = CONTENT_ROUTES[type];
    return pageMetadata({
      title: item.title,
      description: item.summary ?? route.description,
      path: `${route.path}/${item.slug}`,
      type: "article",
      publishedTime: item.date,
    });
  };
}

export function articlePageFor(type: ContentType) {
  return async function ArticlePage({ params }: SlugParams) {
    const { slug } = await params;
    const item = await getContentItem(type, slug);
    if (!item) notFound();
    return (
      <>
        <ArticleJsonLd item={item} />
        <ArticleLayout item={item} related={getRelatedSummaries(item)} />
      </>
    );
  };
}
