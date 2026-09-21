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
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ridhzo.com"),
  title: {
    default: "Ridhzo — Mobile-First Lead Management CRM for Fast Closers",
    template: "%s — Ridhzo CRM",
  },
  description:
    "Capture leads instantly from Meta Ads, Google and Web forms, get vibrating mobile push alerts, track deals on a visual Kanban, and contact prospects in seconds—even offline.",
  applicationName: "Ridhzo",
  keywords: [
    "lead management CRM",
    "speed to lead",
    "WhatsApp CRM",
    "Meta Lead Ads",
    "mobile CRM",
    "sales pipeline",
    "PWA CRM",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/fav.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/fav.png", sizes: "180x180" },
      { url: "/icon-192.png", sizes: "192x192" },
    ],
  },
  openGraph: {
    title: "Ridhzo — The 1-Tap Mobile CRM for Fast Closers",
    description:
      "Capture leads instantly from all channels, receive vibrating mobile alerts, follow up in seconds via WhatsApp, and manage your entire sales pipeline offline.",
    url: "https://ridhzo.com",
    siteName: "Ridhzo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridhzo — The 1-Tap Mobile CRM for Fast Closers",
    description:
      "Respond to inbound leads in seconds, not hours. Instant multi-channel capture, vibrating push alerts, 1-tap WhatsApp follow-ups, and an offline-first pipeline.",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to main content
        </a>
        <MarketingNavbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <MarketingFooter />
      </body>
    </html>
  );
}

