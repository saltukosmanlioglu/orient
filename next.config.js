// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API: 'http://api.orientbygk.com/web/'
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
};

module.exports = nextConfig;
