import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //image configuration
  images: {
    remotePatterns: [
      //for google
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
