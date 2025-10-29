/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      reactbits: new URL('./lib/vendor/reactbits.tsx', import.meta.url).pathname
    };
    return config;
  }
};

export default nextConfig;
