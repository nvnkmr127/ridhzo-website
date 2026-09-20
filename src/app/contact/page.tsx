import { ContactUsSection } from "@/components/marketing/ContactUsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Ridhzo CRM",
  description: "Get in touch with the Ridhzo team via WhatsApp, email, or direct contact form.",
};

export default function ContactPage() {
  return (
    <>
      <ContactUsSection />
    </>
  );
}
