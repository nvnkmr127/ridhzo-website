import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { SiteCta } from "@/components/site/SiteCta";
import { Accent, PageGlows } from "@/components/site/primitives";
import { AboutUsSection } from "@/components/marketing/AboutUsSection";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Why we built Ridhzo: a mobile-first lead CRM for fast closers who work on their phones.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="relative">
      <PageGlows />
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Why we built <Accent>Ridhzo.</Accent>
          </>
        }
        lead="Old CRMs were built for managers sitting at big desks. We built Ridhzo for salespeople who work on their phones and close deals on WhatsApp."
      />
      <AboutUsSection />
      <SiteCta secondary={{ href: "/contact", label: "Talk to Us" }} />
    </div>
  );
}
