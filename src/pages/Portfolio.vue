<template>
  <Layout class="">
      <h1 class="h2 text-center m-5 " data-aos="flip-right" data-aos-duration="1500">
          Portfolio
      </h1>
        <g-link class="project-card hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform">
            <div class="bg-gray-200 edgy">
                <g-image class="project-picture" src="./../../static/images/profile-pic.jpg" alt="profile picture"></g-image>
            </div>
            
            <div class="p-4">
                <h2 class="h2 text-center lg:pb-4">Doggy Website</h2>
                <p class="excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti animi debitis modi officia autem
                velit excepturi, asperiores exercitationem
                </p>
            </div>
        </g-link>
        <g-link class="project-card hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform">
            <div class="bg-gray-200 edgy">
                <g-image class="project-picture" src="./../../static/images/profile-pic.jpg" alt="profile picture"></g-image>
            </div>
            
            <div class="p-4">
                <h2 class="h2 text-center lg:pb-4">Fishy Website</h2>
                <p class="excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti animi debitis modi officia autem
                velit excepturi, asperiores exercitationem
                </p>
            </div>
        </g-link>
        <g-link class="project-card hover:border-blue-500 hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out transform">
            <div class="bg-gray-200 edgy">
                <g-image class="project-picture" src="./../../static/images/profile-pic.jpg" alt="profile picture"></g-image>
            </div>
            
            <div class="p-4">
                <h2 class="h2 text-center lg:pb-4">Extra Fishy Website</h2>
                <p class="excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti animi debitis modi officia autem
                velit excepturi, asperiores exercitationem
                </p>
            </div>
        </g-link>
  </Layout>
</template>

<script> 
import Layout from '~/layouts/Default.vue';

export default {
     components:
      { Layout
      },
       metaInfo: { title: 'Portfolio' }
}
</script>
