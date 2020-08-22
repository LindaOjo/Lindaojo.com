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
                        <g-link class="nav__link" to="/portfolio">Portfolio</g-link>
						<g-link class="nav__link" to="/blog/">Blog</g-link>
						<g-link class="nav__link" to="/poems/">Poems</g-link>
						<g-link class="nav__link" to="/contact/">Contact</g-link>
						<span class=" nav__link" @click.prevent="toggleTheme" aria-label="Toggle light/dark mode">
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
                        
                        <div class="flex p-1 lg:hidden"> <!--Hidden for large devices-->
                            <span class=" mx-5 " @click.prevent="toggleTheme" aria-label="Toggle light/dark mode">
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
                            <span @click="toggleMenu">
							    <i class="fas fa-bars menu-icon"></i>
                            </span>
                        </div>					
					</nav>
				</header>
                <!-- Mobile Menu -->

                    <div v-show="isOpen" class="menu absolute text-center w-4/5 z-10 py-2 rounded-lg">
                        <div v-click-outside="hideMenu">
                            <g-link class="menu-link" to="/">Home</g-link>
                            <g-link class="menu-link" to="/portfolio">Portfolio</g-link>
                            <g-link class="menu-link" to="/blog/">Blog</g-link>
                            <g-link class="menu-link" to="/poems/">Poems</g-link>
                            <g-link class="menu-link" to="/contact/">Contact</g-link>
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
	transition: opacity 1s;
}

.fade-enter {
	opacity: 0;
}

.safari > .nav__link:last-child { 
 border: 1px solid aquamarine;
}

.themer {
    -webkit-transition: all 0.7s linear;
    -moz-transition: all 0.7s linear;
    transition: all 0.7s linear;
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
            this.theme = localStorage.getItem('theme' || 'lightMode');
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
            if(!this.isOpen) return
            this.isOpen = false
        },
		toggleMenu() {
            this.isOpen = !this.isOpen
        },
        toggleTheme() {
            this.theme = this.theme == 'darkMode' ? 'lightMode' : 'darkMode'
            localStorage.setItem('theme', this.theme);
        }
	},
};
</script>
