<template>
  <Layout>
    <h2 class="h2 text-center m-5 scale-up-center">Articles</h2>
    <div class="inline-flex h-8 justify-between items-center w-full">
        <div>
            <h3 class="h3" v-if="this.noOfBlogPost > 1">{{this.noOfBlogPost}} Posts</h3>
            <h3 class="h3" v-if="this.noOfBlogPost == 1">{{this.noOfBlogPost}} Post</h3>
        </div>
        <div class="h-auto">
            <a href="#subscribe" class="button subscribe-button mr-5">Subscribe</a>
        </div>   
    </div>
    <div>
        <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
            <g-link v-if="post.node.isBlogPost" 
                    :to="post.node.path"
                    class="post-card w-full hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform">
                <div class="inline-block w-full">
                    <div>
                        <h2 class="h3 my-2">{{post.node.title}}</h2>
                        <p class="excerpt lg:w-5/6 sm:w-full">
                        {{post.node.excerpt}}
                        </p>
                    </div>
                    <div class="text-right">
                        <p>{{post.node.date}}</p>
                    </div>
                </div>               
            </g-link>
        </span>
    </div>
    <div id="subscribe">
        <SubscriptionForm :page="'article'">></SubscriptionForm>
    </div>
    
    
  </Layout>
</template>

<page-query>
    query {
        allBlogPost (sortBy: "date", order: DESC){
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

<script defer> 

import Layout from '~/layouts/Default.vue';
import SubscriptionForm from './../components/SubscriptionForm';
export default {
    created () {
        this.$page.allBlogPost.edges.forEach(post => {
            if (post.node.isBlogPost) this.noOfBlogPost++;
        });
    },
    components: { 
        Layout,
        SubscriptionForm
    },
    metaInfo: { title: 'Articles' },
    data () {
        return {
            noOfBlogPost: 0
        }
    },

}
</script>

<style scoped>
@media (max-width: 768px) {
	.h3 {
		@apply pt-3;
	}
}
</style>

