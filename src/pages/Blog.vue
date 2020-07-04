<template>
  <Layout>
      <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
          <g-link :to="post.node.path">
          <h1>{{post.node.title}}</h1>
          <span>posted on {{post.node.date}}</span>
          </g-link>
      </span>   
  </Layout>
</template>

<page-query>
    query {
        allBlogPost {
          edges {
            node {
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