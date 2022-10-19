/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});
