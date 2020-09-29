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
            date
            songHref
        }
    }
</page-query>

<script>
import ArticleButtons from "./../components/ArticleButtons";
import SubscriptionForm from "./../components/SubscriptionForm";
import getShareImage from '@jlengstorf/get-share-image';

let ROOT_PATH = 'https://lindaojo.com'
export default {
    components: { 
        ArticleButtons,
        SubscriptionForm
    },

    metaInfo()  {
            return {
                title: this.$page.blogPost.title,
                meta: [
                    {key: "og:type", property:"og:type", content:'article'},
                    {key: "og:title", property:"og:title", content: this.$page.blogPost.title},
                    {key: "og:description", name:"og:description", content: this.$page.blogPost.excerpt},
                    {key: "og:url", property:"og:url", content: `${ROOT_PATH}${this.$page.blogPost.path}`},
                    {key: "og:updated_time", property: "og:updated_time", content: this.$page.blogPost.date },
                    {key: "og:image", property: "og:image", content: this.getImage()},
                    {key: "og:image:width", property: "og:image:weight",  content: "260"},
                    {key: "og:image:height", property: "og:image:height", content: "200"},

                    {key: "twitter:card", name: "twitter:card", content:"summary"},
                    {key: "twitter:title", name: "twitter:title", content: this.$page.blogPost.title},
                    {key: "twitter:description", name:"twitter:description", content: this.$page.blogPost.excerpt},
                    {key: "twitter:url", name:"twitter:url", content: `${ROOT_PATH}${this.$page.blogPost.path}`},
                    {key: "twitter:image", property: "twitter:image", content: this.getImage()},
                ],
                link: [
                    { rel: 'canonical', href: `${ROOT_PATH}${this.$page.blogPost.path}`}
                ]
            }
    },
    mounted() {
        this.getImage();
    },
     methods: {
    getImage() {
      const socialImage = getShareImage({
        title: this.$page.blogPost.title,
        tagline: 'lindaojo.com',
        cloudName: 'lindaojo',
        imagePublicID: 'Resume_Linda_Ojo_msdltz.png',
        titleFont: 'futura',
        taglineFont: 'futura',
        titleFontSize: 72,
        textColor: '232129',
      });
      return socialImage;
    }
  }
}
</script>

<style>
.blog-post{
 @apply mx-auto;
}

</style>
