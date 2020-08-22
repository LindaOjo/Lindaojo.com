require("~/main.css");
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueScrollReveal from 'vue-scroll-reveal';


// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
// Set default layout as a global component
Vue.component('Layout', DefaultLayout);
Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 800,
    scale: 1,
    distance: '10px',
    mobile: true
  });
}
