<template>
    <div>
        
        <div class="button-container links">
            <h2 class="mr-8 bg">Share:</h2>

            <ShareNetwork
                network="facebook"
                :url="path"
                :title="title"
                :description="excerpt"
                hashtags="Frontend, Programming">
                <span class="share-button mt-4  mr-8">
                    <i class="fab fa-facebook"></i>
                </span>
            </ShareNetwork>

            <ShareNetwork
                network="twitter"
                :url="path"
                :title="title"
                :description="excerpt"
                twitter-user="LindaOjo_">
                <span class="share-button mt-4  mr-8">
                    <i class="fab fa-twitter mr-2"></i>
                </span>
            </ShareNetwork>

            <ShareNetwork
                network="whatsapp"
                :url="path"
                :title="title"
                :description="excerpt"
                hashtags="Frontend,Programming">
                <span class="share-button mt-4  mr-8">
                    <i class="fab fa-whatsapp mr-2"></i>
                </span>
            </ShareNetwork>
<!-- 
            <a :href="songHref" class="button my-4 border-opacity-25 mr-10">
                Song <i class="fas fa-music ml-2"></i>
            </a>           -->
        </div>
         <hr class="my-10">
    </div>
</template>

<style scoped>
a, .share-button {
    color: var(--primary);
    cursor: pointer;
}
</style>

<script>
export default {
    props: {
        songHref: String,
        path: String,
        title: String,
        excerpt: String,
    },
}
</script>
