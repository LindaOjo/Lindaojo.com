<template>
  <div class="container">
    <div class="lg-container">

      <header class="header p-0 flex items-baseline">
        <h1 class="h1">
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
        </h1>

        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/blog/">Blog</g-link>
          <g-link class="nav__link" to="/poems/">Poems</g-link>
          <g-link class="nav__link" to="/contact/">Contact</g-link>
          <span @click="isOpen = !isOpen">
              <i v-if="isOpen" class="fa fa-times menu-icon"></i>
              <i v-if="!isOpen" class="fas fa-bars menu-icon"></i>
          </span>

        </nav>
      </header>

      <div :class="isOpen ? 'block' : 'hidden'" class="relative h-auto py-2 ">
        <div class="menu block text-center absolute w-full z-10 py-2 rounded-lg">
            <g-link class=" menu-link block p-4 m-4" to="/">Home</g-link>
            <g-link class=" menu-link block p-4 m-4" to="/blog/">Blog</g-link>
            <g-link class=" menu-link block p-4 m-4" to="/poems/">Poems</g-link>
            <g-link class=" menu-link block p-4 m-4" to="/contact/">Contact</g-link>
        </div>
      </div>


      <transition name="fade" appear>
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang ="scss" scoped>

.fade-enter-active {
  transition: opacity .9s;
}

.fade-enter {
  opacity: 0;
}

</style>

<script>
  export default {
    data () {
      return {
          isOpen: false
      }
    }
  }
</script>

