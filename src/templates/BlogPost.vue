<template>
    <Layout>
        <article>
            <h2 class="h2 text-center pb-2">{{$page.blogPost.title}}</h2>
            <div class="mx-auto lg:w-3/4 sm:w-5/6" :class="$page.blogPost.isBlogPost ? '' : 'text-center'" v-html="$page.blogPost.content"></div>
        </article>  
    </Layout>   
</template>

<page-query>
    query ($id: ID!) {
        blogPost (id: $id) {
            isBlogPost
            title
            content
        }
    }
</page-query>

<script>
export default {
    
}
</script>

<style>
.blog-post{
 @apply mx-auto;
}

</style>
