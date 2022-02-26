/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API: 'https://localhost:3000'
  },
  reactStrictMode: true,
  pageExtensions: ["next.tsx"],
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  devIndicators: {
    buildActivity: false
  },
  images: {
    domains: ['https://www.klasiksanatlar.com'],
  },
};

module.exports = nextConfig;
