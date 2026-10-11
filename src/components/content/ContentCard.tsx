import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentSummary } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { getFeatureNav } from "@/lib/navigation";
import { formatDate, stripEmoji } from "@/lib/utils";

/** A single card on a content index/listing page, in the homepage glass-card style. */
export function ContentCard({ item, headingLevel = "h3" }: { item: ContentSummary; headingLevel?: "h2" | "h3" }) {
  const href = `${CONTENT_ROUTES[item.type].path}/${item.slug}`;
  const Icon = item.type === "features" ? getFeatureNav(item.slug)?.icon : undefined;
  const badge = item.badge ? stripEmoji(item.badge) : undefined;
  const Heading = headingLevel;

  return (
    <Link
      href={href}
      className="focus-ring group flex h-full flex-col rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition-colors hover:border-highlight/40 hover:bg-white/[0.07]"
    >
      {Icon ? (
        <span className="mb-5 grid h-10 w-10 place-items-center rounded-[10px] bg-highlight text-black">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      ) : badge ? (
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-highlight/60 bg-highlight/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.04em] text-white">
          {badge}
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <Heading className="text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white">{item.title}</Heading>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight"
          aria-hidden="true"
        />
      </div>

      {item.summary ? <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/65">{item.summary}</p> : null}

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/10 pt-4 text-xs text-white/50">
          {item.keyMetric ? <span className="text-highlight">{item.keyMetric}</span> : null}
          {item.date ? <span>{formatDate(item.date, "short")}</span> : null}
          <span>{item.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
