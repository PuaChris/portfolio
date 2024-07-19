/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio": undefined,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
