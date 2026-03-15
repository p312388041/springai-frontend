import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.deepseek.com',
      },
    ],
  },
  // 添加空的turbopack配置来避免警告
  turbopack: {},
};

export default nextConfig;
