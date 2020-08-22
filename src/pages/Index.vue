<template>
    <Layout>
        <div data-aos="flip-right" data-aos-duration="1500">
            <picture>
                <source alt="" srcset="./../../static/images/profile-pic.webp" type="image/webp">
                <g-image class="profile-picture" src="./../../static/images/profile-pic.jpg" alt="profile picture"></g-image>
            </picture>
        </div>
        
        
        <div>
            <h3 class="text-center p-3 h3">
                Software Developer and User Interface Designer
            </h3>
        </div>
        <div class="bio lg:w-1/2 lg:text-xl sm:w-3/4 mx-auto my-5" >
            <p>Hi there! I'm Linda, a developer and designer in Lagos, Nigeria. I enjoy solving problems by creating beautiful
               and functional products. I also write and speak about web technologies. </p>          
        </div>
        <div>
            <h2 class="md:m-8 h2 sm:m-5">Latest Posts</h2>
        </div>
        <Latest/>
        <div class="footer">
            <p class="mx-auto">Created by Linda Ojo </p>
        </div>   
    </Layout>
</template>

<script> 
import Layout from '~/layouts/Default.vue';
import Latest from './../components/Latest';

export default {
     components:
      { Layout,
        Latest
       },
       metaInfo: { title: 'Home' },

    data() {
        return {
           
        }
    },
}
</script>

<style scoped>
 .footer {
     @apply w-full h-10 flex items-end text-center;
     margin-bottom: -1.5rem;
 }
</style>