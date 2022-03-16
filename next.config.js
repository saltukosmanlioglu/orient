// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API: 'http://menu.orientbygk.com/api/web/',
    NEXT_APP_FILE_SERVE: 'http://menu.orientbygk.com/api/web/file/serve/'
  },
  images: {
    domains: ['menu.orientbygk.com'],
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
