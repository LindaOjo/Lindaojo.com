<template>
  <Layout>
    <h2 class="h2 text-center m-5" data-aos="flip-right" data-aos-duration="1500">Blog</h2>
    <h3 class="h3" v-if="this.noOfBlogPost > 1">{{this.noOfBlogPost}} Posts</h3>
    <h3 class="h3" v-if="this.noOfBlogPost == 1">{{this.noOfBlogPost}} Post</h3>
        <span data-aos="slide-up" v-for="post in $page.allBlogPost.edges" :key="post.node.id">
            <g-link v-if="post.node.isBlogPost" 
                    :to="post.node.path"
                    class="post-card w-full hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform">
                <div class="inline-block w-full">
                    <div>
                        <h2 class="h3 my-2">{{post.node.title}}</h2>
                        <p class="excerpt w-5/6">
                        {{post.node.excerpt}}
                        </p>
                    </div>
                    <div class="text-right">
                        <p>{{post.node.duration}}</p>
                    </div>
                </div>               
            </g-link>
        </span>
    </div>
  </Layout>
</template>

<page-query>
    query {
        allBlogPost (sortBy: "date", order: DESC){
          totalCount
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
</page-query>

<script> 

import Layout from '~/layouts/Default.vue' 
export default {
    created () {
        this.$page.allBlogPost.edges.forEach(post => {
            if (post.node.isBlogPost) this.noOfBlogPost++;
        });
    },
    components: { Layout },
    metaInfo: { title: 'Blog' },
    data () {
        return {
            noOfBlogPost: 0
        }
    },
    methods: {
        getPostnumber() {
        }
    }

}
</script>

<style scoped>
@media (max-width: 768px) {
	.h3 {
		@apply pt-3;
	}
}
</style>

