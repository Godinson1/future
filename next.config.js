/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["future-profile.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
