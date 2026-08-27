import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/packages/property-refresh",
        destination: "/packages/story-starter",
        permanent: true,
      },
      {
        source: "/packages/property-campaign",
        destination: "/packages/story-builder",
        permanent: true,
      },
      {
        source: "/packages/premium-campaign",
        destination: "/packages/story-deep-dive",
        permanent: true,
      },
      {
        source: "/packages/property-reel-campaign",
        destination: "/packages/the-full-story",
        permanent: true,
      },
      {
        source: "/packages/development-campaign",
        destination: "/packages/story-custom",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;