import { ContentCard } from "./ContentCard";
import type { ContentSummary } from "@/lib/content";
import type { ContentRoute } from "@/lib/content-routes";

/** Shared index/listing page body for any content collection. */
export function ContentIndex({
  route,
  items,
}: {
  route: ContentRoute;
  items: ContentSummary[];
}) {
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
