import type { ContentItem } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";

const SITE_URL = "https://ridhzo.com";

/**
 * Emits schema.org structured data for a content item so search engines can
 * surface rich results. Article for blog, HowTo for guides, FAQPage-friendly
 * Article for help.
 */
export function ArticleJsonLd({ item }: { item: ContentItem }) {
  const url = `${SITE_URL}${CONTENT_ROUTES[item.type].path}/${item.slug}`;

  const type =
    item.type === "how-to" ? "HowTo" : item.type === "blog" ? "BlogPosting" : "Article";

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    headline: item.title,
    name: item.title,
    description: item.summary,
    url,
    mainEntityOfPage: url,
    isPartOf: { "@type": "WebSite", name: "Ridhzo", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Ridhzo",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/ridhzo_logo.png` },
    },
  };

  if (item.date) {
    data.datePublished = item.date;
    data.dateModified = item.date;
  }
  if (item.author) {
    data.author = { "@type": "Person", name: item.author };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
