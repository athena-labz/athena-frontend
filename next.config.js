/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.experiments = { asyncWebAssembly: true }
    return config
  },
  reactStrictMode: true,
}