import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompetitor, getCompetitorSlugs } from "@/lib/competitors";
import { ComparePage } from "@/components/compare/ComparePage";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getCompetitorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  return {
    ...pageMetadata({ description: c.metaDescription, path: `/compare/${c.slug}`, ogTitle: c.metaTitle, type: "article" }),
    // Competitor titles are complete; skip the brand template.
    title: { absolute: c.metaTitle },
  };
}

export default async function CompareSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();
  return <ComparePage competitor={c} />;
}
