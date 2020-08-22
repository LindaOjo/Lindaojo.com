<template>
  <Layout>
    <h2 class="h2 text-center m-5" data-aos="fade-down-right">Blog</h2>
        <span v-for="post in $page.allBlogPost.edges" 
              :key="post.node.id">
            <g-link v-if="post.node.isBlogPost" class="post-card2 hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform"
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