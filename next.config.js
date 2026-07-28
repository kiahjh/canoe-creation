/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: `https`,
        hostname: `cdn.cosmicjs.com`,
        port: ``,
        pathname: `/**`,
      },
      {
        protocol: `https`,
        hostname: `i.ytimg.com`,
        port: ``,
        pathname: `/vi/**`,
      },
    ],
  },
};

module.exports = nextConfig;
