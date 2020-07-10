<template>
  <Layout>
    <h2 class="h2 text-center">Blog</h2>
      <span class="post-container" v-for="post in $page.allBlogPost.edges" :key="post.node.id">
            <g-link v-if="post.node.isBlogPost"
                    class="post-card hover:border-blue-500"
                    :to="post.node.path">
                <div class="block">
                  <h2 class="h2">{{post.node.title}}</h2>
                  <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti animi debitis modi officia autem 
                    velit excepturi, asperiores exercitationem consequuntur aperiam libero iusto nostrum cum reprehenderit! In ut maxime accusamus?</p>
                </div>
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

<style lang="scss">

@media (max-width: 767px) {
  .excerpt {
    display: none;
  }

}
</style>