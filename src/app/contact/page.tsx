import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/site/PageHero";
import { Accent, PageGlows } from "@/components/site/primitives";
import { ContactUsSection } from "@/components/marketing/ContactUsSection";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with the Ridhzo team on WhatsApp, by email, or through the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative">
      <PageGlows />
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Talk to the Ridhzo <Accent>team.</Accent>
          </>
        }
        lead="Have a question about features, need help connecting your ad account, or want a quick demo? Message us on WhatsApp, email us, or send the form below."
      />
      <ContactUsSection />
    </div>
  );
}
