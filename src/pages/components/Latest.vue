<template>
  <section>
    <span v-for="post in $static.allBlogPost.edges" 
          :key="post.node.id">
        <g-link  v-if="post.node.isBlogPost" class="post-card hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform"
                :to="post.node.path">
            <div class="block">
                <h2 class="h2">{{post.node.title}}</h2>
                <p class="excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti animi debitis modi officia autem
                velit excepturi, asperiores exercitationem
                </p>
            </div>
        </g-link>
    </span>
  </section>
</template>

<static-query>
    query {
        allBlogPost (order: DESC, limit:3 ) {
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