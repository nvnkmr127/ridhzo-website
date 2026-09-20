import { AboutUsSection } from "@/components/marketing/AboutUsSection";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Ridhzo CRM",
  description: "Why we built Ridhzo: a mobile-first lead CRM built for fast closers who work on their phones.",
};

export default function AboutPage() {
  return (
    <>
      <AboutUsSection />
      <CtaBanner />
    </>
  );
}
