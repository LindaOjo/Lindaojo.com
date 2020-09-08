<template>
  <Layout>
    <h2 class="h2 text-center m-5" data-aos="flip-right" data-aos-duration="1500">Blog</h2>
        <span v-for="post in $page.allBlogPost.edges" :key="post.node.id">
            <div v-if="post.node.isBlogPost" class="post-card hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform">
                <div>
                    <g-link :to="post.node.path">
                        <div class="block">
                            <h2 class="h3">{{post.node.title}}</h2>
                            <p class="excerpt">
                            {{post.node.excerpt}}
                            </p>
                        </div>
                    </g-link>
                </div>    
            </div>    
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
import Layout from '~/layouts/Default.vue' 
export default {
     components:
      { Layout },
       metaInfo: { title: 'Blog' }
}
