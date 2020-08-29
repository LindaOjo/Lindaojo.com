const c1 = () => import(/* webpackChunkName: "page--src--pages--components--latest-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/components/Latest.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/admin/Documents/Lindaojo.com/src/templates/BlogPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Success.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--poems-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Poems.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--portfolio-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Portfolio.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Contact.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/Blog.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/admin/Documents/Lindaojo.com/node_modules/gridsome/app/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/admin/Documents/Lindaojo.com/src/pages/index.vue")

export default [
  {
    path: "/components/latest/",
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
    path: "/portfolio/",
    component: c5
  },
  {
    path: "/contact/",
    component: c6
  },
  {
    path: "/blog/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
