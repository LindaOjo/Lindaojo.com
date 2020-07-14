<template>
	<div class="themer" :class="theme">
		<div class="container">
			<div class="lg-container">
				<header class="header">
					<h1 class="h1">
						<strong>
							<g-link to="/">{{
								$static.metadata.siteName
							}}</g-link>
						</strong>
					</h1>
					<nav class="nav">
						<g-link class="nav__link" to="/">Home</g-link>
						<g-link class="nav__link" to="/blog/">Blog</g-link>
						<g-link class="nav__link" to="/poems/">Poems</g-link>
						<g-link class="nav__link" to="/contact/">Contact</g-link
						>
						<span class="nav__link" @click.prevent="toggleTheme" aria-label="Toggle light/dark mode">
							<i
								v-show="this.theme == 'darkMode'"
								class="p-1 fa fa-lightbulb"
								aria-hidden="true"
							></i>
							<i
								v-show="this.theme != 'darkMode'"
								class="p-1 fa fa-moon-o"
								aria-hidden="true"
							></i>
						</span>
                <!-- Menu Icon -->
                        <div>
                            <span @click="toggleMenu">
							<i class="fas fa-bars menu-icon"></i></span>
                        </div>					
					</nav>
				</header>
                <!-- Mobile Menu -->
				<div v-show="isOpen" class="relative h-auto py-2" v-click-outside="hideMenu">
					<div class="menu block text-center absolute w-full z-10 py-2 rounded-lg">
						<g-link class="menu-link" to="/">Home</g-link>
						<g-link class="menu-link" to="/blog/">Blog</g-link>
						<g-link class="menu-link" to="/poems/">Poems</g-link>
						<g-link class="menu-link" to="/contact/">Contact</g-link>
						
                        <span class="menu_link py-4 px-16" @click.prevent="toggleTheme" aria-label="Toggle light/dark mode">
							<i
								v-show="this.theme == 'darkMode'"
								class="fa fa-lightbulb"
								aria-hidden="true"
							></i>
							<i
								v-show="this.theme != 'darkMode'"
								class="fa fa-moon-o"
								aria-hidden="true"
							></i>
						</span>
					</div>
				</div>

				<transition name="fade" appear>
					<main>
						<!-- a wrapper for slot is needed -->
						<slot />
						<!-- the content -->
					</main>
				</transition>
            
			</div>
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

<style lang="scss" scoped>

.fade-enter-active {
	transition: opacity 0.7s;
}

.fade-enter {
	opacity: 0;
}

.themer {
     -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  transition: all 0.5s linear;
}

</style>

<script>
import ClickOutside from 'vue-click-outside';

export default {
    directives: {
        ClickOutside
    },
    created() {
        if (process.isClient) {
            this.theme = localStorage.getItem('theme') || 'lightMode';
        }
    },
	data() {
		return {
            isOpen: false,
			theme: 'darkMode'
		};
	},
	methods: {
        hideMenu() {
            this.isOpen = false
        },
		toggleMenu() {
			this.isOpen = true
        },
        toggleTheme() {
            this.theme = this.theme == 'darkMode' ? 'lightMode' : 'darkMode'
            localStorage.setItem('theme', this.theme);
        }
	},
};
</script>
