import Link from "next/link";
import type { ContentSummary } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { cn, stripEmoji } from "@/lib/utils";
import { FeatherArrowUpRight } from "@/components/site/icons";

export function ContentCard({
  item,
  headingLevel = "h3",
  surface = "light",
  variant = "default",
  eyebrow,
}: {
  item: ContentSummary;
  headingLevel?: "h2" | "h3";
  surface?: "light" | "dark";
  variant?: "default" | "chapter" | "howto";
  eyebrow?: string;
}) {
  const href = `${CONTENT_ROUTES[item.type].path}/${item.slug}`;
  const Heading = headingLevel;

  if (variant === "howto") {
    const cleanBadge = item.badge ? stripEmoji(item.badge) : "";
    const eyebrowLabel = eyebrow ?? (cleanBadge || "STEP-BY-STEP WALKTHROUGH");
    const metaLabel = item.stepCount
      ? `${item.readingTime} min read · ${item.stepCount} ${item.stepCount === 1 ? "step" : "steps"}`
      : `${item.readingTime} min read`;

    return (
      <Link
        href={href}
        className="focus-ring group flex min-h-[208px] items-stretch overflow-hidden rounded-[12px] border border-black/20 bg-white transition-colors hover:border-black/[0.45] focus-visible:ring-offset-white"
      >
        <div className="flex w-[104px] shrink-0 items-center justify-center bg-black p-[20px] sm:w-[140px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/figma/096bd.svg"
            width={48}
            height={48}
            aria-hidden="true"
            className="block size-[48px] shrink-0 max-w-none transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center px-[24px] py-[20px]">
          <p className="font-sans text-[12px] font-normal uppercase leading-[18px] text-[#111111]">
            {eyebrowLabel}
          </p>
          <Heading className="mt-[12px] font-inter text-[22px] font-bold leading-[normal] tracking-[-0.312px] text-[#111111] sm:text-[24px]">
            {item.title}
          </Heading>
          {item.summary ? (
            <p className="mt-[12px] line-clamp-2 font-sans text-[14px] font-normal leading-[20px] text-black/[0.64]">
              {item.summary}
            </p>
          ) : null}
          <div className="mt-auto flex items-center justify-between gap-4 pt-[14px]">
            <span className="font-sans text-[12px] font-normal leading-[18px] text-black/[0.64]">
              {metaLabel}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/c9d64.svg"
              width={24}
              height={24}
              aria-hidden="true"
              className="block size-[24px] shrink-0 max-w-none transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "chapter") {
    return (
      <Link
        href={href}
        className="focus-ring group flex flex-col justify-between gap-10 rounded-[16px] border border-black/20 bg-white p-6 transition-colors hover:border-black/50 sm:gap-16 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="type-label text-black/[0.48]">
            {eyebrow ?? item.badge ?? "CAPABILITY"}
          </span>
          <FeatherArrowUpRight className="h-7 w-7 text-black/[0.64] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
        </div>
        <div>
          <Heading className="font-inter text-[28px] font-extrabold leading-[1.08] tracking-[-1.2px] text-[#111] sm:text-[36px] sm:tracking-[-1.6px]">
            {item.title}
          </Heading>
          {item.summary ? (
            <p className="type-body mt-3 text-black/[0.64]">
              {item.summary}
            </p>
          ) : null}
          {item.keyMetric ? (
            <p className="mt-4 inline-flex items-center rounded-full border border-[#5ee878]/60 bg-[#5ee878]/20 px-3 py-1 font-sans text-[12px] font-medium text-black">
              {item.keyMetric}
            </p>
          ) : null}
        </div>
      </Link>
    );
  }

  if (surface === "dark") {
    return (
      <Link
        href={href}
        className="focus-ring group flex flex-col justify-between gap-6 rounded-[16px] border border-white/[0.16] bg-white/[0.06] p-6 transition-colors hover:border-[#5ee878]/60 hover:bg-white/[0.08]"
      >
        <div className="flex flex-col gap-3">
          {(eyebrow ?? item.badge) ? (
            <span className="type-label text-[#5ee878]">
              {eyebrow ?? item.badge}
            </span>
          ) : null}
          <Heading className="type-h4 text-white">
            {item.title}
          </Heading>
          {item.summary ? (
            <p className="type-body-sm line-clamp-2 text-white/[0.64]">
              {item.summary}
            </p>
          ) : null}
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="type-microcopy text-white/[0.48]">
            {item.keyMetric ?? `${item.readingTime} min read`}
          </span>
          <FeatherArrowUpRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#5ee878]" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="focus-ring group flex flex-col justify-between gap-5 rounded-[16px] border border-black/20 bg-white p-6 transition-colors hover:border-black/50"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          {item.badge ? (
            <span className="inline-flex items-center rounded-full border border-[#5ee878]/60 bg-[#5ee878]/25 px-3 py-1 font-sans text-[12px] font-medium leading-[18px] text-black">
              {item.badge}
            </span>
          ) : eyebrow ? (
            <span className="type-label text-black/[0.48]">
              {eyebrow}
            </span>
          ) : (
            <span />
          )}
          <FeatherArrowUpRight className="h-5 w-5 text-black/[0.48] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
        </div>
        <Heading className="type-h4 mt-4 text-black">
          {item.title}
        </Heading>
        {item.summary ? (
          <p className="type-body-sm mt-2.5 line-clamp-3 text-black/[0.64]">
            {item.summary}
          </p>
        ) : null}
      </div>
      <div className="type-microcopy flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-black/10 pt-4 text-black/[0.48]">
        {item.date ? <span>{item.date}</span> : null}
        {item.keyMetric ? <span className="font-medium text-black">{item.keyMetric}</span> : null}
        <span className={cn(!item.date && !item.keyMetric ? "" : "ml-auto")}>
          {item.readingTime} min read
        </span>
      </div>
    </Link>
  );
}
