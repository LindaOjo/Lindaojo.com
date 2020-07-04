// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Lindaojo.com',
  siteDescription: 'A personal website designed with Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/blog/**/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug'
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    Blogpost:'/blog/:title'
  }
}
 