<template>
    <Layout>
        <article>
            <h2 class="h2 text-center pb-2">{{$page.blogPost.title}}</h2>
            <div class="mx-auto lg:w-3/4 sm:w-5/6" :class="$page.blogPost.isBlogPost ? '' : 'text-center'" v-html="$page.blogPost.content"></div>
            <div class="mx-auto lg:w-3/4 sm:w-5/6">
                <ArticleButtons :songHref="$page.blogPost.songHref"/>
            </div>
            <SubscriptionForm ></SubscriptionForm>
            
        </article>
    </Layout>   
</template>

<page-query>
    query ($id: ID!) {
        blogPost (id: $id) {
            isBlogPost
            title
            content
            songHref
        }
    }
</page-query>

<script>
import ArticleButtons from "./../components/ArticleButtons";
import SubscriptionForm from "./../components/SubscriptionForm";
export default {
    components: { 
        ArticleButtons,
        SubscriptionForm
    },   
}
</script>

<style>
.blog-post{
 @apply mx-auto;
}

</style>
