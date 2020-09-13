require("~/main.css");

import AOS from 'aos';
import 'aos/dist/aos.css';
import GridsomeScrollReveal from 'gridsome-scroll-reveal';


// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import DefaultLayout from '~/layouts/Default.vue';
export default function (Vue, { router, head, isClient }) {
// Set default layout as a global component
Vue.component('Layout', DefaultLayout);

Vue.use(GridsomeScrollReveal, {
    reset: false,
    class: 'reveal',
    duration: 500,
    distance: '20px',
    mobile: true,
    interval: 600
})
}
