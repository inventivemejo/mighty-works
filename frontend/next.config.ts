import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isGithubPages = Boolean(basePath);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  basePath: isGithubPages ? basePath : undefined,
  assetPrefix: isGithubPages ? basePath : undefined,
};

export default nextConfig;
