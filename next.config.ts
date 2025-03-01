/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  // For S3 deployment
  images: {
    unoptimized: true,
  },
  // If you're exporting static files for S3
  output: 'export',
}

module.exports = nextConfig