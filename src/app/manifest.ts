import type { MetadataRoute } from "next";

// Web App Manifest so the marketing site is installable as a PWA
// ("Add to Home Screen"), matching the product's mobile-first positioning.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ridhzo — Mobile Lead Management CRM",
    short_name: "Ridhzo",
    description:
      "The 1-tap mobile CRM for fast closers: instant lead capture, WhatsApp follow-ups, and offline-first pipeline management.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
