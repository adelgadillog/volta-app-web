/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/volta-app-web',
  assetPrefix: '/volta-app-web/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
