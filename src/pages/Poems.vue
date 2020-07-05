<template>
  <Layout>
      <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
          <div v-if="!post.node.isBlogPost">
                <g-link :to="post.node.path">
                <h1>{{post.node.title}}</h1>
                <span>posted on: {{post.node.date}}</span>
                </g-link>`
          </div>

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