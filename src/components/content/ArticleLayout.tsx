import Link from "next/link";
import type { ContentItem, ContentSummary } from "@/lib/content";
import { CONTENT_ROUTES } from "@/lib/content-routes";
import { appUrl, SITE_URL } from "@/lib/config";
import { formatDate, stripEmoji } from "@/lib/utils";
import { ArticleSidebar } from "./ArticleSidebar";

/**
 * Pixel-accurate implementation of Figma `Full Blog` (`639:14125`):
 * - Black header band (`639:14130`) with left ambient glow, breadcrumbs, Inter ExtraBold H1 & metadata row
 * - White editorial two-column section (`639:14156`) with cover image, formatted body prose & sidebar
 * - Closing black CTA band (`639:14250`, "DON'T LET THE NEXT ONE WAIT.")
 */
export function ArticleLayout({ item, related = [] }: { item: ContentItem; related?: ContentSummary[] }) {
  const route = CONTENT_ROUTES[item.type];
  const canonicalUrl = `${SITE_URL}${route.path}/${item.slug}`;
  const isResourceRoute = item.type === "blog" || item.type === "how-to" || item.type === "help";
  const badgeLabel = item.badge ? stripEmoji(item.badge) : undefined;
  const readTimeLabel = `${item.readingTime} ${item.readingTime === 1 ? "min" : "mins"} read`;

  return (
    <div className="relative z-[1] bg-black">
      {/* Section 1: Black Header Band (639:14130) */}
      <header className="relative overflow-hidden bg-black px-4 py-12 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
        {/* Ambient green glow on left (639:14131, Background 6) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-220px] top-[40px] flex h-[634.413px] w-[426.404px] items-center justify-center lg:left-[calc(50%-918px)] lg:top-[95px]"
        >
          <div className="flex-none rotate-[-18.88deg]">
            <div className="relative h-[584.755px] w-[250.689px]">
              <div className="absolute inset-[-54.72%_-127.65%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/5f712.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-start">
          {/* Breadcrumbs (639:14133) */}
          <nav aria-label="Breadcrumb" className="w-full border-b border-white/[0.08] pb-5 lg:pb-[24px]">
            <ol className="flex flex-wrap items-center gap-[2px] font-sans text-[12px] font-normal leading-[18px]">
              <li>
                <Link
                  href="/"
                  className="focus-ring rounded-sm text-white/[0.48] transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              {isResourceRoute && (
                <li className="inline-flex items-center gap-[2px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src="/figma/24d5d.svg"
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="block size-[16px] shrink-0 max-w-none"
                  />
                  <span className="text-white/[0.48]">Resources</span>
                </li>
              )}

              <li className="inline-flex items-center gap-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/24d5d.svg"
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="block size-[16px] shrink-0 max-w-none"
                />
                <Link
                  href={route.path}
                  className="focus-ring rounded-sm text-white/[0.48] transition-colors hover:text-white"
                >
                  {route.label}
                </Link>
              </li>

              <li className="inline-flex items-center gap-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/24d5d.svg"
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="block size-[16px] shrink-0 max-w-none"
                />
                <span aria-current="page" className="font-medium text-[#5ee878]">
                  {item.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Heading 1 + Meta Row (639:14142) */}
          <div className="flex w-full flex-col items-start pt-[32px]">
            <h1 className="w-full font-inter text-[34px] font-extrabold uppercase leading-[normal] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[72px] lg:tracking-[-5px]">
              {item.title}
            </h1>

            <div className="flex w-full flex-wrap items-end gap-x-[24px] gap-y-3 pt-[32px] font-sans text-[14px] font-normal leading-[20px]">
              {item.author ? (
                <span className="inline-flex items-center gap-[4px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src="/figma/adf4d.svg"
                    width={20}
                    height={20}
                    aria-hidden="true"
                    className="block size-[20px] shrink-0 max-w-none"
                  />
                  <span className="text-white underline [text-underline-position:from-font]">
                    {item.author}
                  </span>
                </span>
              ) : null}

              {item.date ? (
                <span className="inline-flex items-center gap-[4px] text-white/[0.64]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src="/figma/2c364.svg"
                    width={20}
                    height={20}
                    aria-hidden="true"
                    className="block size-[20px] shrink-0 max-w-none"
                  />
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </span>
              ) : null}

              <span className="inline-flex items-center gap-[4px] text-white/[0.64]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/c8d9b.svg"
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="block size-[20px] shrink-0 max-w-none"
                />
                <span>{readTimeLabel}</span>
              </span>

              {badgeLabel ? <span className="text-[#5ee878]">{badgeLabel}</span> : null}

              {item.type !== "blog" && item.keyMetric ? (
                <span className="rounded-full border border-[#5ee878]/60 bg-[#5ee878]/20 px-3 py-0.5 text-[12px] font-medium text-[#5ee878]">
                  {item.keyMetric}
                </span>
              ) : null}

              {item.type !== "blog" && item.targetAudience ? (
                <span className="text-white/[0.64]">For {item.targetAudience}</span>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* Section 2: White Two-Column Editorial Section (639:14156) */}
      <section className="relative z-[1] bg-white px-4 pb-16 pt-8 text-black sm:px-8 lg:px-[84px] lg:pb-[88px] lg:pt-[40px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start gap-[32px] lg:flex-row">
          {/* Left Article Column (639:14158) */}
          <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[24px]">
            {item.image ? (
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[12px] sm:h-[340px] lg:h-[448px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={item.title}
                  src={item.image}
                  className="block size-full max-w-none object-cover object-top"
                />
              </div>
            ) : null}

            <article
              className={[
                "w-full min-w-0 font-sans text-[16px] font-normal leading-[24px] text-black/[0.64]",
                "[&_p]:mb-[24px] [&_p:has(+h3)]:mb-[16px] [&_p:last-child]:mb-0 [&_p]:text-[16px] [&_p]:leading-[24px] [&_p]:text-black/[0.64]",
                "[&_h2]:mb-[16px] [&_h2]:mt-[24px] [&_h2:first-child]:mt-0 [&_h2]:scroll-mt-28 [&_h2]:font-inter [&_h2]:text-[22px] sm:[&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:leading-[normal] [&_h2]:tracking-[-0.312px] [&_h2]:text-black",
                "[&_h3]:mb-[8px] [&_h3]:mt-[16px] [&_h3:first-child]:mt-0 [&_h3]:scroll-mt-28 [&_h3]:font-inter [&_h3]:text-[18px] sm:[&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:leading-[normal] [&_h3]:tracking-[-0.26px] [&_h3]:text-black",
                "[&_ul]:my-[24px] [&_ul]:list-disc [&_ul]:pl-[24px] [&_h2+ul]:mt-0 [&_h3+ul]:mt-0 [&_ul:last-child]:mb-0",
                "[&_ol]:my-[24px] [&_ol]:list-decimal [&_ol]:pl-[24px] [&_h2+ol]:mt-0 [&_h3+ol]:mt-0 [&_ol:last-child]:mb-0",
                "[&_li]:my-0 [&_li]:text-[16px] [&_li]:leading-[24px] [&_li]:text-black/[0.64] [&_li::marker]:text-black/[0.64] [&_li>p]:mb-0",
                "[&_img]:my-[24px] [&_img:first-child]:mt-0 [&_img:last-child]:mb-0 [&_img]:h-[220px] sm:[&_img]:h-[300px] lg:[&_img]:h-[376px] [&_img]:w-full [&_img]:max-w-none [&_img]:rounded-[12px] [&_img]:object-cover",
                "[&_strong]:font-semibold [&_strong]:text-black",
                "[&_a]:font-medium [&_a]:text-black [&_a]:underline [&_a]:decoration-[#5ee878] [&_a]:underline-offset-4 hover:[&_a]:decoration-black",
                "[&_blockquote]:my-[24px] [&_blockquote:last-child]:mb-0 [&_blockquote]:border-l-2 [&_blockquote]:border-[#5ee878] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-black/80",
                "[&_code]:rounded [&_code]:bg-black/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[14px] [&_code]:text-black [&_pre_code]:bg-transparent [&_pre_code]:p-0",
                "[&_pre]:my-[24px] [&_pre:last-child]:mb-0 [&_pre]:overflow-x-auto [&_pre]:rounded-[10px] [&_pre]:bg-black/[0.05] [&_pre]:p-4",
                "[&_table]:my-[24px] [&_table:last-child]:mb-0 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-[8px] [&_table]:border [&_table]:border-black/15 [&_table]:text-left [&_table]:text-[14px] [&_th]:bg-black/[0.04] [&_th]:px-4 [&_th]:py-2.5 [&_th]:font-semibold [&_th]:text-black [&_td]:border-t [&_td]:border-black/10 [&_td]:px-4 [&_td]:py-2.5 [&_td]:text-black/[0.64]",
              ].join(" ")}
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          </div>

          {/* Right Sidebar (639:14183) */}
          <ArticleSidebar
            headings={item.headings}
            canonicalUrl={canonicalUrl}
            title={item.title}
            related={related}
            contentType={item.type}
            routeLabel={route.label}
          />
        </div>
      </section>

      {/* Section 3: Closing CTA (639:14250) */}
      <section className="relative z-[1] overflow-hidden bg-black px-4 py-16 text-white sm:px-8 lg:px-[84px] lg:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1272px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[920px] font-inter text-[44px] font-black uppercase leading-[1.06] sm:text-[84px] lg:text-[112px] lg:leading-[normal]">
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">
              DON&apos;T LET
            </span>
            <span className="block tracking-[-0.045em] text-white lg:tracking-[-5px]">
              THE NEXT
            </span>
            <span className="text-outline-white block tracking-normal">ONE WAIT.</span>
          </h2>

          <div className="flex w-full max-w-[504px] flex-col items-start gap-[24px] pb-[12px] lg:pl-[90px]">
            <span className="relative size-[75px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/c17ed.svg" width={75} height={75} className="block size-full max-w-none" />
            </span>

            <p className="w-full max-w-[414px] pt-[8px] font-inter text-[22px] font-medium leading-[34px] tracking-[-1.1px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.3px]">
              Your next enquiry could be your next{" "}
              <span className="italic text-[#5ee878]">big customer</span>. Be ready when it{" "}
              <span className="italic text-[#5ee878]">lands</span>.
            </p>

            <Link
              href={appUrl("/signup")}
              className="focus-ring inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[14px] border border-white bg-white px-[24px] font-sans text-[14px] font-medium leading-[20px] text-black transition-colors hover:bg-white/90"
            >
              Start 14-Day Free Trial
              <span className="relative size-[24px] shrink-0" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/1ef4f.svg" width={24} height={24} className="block size-full max-w-none" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
