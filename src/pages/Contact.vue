<template>
  <Layout class="">
      <h1 class="h2 text-center m-5 " data-aos="fade-down-right">
           Don't be a stranger
      </h1>
      <p class="sm:w-3/4 lg:w-1/2 my-5 mx-auto lg:text-xl">Feel free to get in touch with me. I am open to discussing new projects, creative ideas or oppurtunies.</p>
      <div class="flex justify-center mx-auto mt-2 p-5 relative">
           <button data-aos="fade-right" class="button bg-pink-700 hover:bg-pink-600 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-pink-500 rounded">
               <a>Send an email</a>
               <!-- href="mailto:lindaojof@gmail.com" -->
           </button>
      </div>
      <div class="links sm:w-3/4 lg:w-1/2 my-5 mx-auto" >
              <p class="my-5 pr-5">
                  <a href="https://twitter.com/LindaOjo_" title="Twitter">
                    <i class="fa fa-twitter fa-2x pr-2" aria-hidden="true"></i> Twitter
                  </a>  
              </p>

              <p class="my-5 pr-5">
                  <a href="https://github.com/LindaOjo" title="Github">
                    <i class="fa fa-github fa-2x pr-2" aria-hidden="true"></i> Github
                  </a>   
              </p>    
      </div>

      
     
  </Layout>
</template>

<script> 
import Layout from '~/layouts/Default.vue' 
export default {
     components:
      { Layout },
       metaInfo: { title: 'Contact Me' }
}
</script>

<style scoped>
@import "./../styles/variables.css";

.links {
    
}

.links > a:hover{
    cursor: pointer;
    color: var(--light-blue);
}

.button {
    transition: all ease 0.3s;
}

.button:focus {
  transform: scale(0.9)
}
</style>