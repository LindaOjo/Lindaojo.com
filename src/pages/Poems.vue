<template>
  <Layout>
    <h2 class="h2 text-center m-5" data-aos="flip-right" data-aos-duration="1500">Poems</h2>
    <div class="inline-flex justify-end items-center w-full">
        <div hidden>
            <h3 class="h3" v-if="this.noOfBlogPost > 1">{{this.noOfBlogPost}} Posts</h3>
            <h3 class="h3" v-if="this.noOfBlogPost == 1">{{this.noOfBlogPost}} Post</h3>
        </div>
        <div class="h-auto mb-5">
            <a href="/contact" class="button subscribe-button mr-5"> Subscribe</a>
            <a  href="https://twitter.com/LindaOjo_?ref_src=twsrc%5Etfw"
                class="button twitter-button twitter-follow-button" data-show-count="false">
                <i class="fab fa-twitter mr-2"></i> Follow
            </a>
        </div>
        
    </div>
      <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
            <g-link  v-if="!post.node.isBlogPost"
                    class="post-card hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform"
                    :to="post.node.path">
                <div class="inline-block w-full">
                    <h2 class="h3 my-2">{{post.node.title}}</h2>
                    <div class="text-right">
                    </div>
                </div>
                
            </g-link>
      </span>   
  </Layout>
</template>

<page-query>
    query {
        allBlogPost (sortBy: "date", order: DESC) {
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

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script> 
import Layout from '~/layouts/Default.vue' 
export default {
    created () {
        this.$page.allBlogPost.edges.forEach(post => {
            if (!post.node.isBlogPost) this.noOfBlogPost++;
        });
    },
    components: { Layout },
    metaInfo: { title: 'Poems' },
    data () {
        return {
            noOfBlogPost: 0
        }
    },
    
}
</script>
