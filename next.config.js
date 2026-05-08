/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables compression for all responses
  compress: true,
  
  // Optimizes images for faster delivery over modern protocols
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Experimental features that leverage HTTP/2 streaming
  experimental: {
    ppr: 'incremental', // Partial Prerendering
  },

  // Keep existing note: Redirect removed until a custom domain is purchased
};

module.exports = nextConfig;