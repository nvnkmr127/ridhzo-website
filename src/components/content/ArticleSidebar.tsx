"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ContentHeading, ContentSummary, ContentType } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { appUrl } from "@/lib/config";
import { cn } from "@/lib/utils";

const COMPACT_DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatCompactDate(dateStr?: string): string {
  if (!dateStr) return "";
  const parsed = new Date(`${dateStr}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return COMPACT_DATE_FORMATTER.format(parsed);
}

interface TocGroup {
  heading: ContentHeading;
  children: ContentHeading[];
}

function groupHeadings(headings: ContentHeading[]): TocGroup[] {
  const groups: TocGroup[] = [];
  for (const h of headings) {
    if (h.level === 2 || groups.length === 0) {
      groups.push({ heading: h, children: [] });
    } else {
      groups[groups.length - 1].children.push(h);
    }
  }
  return groups;
}

/** Strip leading "1. " from numbered subheadings inside an <ol> so numbers don't double up. */
function stripOrderedPrefix(text: string): string {
  return text.replace(/^\d+\.\s+/, "");
}

/**
 * Right sidebar matching Figma `Full Blog` (`639:14183`):
 * Table of Contents -> Share on social Media -> Related Blogs -> "NEXT LEAD WON'T WAIT." CTA card.
 * Flows naturally in the document so it scrolls cleanly with the page without clipping.
 */
export function ArticleSidebar({
  headings,
  canonicalUrl,
  title,
  related,
  contentType,
  routeLabel,
}: {
  headings: ContentHeading[];
  canonicalUrl: string;
  title: string;
  related: ContentSummary[];
  contentType: ContentType;
  routeLabel: string;
}) {
  const tocGroups = useMemo(() => groupHeadings(headings), [headings]);
  const [copied, setCopied] = useState(false);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard?.writeText(canonicalUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts; ignore silently.
    }
  };

  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(canonicalUrl);
  const hasToc = tocGroups.length > 0;
  const visibleRelated = related.slice(0, 3);
  const relatedTitle = contentType === "blog" ? "Related Blogs" : `More in ${routeLabel}`;

  return (
    <aside className="w-full shrink-0 rounded-[12px] bg-black/[0.05] p-[16px] lg:w-[352px]">
      {/* Table of Contents (639:14184) */}
      {hasToc && (
        <nav
          aria-label="Table of Contents"
          className="flex w-full flex-col items-start justify-center gap-[12px] border-b border-black/10 pb-[24px]"
        >
          <p className="font-sans text-[16px] font-normal leading-[24px] text-black">
            Table of Contents
          </p>
          <div className="flex w-full flex-col font-sans text-[14px] font-normal leading-[20px] text-black">
            {tocGroups.map(({ heading, children }) => (
              <div key={heading.id} className="w-full">
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleTocClick(e, heading.id)}
                  className="focus-ring block rounded-sm leading-[20px] text-black transition-colors hover:underline [text-underline-position:from-font] focus-visible:ring-offset-white"
                >
                  {heading.text}
                </a>
                {children.length > 0 && (
                  <ol className="list-decimal pl-[21px]">
                    {children.map((sub) => (
                      <li key={sub.id} className="leading-[20px] text-black">
                        <a
                          href={`#${sub.id}`}
                          onClick={(e) => handleTocClick(e, sub.id)}
                          className="focus-ring inline rounded-sm leading-[20px] text-black transition-colors hover:underline [text-underline-position:from-font] focus-visible:ring-offset-white"
                        >
                          {stripOrderedPrefix(sub.text)}
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}

      {/* Share on social Media (639:14187) */}
      <div
        className={cn(
          "flex w-full flex-col items-start justify-center gap-[12px] border-b border-black/10 pb-[24px]",
          hasToc ? "pt-[24px]" : "pt-0",
        )}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <p className="font-sans text-[16px] font-normal leading-[24px] text-black">
            Share on social Media
          </p>
          <span
            aria-live="polite"
            className={cn(
              "font-sans text-[12px] leading-[18px] text-black/[0.64] transition-opacity",
              copied ? "opacity-100" : "opacity-0",
            )}
          >
            {copied ? "Link copied" : ""}
          </span>
        </div>

        <div className="flex items-center gap-[32px]">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="focus-ring block size-[24px] shrink-0 rounded transition-opacity hover:opacity-70 focus-visible:ring-offset-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/99e6d.svg"
              width={24}
              height={24}
              aria-hidden="true"
              className="block size-[24px] shrink-0 max-w-none"
            />
          </a>

          <button
            type="button"
            onClick={handleCopyShareLink}
            aria-label="Copy link to share on Instagram"
            title="Copy article link"
            className="focus-ring block size-[24px] shrink-0 cursor-pointer rounded transition-opacity hover:opacity-70 focus-visible:ring-offset-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/06b84.svg"
              width={24}
              height={24}
              aria-hidden="true"
              className="block size-[24px] shrink-0 max-w-none"
            />
          </button>

          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="focus-ring block size-[24px] shrink-0 rounded transition-opacity hover:opacity-70 focus-visible:ring-offset-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/b3493.svg"
              width={24}
              height={24}
              aria-hidden="true"
              className="block size-[24px] shrink-0 max-w-none"
            />
          </a>

          <button
            type="button"
            onClick={handleCopyShareLink}
            aria-label="Copy link to share on YouTube"
            title="Copy article link"
            className="focus-ring block size-[24px] shrink-0 cursor-pointer rounded transition-opacity hover:opacity-70 focus-visible:ring-offset-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/5c7f2.svg"
              width={24}
              height={24}
              aria-hidden="true"
              className="block size-[24px] shrink-0 max-w-none"
            />
          </button>
        </div>
      </div>

      {/* Related Blogs (639:14210) */}
      {visibleRelated.length > 0 && (
        <div className="flex w-full flex-col items-start justify-center gap-[12px] border-b border-black/10 py-[24px]">
          <p className="font-sans text-[16px] font-normal leading-[24px] text-black">
            {relatedTitle}
          </p>
          <div className="flex w-full flex-col items-start gap-[12px]">
            {visibleRelated.map((r) => {
              const dateText = formatCompactDate(r.date);
              return (
                <Link
                  key={r.slug}
                  href={`${CONTENT_ROUTES[r.type].path}/${r.slug}`}
                  className="focus-ring group flex w-full items-center gap-[12px] rounded-[6px] transition-opacity hover:opacity-85 focus-visible:ring-offset-white"
                >
                  {r.image ? (
                    <div className="relative h-[64px] w-[96px] shrink-0 overflow-hidden rounded-[5.745px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={r.title}
                        src={r.image}
                        className="block size-full max-w-none object-cover object-top"
                      />
                    </div>
                  ) : null}
                  <div className="flex min-w-0 flex-1 flex-col items-start justify-between self-stretch">
                    <p className="line-clamp-2 w-full font-sans text-[14px] font-normal leading-[20px] text-black group-hover:underline [text-underline-position:from-font]">
                      {r.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-[4px] pt-[4px] font-sans text-[12px] font-normal leading-[18px]">
                      {dateText ? (
                        <span className="text-black/[0.48]">{dateText}</span>
                      ) : null}
                      {r.author ? (
                        <span className="inline-flex items-center gap-[4px]">
                          <span className="text-black/[0.48]">by</span>
                          <span className="text-[#0075cf] underline [text-underline-position:from-font]">
                            {r.author}
                          </span>
                        </span>
                      ) : null}
                      {!dateText && !r.author ? (
                        <span className="text-black/[0.48]">
                          {r.readingTime} {r.readingTime === 1 ? "min" : "mins"} read
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Sidebar Trial CTA Box (639:14243) */}
      <div className="w-full pt-[24px]">
        <div className="flex w-full flex-col items-start gap-[16px] rounded-[8px] bg-black/10 p-[12px]">
          <p className="w-full font-inter text-[32px] font-bold uppercase leading-[normal] tracking-[-0.416px] text-black">
            NEXT LEAD WON&rsquo;T WAIT.
          </p>
          <div className="flex w-full flex-col items-start gap-[24px]">
            <p className="w-full font-sans text-[16px] font-medium leading-[24px] text-black/[0.64]">
              Your next enquiry could be your next{" "}
              <span className="text-black">big customer</span>. Be ready when it{" "}
              <span className="text-black">lands</span>.
            </p>
            <Link
              href={appUrl("/signup")}
              className="focus-ring flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-black/80 bg-black px-[20px] font-sans text-[14px] font-medium leading-[20px] text-white transition-colors hover:bg-black/85 focus-visible:ring-offset-white"
            >
              Start 14-Day Free Trial
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/figma/9206a.svg"
                width={24}
                height={24}
                aria-hidden="true"
                className="block size-[24px] shrink-0 max-w-none"
              />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
