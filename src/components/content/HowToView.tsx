import Link from "next/link";
import type { ContentSummary } from "@/lib/content";
import { appUrl } from "@/lib/config";
import { Button } from "@/components/site/Button";
import { SiteCta } from "@/components/site/SiteCta";
import { ContentCard } from "./ContentCard";

/**
 * Pixel-accurate implementation of Figma `How-to guides-List` (`682:25909`):
 * Hero ("SMALL STEPS. REAL PROGRESS." with bottom-left glow & right-aligned trial CTA)
 * -> White 2-column How-To cards section (`682:25938`) bound to `content/how-to/*.md`
 * -> Closing CTA ("DON'T LET THE NEXT ONE WAIT.", `682:26312`).
 */
export function HowToView({ items }: { items: ContentSummary[] }) {
  return (
    <>
      {/* Section 1: How-to Hero (Figma 682:25914) — isolate on section so outlined text blends with hero glow */}
      <section className="relative z-[1] isolate overflow-hidden bg-black px-4 py-14 text-white [font-feature-settings:normal] sm:px-8 lg:px-[84px] lg:py-[80px]">
        {/* Bottom-left ambient green glow (682:25937, Ellipse 2) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-126px] top-[205px] flex h-[618.719px] w-[341.331px] items-center justify-center min-[1440px]:left-[calc(50%-846px)]"
        >
          <div className="flex-none rotate-[78.77deg]">
            <div className="relative h-[231.909px] w-[584.755px]">
              <div className="absolute inset-[-137.98%_-54.72%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/01aa9.svg"
                  width={1225}
                  height={872}
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1272px]">
          {/* Breadcrumbs (682:25916) */}
          <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] pb-5 lg:pb-[24px]">
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
                <Link
                  href="/features"
                  className="focus-ring rounded-sm text-white/[0.48] transition-colors hover:text-white"
                >
                  Product
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
                  How-to guides
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero Split Row (682:25923) */}
          <div className="flex flex-col items-start justify-between gap-10 pt-[32px] lg:flex-row lg:items-end lg:gap-0">
            <div className="w-full lg:w-[651px] lg:shrink-0">
              <div className="flex items-center gap-[20px]">
                <span
                  aria-hidden="true"
                  className="relative flex size-[10px] shrink-0 items-center justify-center"
                >
                  <span className="absolute -inset-[8px] rounded-full bg-[#5ee878]/[0.32]" />
                  <span className="relative size-[10px] rounded-full bg-[#5ee878]" />
                </span>
                <span className="font-sans text-[12px] font-normal leading-[18px] text-[#5ee878]">
                  THE RIDHZO TOOLKIT
                </span>
              </div>

              <h1 className="pt-[32px] font-inter text-[48px] font-black uppercase leading-[1.06] tracking-[-0.045em] sm:text-[72px] lg:text-[96px] lg:leading-[normal] lg:tracking-[-5px]">
                <span className="block text-white lg:whitespace-nowrap">SMALL STEPS.</span>
                <span className="block tracking-[-0.045em] [color:#000000] [-webkit-text-fill-color:#000000] [-webkit-text-stroke:2.2px_#ffffff] [paint-order:stroke_fill] mix-blend-lighten sm:[-webkit-text-stroke:2.5px_#ffffff] lg:tracking-[-5px]">
                  REAL
                  <br />
                  PROGRESS.
                </span>
              </h1>
            </div>

            <div className="flex w-full flex-col items-start gap-[24px] pb-[12px] lg:w-[570px] lg:shrink-0 lg:pl-[90px]">
              <div className="w-full pt-[8px] lg:w-[480px]">
                <p className="font-inter text-[22px] font-medium leading-[34px] tracking-[-1.1px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.3px]">
                  Clear instructions for the moments that matter. Follow one complete{" "}
                  <span className="italic text-[#5ee878]">walkthrough</span> or{" "}
                  <span className="italic text-[#5ee878]">jump directly</span> to the step you need.
                </p>
              </div>

              <Button href={appUrl("/signup")} size="lg" variant="primary" icon="trailing">
                Start 14-Day Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Guides Grid (Figma 682:25938) */}
      <section className="relative z-[1] bg-white px-4 py-16 text-black [font-feature-settings:normal] sm:px-8 lg:px-[84px] lg:py-[88px]">
        <div className="mx-auto w-full max-w-[1272px]">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
              {items.map((item) => (
                <ContentCard
                  key={item.slug}
                  item={item}
                  headingLevel="h2"
                  surface="light"
                  variant="howto"
                />
              ))}
            </div>
          ) : (
            <p className="font-sans text-[16px] leading-[24px] text-black/[0.64]">
              No guides published yet.
            </p>
          )}
        </div>
      </section>

      {/* Section 3: Closing CTA (Figma 682:26312) */}
      <SiteCta borderTop={false} />
    </>
  );
}

