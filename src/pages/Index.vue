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
        </div>
        <div class="fade-in profile-picture-container relative" data-aos="flip-right" data-aos-duration="1500">
            <p class="abeg">Abeg, you are making me dizzy!</p>
            <picture>
                <source alt="" srcset="./../../static/images/profile-pic.webp" type="image/webp">
                <g-image class="profile-picture" src="./../../static/images/profile-pic.jpg" alt="profile picture"></g-image>
            </picture>
        </div>
        
        
        <div class="fade-in" >
            <h3 class="text-center p-3 h3">
                Frontend Developer
            </h3>
        </div>
        <div class="bio fade-in lg:w-1/2 lg:text-xl sm:w-3/4 mx-auto my-5" >
            <p>Hi there! I'm Linda, a developer and designer in Lagos, Nigeria. I enjoy solving problems by creating beautiful
               and functional products. I also write and speak about web technologies. </p>          
        </div>
        <div class="fade-in inline-flex w-full justify-between">
            <h2 class="my-8 md:my-8 h2 sm:my-5">Latest Posts</h2>
            <a class="primary-color h3 my-auto" href="/blog" >View all</a>
        </div>
        <Latest/>
        <div class="footer fade-in">
            <p class="mx-auto mt-6 text-center">Created by Linda Ojo </p>
        </div> 
    </Layout>
</template>

<script> 
import Layout from '~/layouts/Default.vue';
import Latest from './../components/Latest';

export default {
     components:
      { Layout,
        Latest
       },
       metaInfo: { title: 'Home' },

    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>

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

$particleSize: 10vmin;
$animationDuration: 6s;
$amount: 10;
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
    #e45a832d,
    #ffacac24
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

/* Particles background inspired by Louis Hoebregts (https://codepen.io/Mamboleoo/pen/BxMQYQ)*/

.footer {
     @apply w-full h-10 flex items-end text-center;
     margin-bottom: -1.5rem;
 }

}
</style>
