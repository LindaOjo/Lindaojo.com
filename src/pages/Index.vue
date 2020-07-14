<template>
    <Layout>
        <g-image class="profile-picture" src="./../../content/images/profile-pic.jpg"></g-image>
        <div>
            <h3 class="text-center p-3 h3 font-bold" data-aos="fade-right">
                Software Developer and Product Designer
            </h3>
        </div>
        <div class="bio lg:w-1/2 lg:text-xl sm:w-3/4 mx-auto py-4" data-aos="fade-right" >
            <p>Hi there! I'm Linda, a developer and designer in Lagos, Nigeria. I enjoy solving problems by creating beautiful
               and functional products. I also write and speak about web technologies. </p>          
        </div>
        <div>
            <h2 class="md:p-8 h2 font-semibold">Latest Posts</h2>
        </div>
        <Latest/>
        <span class="flex justify-center">
            <p class="mx-auto mt-5">Created by Linda Ojo </p>
        </span>
        
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
       metaInfo: { title: 'Home' }
}
</script>

