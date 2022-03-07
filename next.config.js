// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API: 'http://localhost/web/'
  },
  reactStrictMode: true,
  pageExtensions: ["next.tsx"],
  compiler: {
    styledComponents: true,
    relay: {
      src: './',
      language: 'typescript',
    },
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
