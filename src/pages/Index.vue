<template>
    <Layout>
        <div class="background container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="fade-in profile-picture-container slide-in-elliptic-top-fwd relative">
            <picture>
                <g-image width="172" height="172" class="profile-picture" src="https://res.cloudinary.com/lindaojo/image/upload/c_scale,w_253/v1601738933/profile-pic_dlexyg.jpg" alt="profile picture"></g-image>
            </picture>
        </div>
        
        
        <div class="fade-in" >
            <h2 class="text-center p-3 h2">
                Frontend Developer
            </h2>
        </div>
        <div class="bio fade-in lg:w-3/4 lg:text-2xl sm:w-3/4 mx-auto my-5" >
            <p>Hi there! I'm Linda, a frontend developer in Lagos, Nigeria. I enjoy solving problems by creating beautiful
               and functional products. I also write and speak about web technologies. </p>          
        </div>

        <div class="fade-in inline-flex w-full justify-between items-end mt-8 md:mt-8 sm:mt-5">
            <h2 class="h2">
                <svg class="inline arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ffffff" width="25px" height="25px">
                    <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"/>
                </svg> Latest Posts
            </h2>
            <a class="primary-color h3" href="/articles" >View all</a>
        </div>

        <Latest/>
         
        <div class="footer fade-in">
            <div class="flex justify-center">
                <a href="/contact" class="button my-2 px-5 text-center text-lg">Contact Me</a> 
            </div>
            <div class="links sm:w-3/4 lg:w-1/2 mx-auto flex" >
                <div class="inline-flex w-full justify-center mt-6">
                        <a class="md:mr-16 mr-8 flex flex-col items-center" href="https://twitter.com/LindaOjo_" title="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff" width="20px" height="20px">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                            </svg>
                            <p>Twitter</p>
                        </a>  
                        <a class="md:mr-16 mr-8 flex flex-col items-center" href="https://github.com/LindaOjo" title="Github">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="#ffffff" width="20px" height="20px">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            <p>Github</p>
                        </a>   
                        <a class="flex flex-col items-center" href='https://res.cloudinary.com/lindaojo/image/upload/v1601131597/Resume_Linda_Ojo_msdltz.png' 
                           title="Resume" rel="noopener" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#ffffff" width="20px" height="20px">
                                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"/>
                            </svg>
                            <p>Resume</p>
                        </a> 
                </div>
            </div>

            <p class=" mt-6 text-center mx-5">Designed and Developed by Linda Ojo </p>
        </div> 
    </Layout>
</template>

<script> 
import Layout from '~/layouts/Default.vue';
import Latest from './../components/Latest';

export default {
     components: { 
        Layout,
        Latest
    },
    metaInfo: { title: 'Home' },
}
</script>

<style lang="scss" scoped>

a > p:hover {
    color: var(--primary);
}

:root, body, .background {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
}

.background {
    position: static;
    height: 1px;
}

i {
    font-size: 1.3rem;
}

/* Mobile */
@media (max-width: 415px) {
	.arrows {
		display: none;
	}
}

$particleSize: 10vmin;
$animationDuration: 6s;
$amount: 15;
.background span {
  width: $particleSize;
  height: $particleSize;
  border-radius: $particleSize;
  backface-visibility: hidden;
  position: fixed; /* don't change, fixes scroll bug*/
  animation-name: move;
  animation-duration: $animationDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  $colors: (
    #8ec5fc5e ,
    #53a9eb62,
    #eb959524
  );
  @for $i from 1 through $amount {
    &:nth-child(#{$i}) {
      color: nth($colors, random(length($colors)));
      top: random(100) * 1%;
      left: random(100) * 1%;
      animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
      animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
      transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
      $blurRadius: (random() + 0.5) * $particleSize * 0.5;
      $x: if(random() > 0.5, -1, 1);
      box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
    }
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
/* Particles background inspired by Louis Hoebregts (https://codepen.io/Mamboleoo/pen/BxMQYQ)*/

.footer {
     @apply w-full h-auto flex flex-col items-center;
     margin-bottom: -1.5rem;
 }

</style>
