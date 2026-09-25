import { ContentCard } from "./ContentCard";
import type { ContentSummary } from "@/lib/content";
import type { ContentRoute } from "@/lib/content-routes";

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
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {route.eyebrow}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {route.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            {route.description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border bg-card/40 p-8 text-center text-sm text-muted-foreground">
            New content is on the way. Check back soon.
          </p>
        ) : sections ? (
          <div className="space-y-12 sm:space-y-16">
            {groups ? (
              <nav aria-label="Jump to section" className="-mt-2 flex flex-wrap gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="focus-ring rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            ) : null}
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-24">
                <div className="mb-5 flex flex-col gap-1 border-b border-border pb-3 sm:flex-row sm:items-end sm:justify-between">
                  <h2 id={`${section.id}-heading`} className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {section.label}
                  </h2>
                  {section.description ? (
                    <p className="text-xs text-muted-foreground sm:text-sm">{section.description}</p>
                  ) : null}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <ContentCard key={item.slug} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ContentCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
