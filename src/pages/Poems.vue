<template>
  <Layout>
    <h2 class="h2 text-center m-5 scale-up-center">Poems</h2>
    <div class="inline-flex h-8 justify-between items-center w-full">
        <div>
            <h3 class="h3" v-if="this.noOfBlogPost > 1">{{this.noOfBlogPost}} Posts</h3>
            <h3 class="h3" v-if="this.noOfBlogPost == 1">{{this.noOfBlogPost}} Post</h3>
        </div>
        <div>
            <a href="#subscribe" class="button subscribe-button mr-8">Subscribe</a>
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
    <div id="subscribe">
        <SubscriptionForm :page="'poem'">></SubscriptionForm>
    </div>
    
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

<script> 
import SubscriptionForm from './../components/SubscriptionForm';
import Layout from '~/layouts/Default.vue' 
export default {
    created () {
        this.$page.allBlogPost.edges.forEach(post => {
            if (!post.node.isBlogPost) this.noOfBlogPost++;
        });
    },
    components: { 
        Layout,
        SubscriptionForm
    },
    metaInfo: { title: 'Poems' },
    data () {
        return {
            noOfBlogPost: 0
        }
    },
    
}
</script>
