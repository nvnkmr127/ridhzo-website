import { ContentCard } from "./ContentCard";
import type { ContentSummary } from "@/lib/content";
import type { ContentRoute } from "@/lib/content-routes";
import { PageHero } from "@/components/site/PageHero";
import { SiteCta } from "@/components/site/SiteCta";
import { HomeSection, PageGlows } from "@/components/site/primitives";

export interface ContentGroup {
  id: string;
  label: string;
  description?: string;
}

/**
 * Shared index/listing page body for any content collection. When `groups`
 * is given, items are sectioned by their `category` frontmatter (in group
 * order), with anything uncategorised collected at the end.
 */
export function ContentIndex({
  route,
  items,
  groups,
}: {
  route: ContentRoute;
  items: ContentSummary[];
  groups?: readonly ContentGroup[];
}) {
  const sections = groups
    ? [
        ...groups.map((g) => ({ ...g, items: items.filter((i) => i.category === g.id) })),
        {
          id: "more",
          label: "More",
          description: undefined,
          items: items.filter((i) => !groups.some((g) => g.id === i.category)),
        },
      ].filter((s) => s.items.length > 0)
    : null;

  return (
    <div className="relative">
      <PageGlows />
      <PageHero
        eyebrow={route.eyebrow}
        title={route.title}
        lead={route.description}
        crumbs={[{ label: "Home", href: "/" }, { label: route.label }]}
      >
        {sections ? (
          <nav aria-label="Jump to section" className="mt-4 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="focus-ring rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition-colors hover:border-highlight/50 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </nav>
        ) : null}
      </PageHero>

      <HomeSection className="pt-4 sm:pt-6">
        {items.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-white/20 bg-white/[0.04] p-10 text-center text-base text-white/65">
            New content is on the way. Check back soon.
          </p>
        ) : sections ? (
          <div className="space-y-16 sm:space-y-20">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-24">
                <div className="mb-6 flex flex-col gap-1 border-b border-white/20 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <h2
                    id={`${section.id}-heading`}
                    className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-[28px]"
                  >
                    {section.label}
                  </h2>
                  {section.description ? <p className="text-sm text-white/65 sm:text-base">{section.description}</p> : null}
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <ContentCard key={item.slug} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ContentCard key={item.slug} item={item} headingLevel="h2" />
            ))}
          </div>
        )}
      </HomeSection>

      <SiteCta />
    </div>
  );
}
