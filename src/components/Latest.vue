<template>
  <section>
    <span v-for="post in $static.allBlogPost.edges" 
          :key="post.node.id">
        <g-link class="post-card hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform"
                :to="post.node.path">
            <div class="block">
                <h3 class="h3">{{post.node.title}}</h3>
                <p class="excerpt">{{post.node.excerpt}} </p>
            </div>
        </g-link>
    </span>
  </section>
</template>

<static-query>
    query {
        allBlogPost (sortBy: "date", order: ASC, limit: 3) {
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
</static-query>

<script>  
export default {

}
</script>
