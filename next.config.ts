import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      new URL("https://i8qy5y6gxkdgdcv9.public.blob.vercel-storage.com/**"),
    ],
  },
  cacheLife: {
    products: {
      stale: 60, // Cache may be stale for 60 seconds
      revalidate: 300, // Cache expires after 300 seconds (5 minutes)
      expire: 3600, // Cache expires after 3600 seconds (1 hour)
    },
  },
};

export default nextConfig;
