<template>
  <div class="button-container inline-flex flex-wrap w-full justify-start">
      <a href="/contact" class="pink-button my-2 bg-pink-700 hover:bg-pink-600 border-pink-900 hover:border-pink-500  mr-10">Contact me</a> 
      <a :href="songHref" class="pink-button my-2 bg-pink-700 hover:bg-pink-600 border-pink-900 hover:border-pink-500">
        Song Recommendation <i class="fas fa-music ml-2"></i>
      </a>
  </div>
</template>

<style scoped>
.pink-button  {
    @apply text-white font-bold py-2 px-4 border-b-4 rounded;
    font-size: 0.8rem;
    transition: all ease 0.5s;
}
/* Larger devices */
@media (min-width: 769px) {
	.button-container {
        @apply justify-center; 
    }
    .pink-button {
        @apply my-0 mt-2;
        font-size: 1rem;
    }
}
</style>

<script>
export default {
    props: {
    songHref: String,
  }
}
</script>
