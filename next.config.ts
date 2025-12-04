import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is enabled by default in Next.js 16
  // Removed empty webpack config to avoid conflicts with Turbopack
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            // REPLACE 'webflow.com' with your actual custom domain if you have one
            value: "frame-ancestors 'self' https://*.medplusstaff.com https://*.webflow.io;",
          },
        ],
      },
    ];
  },
};


export default nextConfig;
