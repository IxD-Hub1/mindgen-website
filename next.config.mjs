/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  // Added to allow local network testing without warnings
  experimental: {
    allowedDevOrigins: ['192.168.0.111'],
  },
};

export default nextConfig;