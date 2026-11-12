import Link from "next/link";
import { appUrl } from "@/lib/config";
import { PageHero } from "@/components/site/PageHero";
import { Accent, HomeButton, HomeSection } from "@/components/site/primitives";
import { FeatherArrowUpRight } from "@/components/site/icons";

const LINKS = [
  { href: "/features", label: "Product features", body: "Everything Ridhzo does, from capture to dashboards." },
  { href: "/pricing", label: "Pricing", body: "Start free, then pick the plan that fits your team." },
  { href: "/help", label: "Help Center", body: "Answers for getting started and billing." },
  { href: "/contact", label: "Contact us", body: "Talk to the team on WhatsApp or email." },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="404 · PAGE NOT FOUND"
        title={
          <>
            THIS PAGE WENT <Accent>COLD.</Accent>
          </>
        }
        description="The page you're looking for doesn't exist or has moved. Here are some places to pick things back up."
        actions={
          <>
            <HomeButton href="/" variant="secondary-outline">
              Back to Home
            </HomeButton>
            <HomeButton href={appUrl("/signup")} variant="primary">
              Start 14-Day Free Trial
            </HomeButton>
          </>
        }
      />
      <HomeSection theme="light">
        <ul className="mx-auto grid max-w-[1000px] gap-6 sm:grid-cols-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="focus-ring focus-ring-light group flex h-full items-start justify-between gap-4 rounded-[16px] border border-black/20 bg-white p-6 transition-colors hover:border-black/[0.48] sm:p-8"
              >
                <span>
                  <span className="type-h4 block text-black">
                    {l.label}
                  </span>
                  <span className="type-body-sm mt-2 block text-black/[0.64]">
                    {l.body}
                  </span>
                </span>
                <FeatherArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-black/[0.48] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
              </Link>
            </li>
          ))}
        </ul>
      </HomeSection>
    </>
  );
}
