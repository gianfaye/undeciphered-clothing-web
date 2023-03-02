/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://undecipheredclothing.imgix.net',
  },
}

module.exports = nextConfig

// const isGithubActions = process.env.GITHUB_ACTIONS || false
//
// let assetPrefix = '/'
// let basePath = ''
//
// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
//
//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   images: {
//     loader: 'imgix',
//     path: 'https://undecipheredclothing.imgix.net',
//   },
// }
