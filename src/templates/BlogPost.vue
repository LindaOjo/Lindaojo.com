<template>
    <Layout>
        <article>
            <h2 class="h2 text-center pb-2">{{$page.blogPost.title}}</h2>
            <div class="mx-auto lg:w-3/4 sm:w-5/6" :class="$page.blogPost.isBlogPost ? '' : 'text-center'" v-html="$page.blogPost.content"></div>
            <div class="mx-auto lg:w-3/4 sm:w-5/6">
                <ArticleButtons 
                    :songHref="$page.blogPost.songHref"
                    :path="$page.blogPost.path"
                    :title="$page.blogPost.title"
                    :excerpt="$page.blogPost.excerpt"
                 />
            </div>
            <SubscriptionForm ></SubscriptionForm>
            
        </article>
    </Layout>   
</template>

<page-query>
    query ($id: ID!) {
        blogPost (id: $id) {
            isBlogPost
            path
            title
            excerpt
            content
            songHref
        }
    }
</page-query>

<script>
import ArticleButtons from "./../components/ArticleButtons";
import SubscriptionForm from "./../components/SubscriptionForm";

let ROOT_PATH = 'https://deploy-preview-17--lindaojo.netlify.app'
export default {
    components: { 
        ArticleButtons,
        SubscriptionForm
    },
      data() {
        return {
            logo: ROOT_PATH + require('./../../content/images/profile-pic.jpg')
        }
    },
    metaInfo()  {
            return {
                title: this.$page.blogPost.title,
                meta: [
                    {key: "og:type", property:"og:type", content:'article'},
                    {key: "og:title", property:"og:title", content: this.$page.blogPost.title},
                    {key: "og:description", name:"og:description", content: this.$page.blogPost.excerpt},
                    {key: "og:url", property:"og:url", content: this.$page.blogPost.path},
                    {key: "og:image", property:"og:image", content: this.logo},


                    {key: "twitter:card", name: "twitter:card", content: "summary"},
                    {key: "twitter:description", name:"twitter:description", content: this.$page.blogPost.excerpt},
                    {key: "twitter:url", name:"twitter:url", content: this.$page.blogPost.path},
                    {key: "twitter:image", name:"twitter:image", content: this.logo},


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
