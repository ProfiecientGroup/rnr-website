/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  reactStrictMode: true,
  trailingSlash: true, // Ensures correct routing in S3
};

module.exports = nextConfig;
