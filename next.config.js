/** @type {import('next').NextConfig} */
const nextConfig = {
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
