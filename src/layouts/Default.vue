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
          <g-link class="nav__link" to="/poems/">Contact</g-link>
        </nav>
      </header>
      <slot />
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

