<template>
  <Layout>
      <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
          <a :href="post.node.path">
          <h1>{{post.node.title}}</h1>
          <span>posted on {{post.node.date}}</span>
          </a>
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
a{
    
}
</style>