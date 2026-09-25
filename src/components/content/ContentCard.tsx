import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentSummary } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { getFeatureNav } from "@/lib/navigation";

/** A single card on a content index/listing page. */
export function ContentCard({ item }: { item: ContentSummary }) {
  const href = `${CONTENT_ROUTES[item.type].path}/${item.slug}`;
  const Icon = item.type === "features" ? getFeatureNav(item.slug)?.icon : undefined;

  return (
    <Link
      href={href}
      className="focus-ring group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/30 hover:bg-secondary/40"
    >
      {Icon ? (
        <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      ) : item.badge ? (
        <span className="mb-3 inline-flex w-fit items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground">
          {item.badge}
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <h2 className="text-sm font-bold leading-snug text-foreground group-hover:text-foreground">
          {item.title}
        </h2>
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {item.summary ? (
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {item.summary}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-[11px] text-muted-foreground border-t border-border/70">
        {item.keyMetric ? (
          <span className="font-mono text-foreground">{item.keyMetric}</span>
        ) : null}
        {item.date ? <span>{formatDate(item.date)}</span> : null}
        <span>{item.readingTime} min read</span>
      </div>
    </Link>
  );
}

function formatDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
