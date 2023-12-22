const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

const repo = 'portfolio'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}/`

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: assetPrefix,
  basePath: basePath
}

module.exports = withNextra(nextConfig)
