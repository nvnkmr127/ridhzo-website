"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { ContentSummary } from "@/lib/content";
import { appUrl } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/site/Button";

const PREFERRED_CATEGORY_ORDER = [
  "Sales Management",
  "Integration",
  "Optimization",
  "Scalability",
  "Analytics",
  "Collaboration",
] as const;

const LATEST_PAGE_SIZE = 6;

const DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatBlogDate(dateStr?: string): string {
  if (!dateStr) return "";
  const parsed = new Date(`${dateStr}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return DATE_FORMATTER.format(parsed);
}

function formatReadTime(minutes: number): string {
  return `${minutes} ${minutes === 1 ? "min" : "mins"} read`;
}

/**
 * Interactive blog catalog matching Figma `Blogs` (639:13852):
 * - Filter tags carousel (639:13885) with smooth horizontal scrolling + chevron controls
 * - White Search box (639:13886)
 * - FEATURED section (639:13889): 2 alternating horizontal cards + 2-col vertical card row
 * - Dark "NEXT LEAD WON'T WAIT." inline banner (639:13958)
 * - LATEST POSTS section (639:13966): 2-col vertical card grid + "Load More" button
 */
export function BlogCatalog({ items }: { items: ContentSummary[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(LATEST_PAGE_SIZE);

  const tagsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const categories = useMemo(() => {
    const present = new Set<string>();
    for (const item of items) {
      if (item.badge) present.add(item.badge);
    }
    const ordered: string[] = [];
    for (const preferred of PREFERRED_CATEGORY_ORDER) {
      if (present.has(preferred)) {
        ordered.push(preferred);
        present.delete(preferred);
      }
    }
    for (const extra of present) {
      ordered.push(extra);
    }
    return ["All", ...ordered];
  }, [items]);

  const updateScrollButtons = useCallback(() => {
    const el = tagsScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateScrollButtons();
    const el = tagsScrollRef.current;
    if (!el) return;

    const ro = new ResizeObserver(updateScrollButtons);
    ro.observe(el);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [categories, updateScrollButtons]);

  const scrollTags = (delta: number) => {
    tagsScrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(LATEST_PAGE_SIZE);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(LATEST_PAGE_SIZE);
  };

  const isDefaultView = selectedCategory === "All" && query.trim() === "";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (selectedCategory !== "All" && item.badge !== selectedCategory) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        (item.summary?.toLowerCase().includes(q) ?? false) ||
        (item.badge?.toLowerCase().includes(q) ?? false) ||
        (item.author?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [items, selectedCategory, query]);

  const { featuredHorizontal, featuredVertical, latestPosts } = useMemo(() => {
    const explicitFeatured = items.filter((p) => p.featured);
    const featuredList = (explicitFeatured.length > 0 ? explicitFeatured : items).slice(0, 4);
    const featuredSlugs = new Set(featuredList.map((p) => p.slug));
    const remaining = items.filter((p) => !featuredSlugs.has(p.slug));
    return {
      featuredHorizontal: featuredList.slice(0, 2),
      featuredVertical: featuredList.slice(2, 4),
      latestPosts: remaining,
    };
  }, [items]);

  const visibleLatestPosts = latestPosts.slice(0, visibleCount);
  const visibleFilteredPosts = filtered.slice(0, visibleCount);

  return (
    <>
      {/* Filter Tags + Search Bar (639:13884) — transparent over black canvas so hero glow blends naturally */}
      <section className="relative px-4 py-6 sm:px-8 lg:px-[84px] lg:py-[40px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col gap-4 md:flex-row md:items-center md:gap-[40px]">
          {/* Horizontal Category Chips Carousel (639:13885) */}
          <div className="relative h-[38px] min-w-0 flex-1 overflow-hidden">
            <div
              ref={tagsScrollRef}
              onScroll={updateScrollButtons}
              role="group"
              aria-label="Filter articles by topic"
              className="flex h-[38px] items-center gap-[5px] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "focus-ring shrink-0 whitespace-nowrap rounded-[99px] border px-[16px] py-[8px] font-sans text-[14px] font-medium leading-[20px] transition-colors",
                      active
                        ? "border-[#5ee878] bg-[#5ee878] text-black"
                        : "border-white/[0.32] bg-black/[0.64] text-white hover:border-white/[0.64]",
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {canScrollLeft && (
              <button
                type="button"
                aria-label="Scroll categories left"
                onClick={() => scrollTags(-260)}
                className="focus-ring absolute left-0 top-0 flex h-[38px] w-[72px] cursor-pointer items-center bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,#000000_57.79%)] pl-[8px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/f3fef.svg"
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="block size-[24px] shrink-0 max-w-none"
                />
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                aria-label="Scroll categories right"
                onClick={() => scrollTags(260)}
                className="focus-ring absolute right-0 top-0 flex h-[38px] w-[72px] cursor-pointer items-center justify-end bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000000_57.79%)] pr-[8px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/f321f.svg"
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="block size-[24px] shrink-0 max-w-none"
                />
              </button>
            )}
          </div>

          {/* Search Box (639:13886) */}
          <label className="relative flex h-[48px] w-full shrink-0 items-center gap-[10px] rounded-[12px] border border-white/[0.32] bg-white px-[16px] py-[8px] transition-shadow focus-within:border-[#5ee878] focus-within:ring-2 focus-within:ring-[#5ee878]/[0.48] md:w-[304px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/figma/0640f.svg"
              width={20}
              height={20}
              aria-hidden="true"
              className="block size-[20px] shrink-0 max-w-none"
            />
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent font-sans text-[14px] font-normal leading-[20px] text-black placeholder:text-black/[0.48] [color-scheme:light] focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query.length > 0 && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => handleQueryChange("")}
                className="focus-ring shrink-0 rounded-full px-1.5 py-0.5 font-sans text-[12px] font-medium text-black/[0.48] transition-colors hover:text-black"
              >
                ×
              </button>
            )}
          </label>
        </div>
      </section>

      {isDefaultView ? (
        <>
          {/* FEATURED Section (639:13889) */}
          <section className="relative z-[1] bg-white px-4 pb-16 pt-10 text-black sm:px-8 lg:px-[84px] lg:pb-[88px] lg:pt-[40px]">
            <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
              <div className="pt-[20px]">
                <h2 className="font-inter text-[40px] font-extrabold uppercase leading-[normal] tracking-[-0.04em] text-black sm:text-[56px] xl:text-[72px] xl:tracking-[-5px]">
                  FEATURED
                </h2>
              </div>

              <div className="flex w-full flex-col gap-[24px] pt-10 lg:pt-[56px]">
                {featuredHorizontal.length > 0 && (
                  <div className="flex w-full flex-col gap-[24px]">
                    {featuredHorizontal.map((post, idx) => (
                      <HorizontalFeaturedCard
                        key={post.slug}
                        post={post}
                        imageRight={idx % 2 === 1}
                      />
                    ))}
                  </div>
                )}

                {featuredVertical.length > 0 && (
                  <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
                    {featuredVertical.map((post) => (
                      <VerticalBlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Inline Conversion Banner (639:13958) */}
          <InlineTrialBanner />

          {/* LATEST POSTS Section (639:13966) */}
          {latestPosts.length > 0 && (
            <section className="relative z-[1] bg-white px-4 pb-16 pt-12 text-black sm:px-8 lg:px-[84px] lg:pb-[88px] lg:pt-[68px]">
              <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
                <div className="pt-[20px]">
                  <h2 className="font-inter text-[40px] font-extrabold uppercase leading-[normal] tracking-[-0.04em] sm:text-[56px] xl:text-[72px] xl:tracking-[-5px]">
                    <span className="text-black">LATEST </span>
                    <span className="text-[#5ee878]">POSTS</span>
                  </h2>
                </div>

                <div className="flex w-full flex-col items-center gap-[24px] pt-10 lg:pt-[56px]">
                  <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
                    {visibleLatestPosts.map((post) => (
                      <VerticalBlogCard key={post.slug} post={post} />
                    ))}
                  </div>

                  {visibleCount < latestPosts.length && (
                    <Button
                      type="button"
                      size="md"
                      variant="primary-dark"
                      onClick={() => setVisibleCount((prev) => prev + LATEST_PAGE_SIZE)}
                      className="px-[48px]"
                    >
                      Load More
                    </Button>
                  )}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          {/* Filtered / Search Results Section */}
          <section className="relative z-[1] bg-white px-4 pb-16 pt-10 text-black sm:px-8 lg:px-[84px] lg:pb-[88px] lg:pt-[40px]">
            <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start">
              <div className="flex w-full flex-wrap items-end justify-between gap-4 pt-[20px]">
                <h2 className="font-inter text-[36px] font-extrabold uppercase leading-[normal] tracking-[-0.04em] text-black sm:text-[56px] xl:text-[72px] xl:tracking-[-5px]">
                  {selectedCategory !== "All" ? (
                    <>
                      <span>{selectedCategory} </span>
                      <span className="text-[#5ee878]">ARTICLES</span>
                    </>
                  ) : (
                    <>
                      <span>SEARCH </span>
                      <span className="text-[#5ee878]">RESULTS</span>
                    </>
                  )}
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setQuery("");
                    setVisibleCount(LATEST_PAGE_SIZE);
                  }}
                  className="focus-ring focus-ring-light rounded-full border border-black/20 px-4 py-2 font-sans text-[13px] font-medium text-black transition-colors hover:border-black"
                >
                  Clear filters
                </button>
              </div>

              {filtered.length === 0 ? (
                <div className="mt-10 w-full rounded-[20px] border border-black/20 bg-white p-10 text-center lg:mt-[56px]">
                  <p className="font-inter text-[24px] font-bold tracking-[-0.312px] text-black">
                    No matching articles
                  </p>
                  <p className="mt-2 font-sans text-[16px] text-black/[0.64]">
                    Try clearing your search or selecting All topics.
                  </p>
                </div>
              ) : (
                <div className="flex w-full flex-col items-center gap-[24px] pt-10 lg:pt-[56px]">
                  <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
                    {visibleFilteredPosts.map((post) => (
                      <VerticalBlogCard key={post.slug} post={post} />
                    ))}
                  </div>

                  {visibleCount < filtered.length && (
                    <Button
                      type="button"
                      size="md"
                      variant="primary-dark"
                      onClick={() => setVisibleCount((prev) => prev + LATEST_PAGE_SIZE)}
                      className="px-[48px]"
                    >
                      Load More
                    </Button>
                  )}
                </div>
              )}
            </div>
          </section>

          <div className="bg-white pb-16 lg:pb-[88px]">
            <InlineTrialBanner />
          </div>
        </>
      )}
    </>
  );
}

function HorizontalFeaturedCard({
  post,
  imageRight = false,
}: {
  post: ContentSummary;
  imageRight?: boolean;
}) {
  const dateText = formatBlogDate(post.date);
  const coverSrc = post.image ?? "/figma/e5d92.png";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "focus-ring focus-ring-light group flex w-full flex-col gap-6 overflow-hidden rounded-[20px] border border-black/20 bg-white p-5 transition-colors hover:border-black/[0.48] sm:p-6 lg:items-center lg:gap-[32px] lg:p-[32px]",
        imageRight ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[16px] sm:h-[280px] lg:h-[320px] lg:w-[440px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={post.title}
          src={coverSrc}
          className="block size-full max-w-none object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start lg:min-h-[320px]">
        <span className="inline-flex items-center justify-center whitespace-nowrap rounded-[99px] border border-[#5ee878]/[0.64] bg-[#5ee878]/[0.32] px-[16px] py-[6px] font-sans text-[14px] font-medium leading-[20px] text-black">
          {post.badge ?? "Sales Management"}
        </span>

        <h3 className="w-full pt-[16px] font-inter text-[24px] font-bold leading-[normal] tracking-[-0.416px] text-black sm:text-[28px] xl:text-[32px]">
          {post.title}
        </h3>

        <div className="flex w-full flex-wrap items-end justify-between gap-2 pt-[16px] font-sans text-[14px] font-normal leading-[20px]">
          <span className="flex flex-wrap items-center gap-[4px] text-black/[0.48]">
            {dateText ? <span>{dateText}</span> : null}
            {post.author ? (
              <span className="inline-flex items-center gap-[4px]">
                <span>by</span>
                <span className="text-black underline decoration-[#5ee878] [text-underline-position:from-font]">
                  {post.author}
                </span>
              </span>
            ) : null}
          </span>
          <span className="text-black/[0.48]">{formatReadTime(post.readingTime)}</span>
        </div>

        {post.summary ? (
          <p className="mt-[24px] line-clamp-5 w-full font-sans text-[16px] font-normal leading-[24px] text-black/[0.64]">
            {post.summary}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

function VerticalBlogCard({ post }: { post: ContentSummary }) {
  const dateText = formatBlogDate(post.date);
  const coverSrc = post.image ?? "/figma/ab892.png";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="focus-ring focus-ring-light group flex w-full flex-col items-start gap-[24px] overflow-hidden rounded-[20px] border border-black/20 bg-white p-[24px] transition-colors hover:border-black/[0.48]"
    >
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[16px] sm:h-[280px] lg:h-[320px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={post.title}
          src={coverSrc}
          className="block size-full max-w-none object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex w-full flex-col items-start">
        <span className="inline-flex items-center justify-center whitespace-nowrap rounded-[99px] border border-[#5ee878]/[0.64] bg-[#5ee878]/[0.32] px-[16px] py-[6px] font-sans text-[14px] font-medium leading-[20px] text-black">
          {post.badge ?? "Sales Management"}
        </span>

        <h3 className="w-full pt-[16px] font-inter text-[22px] font-bold leading-[normal] tracking-[-0.312px] text-black sm:text-[24px]">
          {post.title}
        </h3>

        <div className="flex w-full flex-wrap items-end justify-between gap-2 pt-[16px] font-sans text-[12px] font-normal leading-[18px]">
          <span className="flex flex-wrap items-center gap-[4px] text-black/[0.48]">
            {dateText ? <span>{dateText}</span> : null}
            {post.author ? (
              <span className="inline-flex items-center gap-[4px]">
                <span>by</span>
                <span className="text-black underline decoration-[#5ee878] [text-underline-position:from-font]">
                  {post.author}
                </span>
              </span>
            ) : null}
          </span>
          <span className="text-black/[0.48]">{formatReadTime(post.readingTime)}</span>
        </div>

        {post.summary ? (
          <p className="mt-[20px] line-clamp-3 w-full font-sans text-[16px] font-normal leading-[24px] text-black/[0.64]">
            {post.summary}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

function InlineTrialBanner() {
  return (
    <section className="relative z-[1] w-full bg-white px-4 text-white sm:px-8 lg:px-[84px]">
      <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start justify-between gap-6 rounded-[20px] bg-black p-6 sm:p-[40px] lg:flex-row lg:items-center">
        <div className="flex flex-col items-start">
          <h2 className="font-inter text-[34px] font-extrabold uppercase leading-[normal] tracking-[-0.04em] sm:text-[52px] lg:text-[60px] min-[1360px]:text-[72px] min-[1360px]:tracking-[-5px]">
            <span className="text-white">NEXT LEAD </span>
            <span className="text-[#5ee878]">WON&rsquo;T WAIT.</span>
          </h2>
          <p className="type-body-lg pt-[12px] text-white/[0.64]">
            Start with a free workspace. Invite the team when you are ready.
          </p>
        </div>

        <Button
          href={appUrl("/signup")}
          size="lg"
          variant="primary"
          icon="trailing"
          className="shrink-0"
        >
          Start 14-Day Free Trial
        </Button>
      </div>
    </section>
  );
}
