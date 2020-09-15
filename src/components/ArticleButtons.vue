<template>
    <div>
        <hr class="my-10">
        <div class="button-container inline-flex flex-wrap w-full justify-start">
            <a  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button button my-4 border-opacity-25 mr-10"
                data-text="Hey, I enjoyed reading this article by @LindaOjo_"
                data-show-count="false">
                <i class="fab fa-twitter mr-2"></i>
                Share Post</a>

            <a href="/contact" class="button my-4 border-opacity-25 mr-10">Contact me</a> 
            <a :href="songHref" class="button my-4 border-opacity-25 mr-10">
                Song Recommendation <i class="fas fa-music ml-2"></i>
            </a>
                
        </div>
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
