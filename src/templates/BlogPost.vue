<template>
    <Layout>
        <article>
            <div class="flex-col text-center">
                <h2 class="h1">{{$page.blogPost.title}}</h2>
                <small>Published: {{$page.blogPost.date}}</small>
            </div>
            <div v-if="$page.blogPost.image" class="lg:w-2/4 md:w-2/3 sm:w-64 pt-5 pb-2 centered-image">
                <g-image :src="$page.blogPost.image"></g-image>
            </div>
            
            <div class="mx-auto lg:w-3/4 sm:w-5/6" :class="$page.blogPost.isBlogPost ? '' : 'text-center'" v-html="$page.blogPost.content"></div>
            <div class="mx-auto lg:w-3/4 sm:w-5/6">
                <ShareLinks
                    :path="$page.blogPost.path"
                    :title="$page.blogPost.title"
                    :excerpt="$page.blogPost.excerpt"
                    :page="$page.blogPost.isBlogPost ? 'article' : 'poem'"
                 />
            </div>
            <SubscriptionForm :page="$page.blogPost.isBlogPost ? 'article' : 'poem'"></SubscriptionForm>
            
        </article>
    </Layout>   
</template>

<page-query>
    query ($id: ID!) {
        blogPost (id: $id) {
            isBlogPost
            image
            path
            title
            excerpt
            content
            date
        }
    }
</page-query>

<script>
import ShareLinks from "./../components/ShareLinks";
import SubscriptionForm from "./../components/SubscriptionForm";

let ROOT_PATH = 'https://lindaojo.com';
export default {
    components: { 
        ShareLinks,
        SubscriptionForm
    },

    metaInfo()  {
        return {
            title: this.$page.blogPost.title,
            meta: [
                {name:"monetization", content:"$ilp.uphold.com/UrBeYjYH86ZA"},
                {key: "og:type", property:"og:type", content:'article'},
                {key: "og:title", property:"og:title", content: this.$page.blogPost.title},
                {key: "og:description", property:"og:description", content: this.$page.blogPost.excerpt},
                {key: "og:url", property:"og:url", content: `${ROOT_PATH}${this.$page.blogPost.path}`},
                {key: "og:updated_time", property: "og:updated_time", content: this.$page.blogPost.date},
                {key: "og:image", property: "og:image", content: this.$page.blogPost.image || 'https://res.cloudinary.com/lindaojo/image/upload/v1605041775/icon-512_cfnlso.png'},

                {key: "twitter:card", name:"twitter:card", content:"summary_large_image"},
                {key: "twitter:title", name:"twitter:title", content: this.$page.blogPost.title},
                {key: "twitter:description", name:"twitter:description", content: this.$page.blogPost.excerpt},
                {key: "twitter:url", name:"twitter:url", content: `${ROOT_PATH}${this.$page.blogPost.path}`},
                {key: "twitter:image", property: "twitter:image", content: this.$page.blogPost.image || 'https://res.cloudinary.com/lindaojo/image/upload/v1605041775/icon-512_cfnlso.png' },
            ],
            link: [
                { rel: 'canonical', href: `${ROOT_PATH}${this.$page.blogPost.path}`}
            ]
        }
    },
}
</script>

<style>
.blog-post{
 @apply mx-auto;
}

</style>
