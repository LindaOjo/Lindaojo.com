<template>
    <Layout>
        <article class="bg-red-800">
            <h2 class="h2 text-center">{{$page.blogPost.title}}</h2>
            <div class="bg-gray-400 lg:w-3/4 sm:w-5/6"   v-html="$page.blogPost.content"></div>
            <div class="mx-auto lg:w-3/4 sm:w-5/6">
                <ArticleButtons :songHref="$page.blogPost.songHref"/>
            </div>
        </article> 
         
    </Layout>   
</template>

<page-query>
    query ($id: ID!) {
        blogPost (id: $id) {
            isBlogPost
            path
            title
            content
            date
            songHref
    }
</page-query>

<script>
import ArticleButtons from "./../components/ArticleButtons";

let ROOT_PATH = 'https://lindaojo.com';

export default {
    components: { 
        ArticleButtons,
    },
     metaInfo()  {
        return {
            title: this.$page.blogPost.title,
            meta: [
                {key: "og:type", property:"og:type", content:'article'},
                {key: "og:title", property:"og:title", content: this.$page.blogPost.title},
                {key: "og:url", property:"og:url", content: `${ROOT_PATH}${this.$page.blogPost.path}`},
                {key: "og:updated_time", property: "og:updated_time", content: this.$page.blogPost.date },

                {key: "twitter:card", name:"twitter:card", content:"summary"},
                {key: "twitter:title", name:"twitter:title", content: this.$page.blogPost.title},
                {key: "twitter:url", name:"twitter:url", content: `${ROOT_PATH}${this.$page.blogPost.path}`},
            ],
            link: [
                { rel: 'canonical', href: `${ROOT_PATH}${this.$page.blogPost.path}`}
            ]
        }
    },
}
</script>
