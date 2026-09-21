import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentItem, getContentSummaries } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ArticleJsonLd } from "@/components/content/JsonLd";

const route = CONTENT_ROUTES.blog;
const SITE_URL = "https://ridhzo.com";

export function generateStaticParams() {
  return getContentSummaries("blog").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getContentItem("blog", slug);
  if (!item) return {};
  const canonical = `${route.path}/${item.slug}`;
  return {
    title: item.title,
    description: item.summary ?? route.description,
    alternates: { canonical },
    openGraph: {
      title: item.title,
      description: item.summary ?? route.description,
      type: "article",
      url: `${SITE_URL}${canonical}`,
      publishedTime: item.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getContentItem("blog", slug);
  if (!item) notFound();
  return (
    <>
      <ArticleJsonLd item={item} />
      <ArticleLayout item={item} />
    </>
  );
}
