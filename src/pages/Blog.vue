<template>
  <Layout>
    <h2 class="h2 text-center m-5" data-aos="flip-right" data-aos-duration="1500">Blog</h2>
        <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
            <g-link v-if="post.node.isBlogPost" 
                    :to="post.node.path"
                    class="post-card w-full hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform">
                <div class="inline-block w-full">
                    <div>
                        <h2 class="h3">{{post.node.title}}</h2>
                        <p class="excerpt w-5/6">
                        {{post.node.excerpt}}
                        </p>
                    </div>
                    <div class="text-right">
                        <p >{{post.node.date}}</p>  
                    </div>
                </div>               
            </g-link>
        </span>
  </Layout>
</template>

<page-query>
    query {
        allBlogPost (sortBy: "date", order: ASC) {
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
import Layout from '~/layouts/Default.vue' 
export default {
     components:
      { Layout },
       metaInfo: { title: 'Blog' }
}
</script>

<style scoped>
@media (max-width: 768px) {
	.h3 {
		@apply pt-3;
	}
}
</style>

