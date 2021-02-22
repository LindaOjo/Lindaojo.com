const c1 = () => import(/* webpackChunkName: "page--src--pages--articles-vue" */ "/Users/admin/Downloads/Work/Lindaojo.com/src/pages/Articles.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/admin/Downloads/Work/Lindaojo.com/src/templates/BlogPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/admin/Downloads/Work/Lindaojo.com/src/pages/Success.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--poems-vue" */ "/Users/admin/Downloads/Work/Lindaojo.com/src/pages/Poems.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/admin/Downloads/Work/Lindaojo.com/src/pages/Contact.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/admin/Downloads/Work/Lindaojo.com/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/admin/Downloads/Work/Lindaojo.com/src/pages/Index.vue")

export default [
  {
    path: "/articles/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/blog/:title/",
    component: c2
  },
  {
    path: "/success/",
    component: c3
  },
  {
    path: "/poems/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
