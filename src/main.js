require("~/styles/main.scss");

import AOS from 'aos';
import 'aos/dist/aos.css';


// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import DefaultLayout from '~/layouts/Default.vue';
import VueSocialSharing from 'vue-social-sharing';
import Meta from 'vue-meta';

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.use(VueSocialSharing);
    Vue.use(Meta);

    head.meta.push(

        // Facebook OpenGraph
        {key: "og:title", property: "og:title", content: 'Linda Ojo'},
        {key: "og:locale", property: "og:locale", content: "en_US"},
        {key: "og:type", property: "og:type", content: "website"},
        {key: "og:site_name", property: "og:site_name", content: "LindaOjo"},
        {key: "og:url", property: "og:url", content: "https:/lindaojo.com"},
        {key: "og:image", property: "og:image", content: "https://res.cloudinary.com/lindaojo/image/upload/v1601131597/Resume_Linda_Ojo_msdltz.png"},
        {key: "og:image:width", property: "og:image:weight",  content: "260"},
        {key: "og:image:height", property: "og:image:height", content: "200"},

                // Twitter Card
        {key: "twitter:card", name: "twitter:card", content: "summary"},
        {key: "twitter:title", name: "twitter:title", content: "Linda Ojo"},
        {key: "twitter:description", name: "twitter:description", content: "Written by Linda Ojo, Frontend Developer"},
        {key: "twitter:url", name: "twitter:url", content: "https://lindaojo.com"},
        {key: "twitter:image", name: "twitter:image", content: "https://res.cloudinary.com/lindaojo/image/upload/v1601131597/Resume_Linda_Ojo_msdltz.png"},
        {key: "twitter:label1", name: "twitter:label1", content: "Written by"},
        {key: "twitter:data1", name: "twitter:data1",  content: "Linda Ojo"},
        {key: "twitter:site", name: "twitter:site", content: "@LindaOjo"},
    );
}
