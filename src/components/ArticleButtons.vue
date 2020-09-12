<template>
    <div>
        <hr class="my-10">
        <div class="button-container inline-flex flex-wrap w-full justify-start">
            <a href="/contact" class="button my-2 border-opacity-25 mr-10">Contact me</a> 
            <a :href="songHref" class="button my-2 border-opacity-25">
                Song Recommendation <i class="fas fa-music ml-2"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
.button {
    @apply text-white font-bold py-2 px-4 rounded;
    font-size: 0.8rem;
    transition: all ease 0.5s;
    background-color: var(--primary);
     box-shadow: 0 4px #fff;
}

.button:focus {
    transform: scale(0.9);
}

.button:hover {
    opacity: 0.8;
}

.button:active {
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}

/* Larger devices */

@media (min-width: 769px) {

	.button-container {
        @apply justify-center; 
    }

    .big-button {
        @apply my-0 mt-2;
        font-size: 1rem;
        background-color: var(--primary);
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
