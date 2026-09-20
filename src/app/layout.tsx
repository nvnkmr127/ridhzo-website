import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MarketingNavbar } from "@/components/marketing/MarketingNavbar";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  viewportFit: "cover",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ridhzo — Mobile-First Lead Management CRM for Fast Closers",
  description:
    "Capture leads instantly from Meta Ads, Google and Web forms, get vibrating mobile push alerts, track deals on a visual Kanban, and contact prospects in seconds—even offline.",
  openGraph: {
    title: "Ridhzo — The 1-Tap Mobile CRM for Fast Closers",
    description:
      "Capture leads instantly from all channels, receive vibrating mobile alerts, follow up in seconds via WhatsApp, and manage your entire sales pipeline offline.",
    url: "https://ridhzo.com",
    siteName: "Ridhzo",
    type: "website",
  },
  alternates: {
    canonical: "https://ridhzo.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
        <MarketingNavbar />
        <main className="flex-1">{children}</main>
        <MarketingFooter />
      </body>
    </html>
  );
}

