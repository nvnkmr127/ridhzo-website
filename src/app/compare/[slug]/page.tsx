import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompetitor, getCompetitorSlugs } from "@/lib/competitors";
import { ComparePage } from "@/components/compare/ComparePage";

const SITE_URL = "https://ridhzo.com";

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
  const canonical = `/compare/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      type: "article",
      url: `${SITE_URL}${canonical}`,
    },
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
