const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/admin/Documents/Lindaojo.com/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Blog.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Index.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    path: "/blog/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
