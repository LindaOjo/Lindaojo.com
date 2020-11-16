<template>
  <section>
    <span v-for="post in $static.allBlogPost.edges" 
          :key="post.node.id">
        <g-link v-if="post.node.isBlogPost"
                class="post-card hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform"
                :to="post.node.path">
            <div class="inline-block w-full">
                <div>
                    <h3 class="h3 my-2">{{post.node.title}}</h3>
                    <p v-if="post.node.isBlogPost" class="excerpt lg:w-5/6 sm:w-full">{{post.node.excerpt}} </p>
                </div>
                <div class="text-right">
                    <p v-if="post.node.isBlogPost">{{post.node.date}}</p>
                </div>
            </div>
            
        </g-link>
    </span>
  </section>
</template>

<static-query>
    query {
        allBlogPost (sortBy: "date", order: DESC, limit: 5) {
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
