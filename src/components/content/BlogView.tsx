import Link from "next/link";
import type { ContentSummary } from "@/lib/content";
import { appUrl } from "@/lib/config";
import { Button } from "@/components/site/Button";
import { BlogCatalog } from "./BlogCatalog";

const HERO_OUTLINE_CLS =
  "[color:#000000] [-webkit-text-fill-color:#000000] [-webkit-text-stroke:1.8px_#ffffff] [paint-order:stroke_fill] mix-blend-lighten sm:[-webkit-text-stroke:2.2px_#ffffff] xl:[-webkit-text-stroke:2.5px_#ffffff]";

/**
 * Pixel-accurate implementation of Figma `Blogs` (`639:13852`):
 * Hero ("DISCOVER THE LATEST TRENDS, NEWS AND UPDATES") -> Interactive Tags & Search (`BlogCatalog`)
 * -> Featured (2 horizontal alternating + 2 vertical) -> Inline CTA ("NEXT LEAD WON'T WAIT.")
 * -> Latest Posts (2-col grid + Load More) -> Closing CTA ("DON'T LET THE NEXT ONE WAIT.").
 */
export function BlogView({ items }: { items: ContentSummary[] }) {
  return (
    <div className="relative z-[1] overflow-x-clip bg-black">
      {/* Section 1: Hero (639:13857) — no vertical overflow clip or inner z-index so glow & blend match Figma */}
      <section className="relative bg-black px-4 pb-[40px] pt-12 text-white sm:px-8 lg:px-[84px] lg:pt-[80px]">
        {/* Ambient green glow (639:13858, Background 6) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[60%] top-[40px] flex h-[634.413px] w-[426.404px] items-center justify-center lg:left-[calc(50%+397px)] lg:top-[112.83px]"
        >
          <div className="flex-none rotate-[-18.88deg]">
            <div className="relative h-[584.755px] w-[250.689px]">
              <div className="absolute inset-[-54.72%_-127.65%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/e0d40.svg" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1272px] flex-col items-start">
          {/* Breadcrumbs (639:13861) */}
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
                  Blog
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow + Display Heading (639:13868) */}
          <div className="flex w-full flex-col items-start pt-[32px]">
            <div className="flex items-center gap-4 sm:gap-[20px]">
              <span
                aria-hidden="true"
                className="-my-[4px] flex size-[26px] shrink-0 items-center justify-center rounded-full bg-[#5ee878]/[0.32]"
              >
                <span className="size-[10px] rounded-full bg-[#5ee878]" />
              </span>
              <span className="type-label text-[#5ee878]">
                READ / LEARN / DECIDE
              </span>
            </div>

            <h1 className="flex w-full flex-wrap items-start gap-[6px] pt-[32px] font-inter text-[40px] font-black uppercase leading-[normal] tracking-[-0.045em] sm:text-[60px] lg:text-[72px] lg:tracking-[-3.5px] xl:text-[96px] xl:tracking-[-5px]">
              <span className="text-white">DISCOVER THE LATEST</span>
              <span className="inline-flex items-start">
                <span className={HERO_OUTLINE_CLS}>TRENDS</span>
                <span className="text-white">,</span>
              </span>
              <span className={HERO_OUTLINE_CLS}>NEWS</span>
              <span className="text-white">AND</span>
              <span className={HERO_OUTLINE_CLS}>UPDATES</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Interactive Tags, Search, Featured, Inline Banner & Latest Posts */}
      <BlogCatalog items={items} />

      {/* Closing CTA Section (639:14111) */}
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

          <div className="flex w-full max-w-[510px] flex-col items-start gap-[24px] pb-[12px] lg:pl-[90px]">
            <span className="relative size-[75px] shrink-0" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/figma/c17ed.svg" width={75} height={75} className="block size-full max-w-none" />
            </span>

            <p className="w-full max-w-[414px] pt-[8px] font-inter text-[22px] font-medium leading-[34px] tracking-[-1.1px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.3px]">
              Your next enquiry could be your next{" "}
              <span className="italic text-[#5ee878]">big customer</span>. Be ready when it{" "}
              <span className="italic text-[#5ee878]">lands</span>.
            </p>

            <Button href={appUrl("/signup")} size="lg" variant="primary" icon="trailing">
              Start 14-Day Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

