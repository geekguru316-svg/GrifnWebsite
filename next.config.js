/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'grifn-website.vercel.app' }],
        destination: 'https://grifn.dev/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};