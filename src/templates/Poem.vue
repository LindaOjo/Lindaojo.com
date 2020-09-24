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
            title
            content
            songHref
        }
    }
</page-query>

<script>
import ArticleButtons from "./../components/ArticleButtons";
export default {
    components: { 
        ArticleButtons,
    },
}
</script>
