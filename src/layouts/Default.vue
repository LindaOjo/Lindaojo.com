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
          <g-link class="nav__link  " to="/">Home</g-link>
          <g-link class="nav__link " to="/blog/">Blog</g-link>
          <g-link class="nav__link " to="/poems/">Poems</g-link>
          <g-link class="nav__link " to="/contact/">Contact</g-link>
        </nav>
      </header>
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

<style scoped>
.fade-enter-active {
  transition: opacity .9s;
}



.fade-enter {
  opacity: 0;
}
</style>