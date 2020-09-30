import plugin_gridsome_plugin_service_worker_6 from "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-service-worker/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_7 from "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_service_worker_6,
    options: {"staleWhileRevalidate":{"routes":["/contact","/blog"],"fileTypes":["document","script","style","image"],"cacheName":"swr-v1"},"cacheFirst":{"routes":["/"],"fileTypes":["document","script","style","image"],"cacheName":"cf-v1"},"cacheOnly":{"cacheName":"co-v1","routes":[],"fileTypes":[]},"networkFirst":{"cacheName":"nf-v1","routes":[],"fileTypes":[]},"networkOnly":{"cacheName":"no-v1","routes":[],"fileTypes":[]},"precachedRoutes":[]}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_7,
    options: {"publicPath":"/cms","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  }
]
