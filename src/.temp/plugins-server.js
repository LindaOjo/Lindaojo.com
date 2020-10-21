import plugin_gridsome_plugin_service_worker_6 from "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-service-worker/gridsome.client.js"
import plugin_gridsome_plugin_pwa_7 from "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-pwa/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_8 from "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_10 from "/Users/admin/Documents/Lindaojo.com/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_service_worker_6,
    options: {"staleWhileRevalidate":{"routes":["/contact","/blog"],"fileTypes":["document","script","style","image"],"cacheName":"swr-v1"},"cacheFirst":{"cacheName":"cf-v1","routes":[],"fileTypes":[]},"cacheOnly":{"cacheName":"co-v1","routes":[],"fileTypes":[]},"networkFirst":{"cacheName":"nf-v1","routes":[],"fileTypes":[]},"networkOnly":{"cacheName":"no-v1","routes":[],"fileTypes":[]},"precachedRoutes":[]}
  },
  {
    run: plugin_gridsome_plugin_pwa_7,
    options: {"title":"Linda Ojo's personal website and blog","serviceWorkerPath":"/static/assets/js/service-worker.js","manifestPath":"/manifest.json","statusBarStyle":"default","themeColor":"#0855a1","icon":"favicon.svg","msTileColor":"#666600"}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_8,
    options: {"publicPath":"/cms","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/Users/admin/Documents/Lindaojo.com/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_10,
    options: {"id":"UA-179418260-1"}
  }
]
