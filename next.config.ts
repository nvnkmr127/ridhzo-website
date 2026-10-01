import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // WordPress permalinks end in "/". Without this Next 308-redirects /blog/post/ -> /blog/post and WP
  // redirects it back, looping forever. The /blog -> WordPress proxy itself lives in src/middleware.ts.
  skipTrailingSlashRedirect: true,

  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/cancellation-refund",
        destination: "/refund-policy",
        permanent: true,
      },
      {
        source: "/cancellation-policy",
        destination: "/refund-policy",
        permanent: true,
      },
      {
        source: "/refunds",
        destination: "/refund-policy",
        permanent: true,
      },
      {
        source: "/shipping-and-delivery",
        destination: "/shipping-policy",
        permanent: true,
      },
      {
        source: "/cookies",
        destination: "/cookie-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
