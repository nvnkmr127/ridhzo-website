import type { Metadata } from "next";
import { getContentSummaries } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { ContentIndex } from "@/components/content/ContentIndex";
import { FEATURE_CATEGORIES } from "@/lib/navigation";

const route = CONTENT_ROUTES.features;

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
};

export default function FeaturesIndexPage() {
  return <ContentIndex route={route} items={getContentSummaries("features")} groups={FEATURE_CATEGORIES} />;
}
