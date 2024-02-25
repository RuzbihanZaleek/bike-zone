/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgd.aeplcdn.com", "images.unsplash.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
