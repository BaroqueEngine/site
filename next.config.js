/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/works/62/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
