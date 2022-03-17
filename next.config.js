/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.experiments = { asyncWebAssembly: true, topLevelAwait: true }
    return config
  },
  reactStrictMode: true,
}