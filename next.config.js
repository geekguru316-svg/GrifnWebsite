/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables compression for all responses
  compress: true,
  
  // Optimizes images for faster delivery over modern protocols
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Features that leverage HTTP/2 streaming
  cacheComponents: true, // Moved from experimental in Next.js 16.x

  // Keep existing note: Redirect removed until a custom domain is purchased
};

module.exports = nextConfig;