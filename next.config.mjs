/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'i.imgur.com',
      'img.freepik.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'placeholder.svg'
    ],
    unoptimized: true,
  },
};

export default nextConfig;
