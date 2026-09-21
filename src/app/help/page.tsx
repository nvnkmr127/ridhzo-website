import type { Metadata } from "next";
import { getContentSummaries } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { ContentIndex } from "@/components/content/ContentIndex";

const route = CONTENT_ROUTES.help;

export const metadata: Metadata = {
  title: route.title,
  description: route.description,
  alternates: { canonical: route.path },
};

export default function HelpIndexPage() {
  return <ContentIndex route={route} items={getContentSummaries("help")} />;
}
