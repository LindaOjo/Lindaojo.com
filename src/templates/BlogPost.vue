<template>
    <Layout>
        <article>
            <h2 class="h2 text-center">{{$page.blogPost.title}}</h2>
            <div v-html="$page.blogPost.content"></div>
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

<style lang="scss">

</style>
