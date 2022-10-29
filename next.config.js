/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    apiDomain: 'http://localhost:3000/'
  }
}

module.exports = nextConfig
