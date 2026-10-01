import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // WordPress permalinks end in "/". Without this Next 308-redirects /blog/post/ -> /blog/post and WP
  // redirects it back, looping forever.
  skipTrailingSlashRedirect: true,

  // WordPress lives on its own PHP host; proxy it under /blog so the public URL stays ridhzo.com/blog.
  // beforeFiles so it wins over the built-in src/app/blog route. Set WORDPRESS_ORIGIN (e.g.
  // https://wp-origin.ridhzo.com) in Vercel env; unset = no proxy and the built-in blog keeps serving.
  async rewrites() {
    const origin = process.env.WORDPRESS_ORIGIN;
    if (!origin) return [];
    return {
      beforeFiles: [
        { source: "/blog", destination: `${origin}/blog/` },
        { source: "/blog/:path*", destination: `${origin}/blog/:path*` },
      ],
    };
  },
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
