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
            remark: {
                plugins: [
                    [
                      "gridsome-plugin-remark-prismjs-all",
                      {
                        showLineNumber: true,
                        highlightClassName: "gridsome-highlight",
                        codeTitleClassName: "gridsome-code-title",
                        classPrefix: "language-",
                      },
                    ]
                ]
            }
        }
    },
    {
        use: "gridsome-plugin-service-worker",
        options: {
            staleWhileRevalidate: {
                routes: ["/contact", "/blog"],
                fileTypes: ["document", "script", "style", "image"],
            },
        },
    },
    {
        use: 'gridsome-plugin-pwa',
        options: {
             // Service Worker Options
             disableServiceWorker: false,
             serviceWorkerPath: './static/assets/js/service-worker.js',
             cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
             disableTemplatedUrls: false,       // Optional
 
             // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
             manifestPath: 'manifest.json',
             title: "Linda Ojo's personal website and blog",
             startUrl: '/',
             display: 'standalone',
             "orientation": "portrait",
             statusBarStyle: 'default',
             themeColor: '#0855a1',
             backgroundColor: '#0855a1',
             icon: 'favicon.svg',
             shortName: 'Linda Ojo',              // Optional
             description: "A Progressive Web App for Linda Ojo's personal Website and blog !",  // Optional
             categories: ['education', 'blog', 'tech', 'programming', 'web development', 'coding', 'frontend', 'software engineering'],          // Optional
             lang: 'en-US',                      // Optional
             dir: 'auto',                        // Optional
             maskableIcon: true,  

             icons: [
                {
                  "src": "https://res.cloudinary.com/lindaojo/image/upload/v1601407787/favicon_kbxn6x.png",
                  "sizes": "192x192",
                  "type": "image/png"
                },
                {
                  "src": "https://res.cloudinary.com/lindaojo/image/upload/v1601407787/favicon_kbxn6x.png",
                  "sizes": "512x512",
                  "type": "image/png"
                }
              ],
        }

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
            './src/**/*.md',
          ],

          // https://purgecss.com/configuration.html#configuration-file Safelist below stop styles
          // from being purge in production -bug-fix works
          safelist: {
            greedy: [/^token/, /^pre/, /^code/, /token$/, 'pre', 'gridsome']
          },
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/ ]+/g) || [],
        }
    },
    {
        use: '@gridsome/plugin-google-analytics',
        options: {
          id: 'UA-179418260-1'
        }
    },
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
