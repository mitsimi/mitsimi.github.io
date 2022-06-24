/** @type {import('next').NextConfig} */


// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  assetPrefix: isProd ? '/mitsimi.github.io/' : ''
}

module.exports = nextConfig