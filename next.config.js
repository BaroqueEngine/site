/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/404.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
