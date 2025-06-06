import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.artecke.de",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
