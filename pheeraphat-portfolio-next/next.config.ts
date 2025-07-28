import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tattered-hardboard-505.notion.site',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        pathname: '/de7053b8-41e2-4a9c-b529-0f9c3cb781e1/**',
      },
    ],
    domains: [
      'media.licdn.com',
      'encrypted-tbn0.gstatic.com',
      'www.infoquest.co.th',
    ],
  },
};

export default nextConfig;
