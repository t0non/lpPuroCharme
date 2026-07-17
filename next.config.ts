import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Garantir que não haja rolagem horizontal
  experimental: {},
};

export default nextConfig;
