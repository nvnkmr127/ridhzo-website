import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { appUrl } from "@/lib/config";
import { PageHero } from "@/components/site/PageHero";
import { Accent, HomeButton, HomeSection, PageGlows } from "@/components/site/primitives";

const LINKS = [
  { href: "/features", label: "Product features", body: "Everything Ridhzo does, from capture to dashboards." },
  { href: "/pricing", label: "Pricing", body: "Start free, then pick the plan that fits your team." },
  { href: "/help", label: "Help Center", body: "Answers for getting started and billing." },
  { href: "/contact", label: "Contact us", body: "Talk to the team on WhatsApp or email." },
];

export default function NotFound() {
  return (
    <div className="relative">
      <PageGlows />
      <PageHero
        align="center"
        eyebrow="404"
        title={
          <>
            This page went <Accent>cold.</Accent>
          </>
        }
        lead="The page you're looking for doesn't exist or has moved. Here are some places to pick things back up."
      >
        <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
          <HomeButton href="/" variant="secondary">
            Back to Home
          </HomeButton>
          <HomeButton href={appUrl("/signup")}>Start Free</HomeButton>
        </div>
      </PageHero>
      <HomeSection className="pt-0 sm:pt-0">
        <ul className="mx-auto grid max-w-[1000px] gap-6 sm:grid-cols-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="focus-ring group flex h-full items-start justify-between gap-4 rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition-colors hover:border-highlight/40 hover:bg-white/[0.07]"
              >
                <span>
                  <span className="block text-lg font-semibold text-white">{l.label}</span>
                  <span className="mt-1 block text-sm text-white/65">{l.body}</span>
                </span>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/50 group-hover:text-highlight" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </HomeSection>
    </div>
  );
}
