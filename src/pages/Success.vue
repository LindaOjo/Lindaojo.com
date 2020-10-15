<template>
  <Layout class="">
    <h2 class="h2 text-center m-5 scale-up-center">
        Message Sent!
    </h2>
    <h3 class=" h3 text-center">
        Thank you for reaching out, you will hear from me soon.
    </h3>
    <div class="flex justify-center my-16 w-full">
        <div  class="illustration mx-auto object-cover inline-flex justify-center">
            <g-image class="message_illustration mx-2" src="./../../content/images/speed.svg" alt="message illustration"></g-image>
            <g-image class="message_illustration mx-2" src="./../../content/images/message_sent.svg" alt="message illustration"></g-image>
        </div>
    </div>

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

<style scoped>
/* Larger devices */
@media (min-width: 769px) {
	.illustration {
		@apply w-40 h-40;
	}
}

/* Mobile */
@media (max-width: 768px) {
	.illustration {
		@apply w-20 h-20;
	}
}
</style>