// import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
// import rehypePrism from '@mapbox/rehype-prism'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   reactStrictMode: true,
//   experimental: {
//     scrollRestoration: true,
//   }
// }

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

// export default withMDX(nextConfig)
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  }
}

module.exports = nextConfig;