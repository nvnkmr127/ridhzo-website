import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { SiteCta } from "@/components/site/SiteCta";
import { ContactUsSection } from "@/components/marketing/ContactUsSection";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with the Ridhzo team on WhatsApp, by email, or through the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Section 1: Contact Hero (Figma 650:16123) — isolate on section so TALK blends only with hero bg + glow */}
      <section className="relative z-[1] isolate overflow-hidden bg-black px-4 py-14 text-white [font-feature-settings:normal] sm:px-8 lg:px-[84px] lg:py-[80px]">
        {/* Centered-bottom ambient green glow (650:16124) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[280px] flex h-[630.572px] w-[401.038px] -translate-x-1/2 items-center justify-center lg:left-[calc(50%-184px)] lg:top-[345px] lg:translate-x-0"
        >
          <div className="flex-none rotate-[78.77deg]">
            <div className="relative h-[292.781px] w-[584.755px]">
              <div className="absolute inset-[-109.3%_-54.72%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/figma/7257b.svg"
                  width={1225}
                  height={933}
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1272px]">
          {/* Breadcrumbs (650:16126) */}
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
                <span aria-current="page" className="font-medium text-[#5ee878]">
                  Contact
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow + Display H1 (650:16131) */}
          <div className="pt-[32px]">
            <div className="flex items-center gap-[20px]">
              <span
                aria-hidden="true"
                className="relative flex size-[10px] shrink-0 items-center justify-center"
              >
                <span className="absolute -inset-[8px] rounded-full bg-[#5ee878]/[0.32]" />
                <span className="relative size-[10px] rounded-full bg-[#5ee878]" />
              </span>
              <span className="font-sans text-[12px] font-normal leading-[18px] text-[#5ee878]">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="flex flex-wrap items-start gap-[8px] pt-[32px] font-inter text-[48px] font-black uppercase leading-[1.06] tracking-[-0.045em] sm:text-[72px] lg:text-[96px] lg:leading-[normal] lg:tracking-[-5px]">
              <span className="whitespace-nowrap text-white">
                LE<span className="tracking-normal">T</span>
                <svg
                  aria-hidden="true"
                  viewBox="164.514 0.954552 16.773 25.77275"
                  className="mb-[0.4588em] ml-[-0.0148em] mr-[-0.0069em] inline-block h-[0.2685em] w-[0.1747em] align-baseline fill-current"
                >
                  <path d="M181.287 0.954552V9.13637C181.287 11.3636 180.832 13.5909 179.923 15.8182C179.037 18.0227 177.901 20.0796 176.514 21.9886C175.151 23.875 173.741 25.4546 172.287 26.7273L164.514 22.7727C165.469 21.1364 166.321 19.2386 167.071 17.0796C167.821 14.9205 168.196 12.2727 168.196 9.13637V0.954552H181.287Z" />
                </svg>
                <span className="sr-only">&rsquo;</span>
                <span className="tracking-normal">S</span>
              </span>
              <span className="tracking-[-0.045em] [color:#000000] [-webkit-text-fill-color:#000000] [-webkit-text-stroke:2.2px_#ffffff] [paint-order:stroke_fill] mix-blend-lighten sm:[-webkit-text-stroke:2.5px_#ffffff] lg:tracking-[-5px]">
                TALK
              </span>
            </h1>
          </div>

          {/* Bottom Split Copy (650:16141) */}
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end lg:gap-0">
            <div className="pt-10 lg:w-[696px] lg:shrink-0 lg:pt-[72px]">
              <p className="font-sans text-[18px] font-semibold leading-[26px] tracking-[-0.27px] text-white sm:text-[20px] sm:leading-[28px] sm:tracking-[-0.3px]">
                Need help with lead sources, team setup, pricing or a product walkthrough? Reach the Ridhzo team directly.
              </p>
            </div>
            <div className="w-full border-t border-white/20 pt-[20px] lg:w-[486.406px] lg:shrink-0">
              <p className="font-sans text-[16px] font-normal leading-[24px] text-white/[0.64] lg:w-[487px]">
                Exploring Ridhzo, planning a rollout or looking for help? Tell us what you need so the conversation starts in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSection />
      <SiteCta borderTop={false} />
    </>
  );
}
