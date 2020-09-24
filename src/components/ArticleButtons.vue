<template>
    <div>
       
        <div class="button-container inline-flex flex-wrap w-full justify-start">
            <a  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button mt-4 border-opacity-25 mr-8"
                data-text="Hey, I enjoyed reading this article by @LindaOjo_"
                data-show-count="false">
                <i class="fab fa-twitter fa-2x mr-2"></i>
            </a>

            <a  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button mt-4 border-opacity-25 mr-8"
                data-text="Hey, I enjoyed reading this article by @LindaOjo_"
                data-show-count="false">
                <i class="fab fa-facebook fa-2x mr-2"></i>
            </a>
            <a  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button mt-4 border-opacity-25 mr-8"
                data-text="Hey, I enjoyed reading this article by @LindaOjo_"
                data-show-count="false">
                <i class="fab fa-linkedin fa-2x mr-2"></i>
                
            </a>
<!-- 
            <a :href="songHref" class="button my-4 border-opacity-25 mr-10">
                Song <i class="fas fa-music ml-2"></i>
            </a>           -->
        </div>
         <hr class="my-10">
    </div>
</template>

<style scoped>

</style>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
export default {
    props: {
    songHref: String,
  }
}
</script>
