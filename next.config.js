const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack(config, { isServer }) {
    if (!isServer && isProd) {
      // Additional custom webpack configurations for production if needed
    }
    return config;
  },
};

module.exports = withPWA({
  dest: "public",
  disable: !isProd,
  runtimeCaching,
  register: true,
  skipWaiting: true,
})(nextConfig);
