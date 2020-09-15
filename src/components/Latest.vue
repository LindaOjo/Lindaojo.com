<template>
  <section>
    <span data-aos="slide-up" v-for="post in $static.allBlogPost.edges" 
          :key="post.node.id">
        <g-link class="post-card"
                :to="post.node.path">
            <div class="inline-block w-full">
                <div>
                    <h3 class="h3 my-2">{{post.node.title}}</h3>
                    <p class="excerpt">{{post.node.excerpt}} </p>
                </div>
                <div class="text-right">
                    <p>{{post.node.duration}}</p>
                </div>
            </div>
            
        </g-link>
    </span>
  </section>
</template>

<static-query>
    query {
        allBlogPost (sortBy: "date", order: DESC, limit: 3) {
          edges {
            node {
                isBlogPost
                path
                title
                duration
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
