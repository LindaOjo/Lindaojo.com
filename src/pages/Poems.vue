<template>
  <Layout>
    <h2 class="h2 text-center">Poems</h2>
      <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
          <g-link v-if="!post.node.isBlogPost"
                    class="post-card hover:border-pink-600"
                    :to="post.node.path">
                <h2 class="h2">{{post.node.title}}</h2>
            </g-link>

      </span>   
  </Layout>
</template>

<page-query>
    query {
        allBlogPost {
          edges {
            node {
                isBlogPost
                path
                title
                excerpt
                date
            }
          }  
        }
    }
</page-query>

<script>
export default {

}
</script>

<style>

</style>