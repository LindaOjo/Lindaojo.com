<template>
  <Layout class="">
      <h2 class="h2 text-center m-5 " data-aos="flip-right" data-aos-duration="1500">
          Message Sent!
      </h2>
      <h3 class=" h3 text-center">
          Thanks for reaching out, you will hear back from me soon.
      </h3>

  </Layout>
</template>

<script> 
import Layout from '~/layouts/Default.vue';

export default {
     components:
      { Layout
      },
       metaInfo: { title: 'Message Sent!' }
}
</script>
