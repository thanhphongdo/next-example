/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    apiDomain: 'http://localhost:3000/',
    NEXTAUTH_BASE_URL: 'http://localhost:3001',
    // NEXTAUTH_URL_INTERNAL: 'http://localhost:3001',
    NEXTAUTH_SECRET: '1234'
  }
}

module.exports = nextConfig
