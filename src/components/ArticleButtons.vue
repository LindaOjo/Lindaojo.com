<template>
    <div>
        
        <div class="button-container mt-5 links">
            <h2 class="mb-5 h3">📢 Share</h2>

            <div>
                <ShareNetwork
                    network="facebook"
                    :url="prefixedUrl"
                    :title="title"
                    :description="excerpt"
                    hashtags="Frontend, Programming">
                    <span class="share-button ml-4 mr-8">
                        <i class="fab fa-facebook"></i>
                    </span>
                </ShareNetwork>

                <ShareNetwork
                    network="twitter"
                    :url="prefixedUrl"
                    :title="title"
                    :description="excerpt"
                    twitter-user="LindaOjo_">
                    <span class="share-button mt-4  mr-8">
                        <i class="fab fa-twitter"></i>
                    </span>
                </ShareNetwork>

                <ShareNetwork
                    network="whatsapp"
                    :url="prefixedUrl"
                    :title="title"
                    :description="excerpt"
                    hashtags="Frontend,Programming">
                    <span class="share-button mt-4">
                        <i class="fab fa-whatsapp mr-2"></i>
                    </span>
                </ShareNetwork>
            </div>

            
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

.share-button > i {
    font-size: 1.3rem;
}
</style>

<script>
export default {
    data() {
        return {
            prefixedUrl: `https://lindaojo.com${this.path}`
        }
    },
    props: {
        songHref: String,
        path: String,
        title: String,
        excerpt: String,
    },
}
</script>
