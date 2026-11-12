import Link from "next/link";
import type { ContentItem } from "@/lib/content";
import { formatDate, stripEmoji } from "@/lib/utils";
import { SiteCta } from "@/components/site/SiteCta";
import { HowToTocSidebar } from "./HowToTocSidebar";

interface HowToDetailViewProps {
  item: ContentItem;
}

/**
 * Strips a duplicated top-level H1 heading rendered inside markdown body HTML
 * so the guide title only renders once in the hero header.
 */
function stripLeadingH1(html: string): string {
  return html.replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, "");
}

/**
 * Pixel-matched How-to guide detail page view (Figma 682:27086) bound to real
 * markdown guide items from `content/how-to/*.md`.
 */
export function HowToDetailView({ item }: HowToDetailViewProps) {
  const cleanBadge = item.badge ? stripEmoji(item.badge) : "";
  const formattedDate = item.date ? formatDate(item.date, "long") : "";
  const bodyHtml = stripLeadingH1(item.html);
  const sectionLabel = item.stepCount
    ? `${item.stepCount}-STEP GUIDE`
    : cleanBadge
      ? cleanBadge.toUpperCase()
      : "HOW-TO GUIDE";
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/features" },
    { label: "How-to guides", href: "/how-to" },
  ];

  return (
    <div className="bg-black text-white [font-feature-settings:normal]">
      {/* Dark Hero Section (Figma 682:27091) */}
      <section className="relative isolate overflow-hidden bg-black">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-198px] top-[95px] z-0 flex h-[634.413px] w-[426.404px] items-center justify-center min-[1440px]:left-[calc(50%-918px)]"
        >
          <div className="flex-none rotate-[-18.88deg]">
            <div className="relative h-[584.755px] w-[250.689px]">
              <div className="absolute inset-[-54.72%_-127.65%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/figma/e0d40.svg"
                  alt=""
                  className="block h-full w-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[24px] py-[56px] sm:px-[48px] lg:px-[84px] lg:py-[80px]">
          <nav
            aria-label="Breadcrumb"
            className="border-b border-white/[0.08] pb-[24px]"
          >
            <ol className="flex flex-wrap items-center gap-[2px] text-[12px] leading-[18px]">
              {breadcrumbs.map((crumb) => (
                <li key={crumb.href} className="inline-flex items-center gap-[2px]">
                  <Link
                    href={crumb.href}
                    className="text-white/[0.48] transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/figma/24d5d.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="block h-[16px] w-[16px] shrink-0 max-w-none"
                  />
                </li>
              ))}
              <li aria-current="page" className="font-medium text-[#5ee878]">
                {item.title}
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start pt-[32px]">
            <h1 className="w-full font-inter text-[36px] font-extrabold uppercase leading-[normal] tracking-[-2px] text-white sm:text-[52px] sm:tracking-[-3.5px] lg:text-[72px] lg:tracking-[-5px]">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-end gap-x-[24px] gap-y-[12px] pt-[32px] font-sans text-[14px] leading-[20px]">
              {item.author && (
                <div className="flex items-center gap-[4px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/figma/adf4d.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden="true"
                    className="h-[20px] w-[20px] shrink-0"
                  />
                  <span className="text-white underline decoration-from-font [text-underline-position:from-font]">
                    {item.author}
                  </span>
                </div>
              )}

              {formattedDate && (
                <div className="flex items-center gap-[4px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/figma/2c364.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden="true"
                    className="h-[20px] w-[20px] shrink-0"
                  />
                  <time dateTime={item.date} className="text-white/[0.64]">
                    {formattedDate}
                  </time>
                </div>
              )}

              <div className="flex items-center gap-[4px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/figma/c8d9b.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="h-[20px] w-[20px] shrink-0"
                />
                <span className="text-white/[0.64]">
                  {item.readingTime} min read
                </span>
              </div>

              {cleanBadge && (
                <span className="text-[#5ee878]">{cleanBadge}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column White Guide Body (Figma 682:27117) */}
      <section className="w-full bg-white pb-[88px] pt-[40px] text-black">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[32px] px-[24px] sm:px-[48px] lg:flex-row lg:px-[84px]">
          <HowToTocSidebar headings={item.headings} />

          <div className="flex min-w-0 w-full flex-1 flex-col items-start gap-[24px]">
            <p className="font-sans text-[14px] font-normal leading-[20px] text-black/[0.64]">
              {sectionLabel}
            </p>

            <article
              className="w-full font-sans text-[16px] font-normal leading-[32px] text-black/[0.64] [&_a]:font-medium [&_a]:text-[#111] [&_a]:underline [&_a]:decoration-[#5ee878] [&_a]:decoration-2 [&_a]:underline-offset-4 hover:[&_a]:text-black [&_blockquote]:mb-[16px] [&_blockquote]:border-l-2 [&_blockquote]:border-[#5ee878] [&_blockquote]:bg-[#5ee878]/[0.12] [&_blockquote]:px-[13px] [&_blockquote]:py-[20px] [&_blockquote]:font-sans [&_blockquote]:text-[14px] [&_blockquote]:font-normal [&_blockquote]:not-italic [&_blockquote]:leading-[20px] [&_blockquote]:text-black/[0.64] [&_blockquote_p]:mb-[12px] [&_blockquote_p]:text-[14px] [&_blockquote_p]:leading-[20px] [&_blockquote_p:last-child]:mb-0 [&_blockquote_strong]:font-semibold [&_blockquote_strong]:text-black [&_code]:rounded-[4px] [&_code]:bg-black/[0.06] [&_code]:px-[6px] [&_code]:py-[1px] [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-[#111] [&_em]:italic [&_h2]:mb-[16px] [&_h2]:mt-[24px] [&_h2]:scroll-mt-[112px] [&_h2]:font-inter [&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:leading-[normal] [&_h2]:tracking-[-0.312px] [&_h2]:text-black first:[&_h2]:mt-0 [&_h3]:mb-[8px] [&_h3]:mt-[20px] [&_h3]:font-inter [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:leading-[normal] [&_h3]:tracking-[-0.2px] [&_h3]:text-black [&_hr]:my-[24px] [&_hr]:border-black/10 [&_img]:my-[16px] [&_img]:rounded-[12px] [&_img]:border [&_img]:border-black/10 [&_li]:ms-[24px] [&_li]:leading-[32px] [&_ol]:mb-[16px] [&_ol]:list-decimal [&_ol]:pl-0 [&_ol:last-child]:mb-0 [&_p]:mb-[16px] [&_p]:leading-[32px] [&_p+ol]:-mt-[16px] [&_p+ul]:-mt-[16px] [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-[#111] [&_ul]:mb-[16px] [&_ul]:list-disc [&_ul]:pl-0 [&_ul:last-child]:mb-0 [&>blockquote:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>
      </section>

      <SiteCta borderTop={false} />
    </div>
  );
}
