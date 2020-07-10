<template>
    <Layout>
        <article class="bg-red-800">
            <h2 class="h2 text-center">{{$page.blogPost.title}}</h2>
            <div v-html="$page.blogPost.excerpt"></div>
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

<style lang="scss">

</style>
