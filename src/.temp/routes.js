const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/admin/Documents/Lindaojo.com/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Success.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--poems-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Poems.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--portfolio-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Portfolio.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Contact.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Blog.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/index.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    path: "/success/",
    component: c2
  },
  {
    path: "/poems/",
    component: c3
  },
  {
    path: "/portfolio/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    path: "/blog/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
