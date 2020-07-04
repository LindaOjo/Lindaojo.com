const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/admin/Documents/Lindaojo.com/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--poems-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Poems.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Index.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    path: "/poems/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
