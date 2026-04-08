/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable filesystem cache in dev to avoid memory issues
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
