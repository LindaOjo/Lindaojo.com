const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind()];

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  siteName: 'Linda Ojo - Personal Website and Blog',
  siteDescription: 'Articles on frontend development and poems written by Linda Ojo, Frontend Developer',
  keywords: 'Frontend,Developer,Web,JavaScript,CSS,HTML,Angular,Software,Engineer,Blog,Nigeria,Lagos',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  
  plugins: [
    {
        use: '@gridsome/source-filesystem',
        options: {
            typeName: 'BlogPost',
            path: './content/blog/**/*.md',
        }
    },
    {
        use: "gridsome-plugin-service-worker",
        options: {
            staleWhileRevalidate: {
                routes: ["/blog"],
                fileTypes: ["document", "script", "style", "image"],
            },
            cacheFirst: {
                routes: ["/", "/contact"],
                fileTypes: ["document", "script", "style", "image"],
            },
        },
    },
    {
        use: `gridsome-plugin-netlify-cms`,
        options: {
            publicPath: `/cms`
        }
    },
    {
        use: 'gridsome-plugin-purgecss',
        // default options, the following will be included if you don't provide anything
        options: {
          content: [
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.pug',
            './src/**/*.md'
          ],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  templates: {
    BlogPost: '/blog/:title'
  },
  configureWebpack: {
    // merged with the internal config
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    //   Adding code below to visualize size of output files with ai to improve lighthouse performance
    //   config
    //   .plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }]);
  }
}
