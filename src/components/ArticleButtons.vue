<template>
    <div>
        
        <div class="button-container links">
            <h3 class="mr-8 h3">Share:</h3>
            <a  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button mt-4 border-opacity-25 mr-8"
                data-text="Hey, I enjoyed reading this article by @LindaOjo_"
                data-show-count="false">
                <i class="fab fa-twitter mr-2"></i>
            </a>

            <a  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button mt-4 border-opacity-25 mr-8"
                data-text="Hey, I enjoyed reading this article by @LindaOjo_"
                data-show-count="false">
                <i class="fab fa-linkedin mr-2"></i>  
            </a>

            <a  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button mt-4 border-opacity-25"
                data-text="Hey, I enjoyed reading this article by @LindaOjo_"
                data-show-count="false">
                <i class="fab fa-facebook mr-2"></i>
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

a:hover {
    color: var(--primary);
}

</style>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
export default {
    props: {
    songHref: String,
  }
}
</script>
