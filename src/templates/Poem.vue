<template>
    <Layout>
        <article class="bg-red-800">
            <h2 class="h2 text-center">{{$page.blogPost.title}}</h2>
            <div class="bg-gray-400 lg:w-3/4 sm:w-5/6"   v-html="$page.blogPost.excerpt"></div>
        </article>  
    </Layout>   
</template>

<page-query>
    query ($id: ID!) {
        blogPost (id: $id) {
            isBlogPost
            title
            excerpt
        }
    }
</page-query>

<script>
export default {
    
}
</script>