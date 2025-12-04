import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is enabled by default in Next.js 16
  turbopack: {},
  // Keep webpack config for backward compatibility if needed
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
    };
    return config;
  },
};

export default nextConfig;
