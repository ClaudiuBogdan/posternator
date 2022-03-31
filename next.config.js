/** @type {import('next').NextConfig} */

const loadConfigs = require("./config/loader")

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    ...loadConfigs(),
  },
}

module.exports = nextConfig
