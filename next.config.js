const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})
 
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
module.exports = withNextra({
  redirects: () => [
    {
      source: '/docs',
      destination: '/docs/index',
      permanent: true
    },
    {
      source: '/docs/:slug(typescript|latex|tailwind-css|mermaid)',
      destination: '/docs/:slug',
      permanent: true
    },
  ],
})
