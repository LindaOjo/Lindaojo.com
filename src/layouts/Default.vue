<template>
	<div class="themer" :class="theme">
        <div :class="fadingDiv" class="h-full w-full"></div>   <!-- GIve illusion of transitioon --> 
		<div class="container">
			<div class="lg-container">
				<header class="header h-12">
					<h1 class="h1">
						<strong>
							<g-link to="/">Linda Ojo</g-link>
						</strong>
					</h1>
					<nav class="nav">
                        <div class="desktop-nav w-2/3 inline-flex">
                            <span class="desktop-light-switch nav__link" @click="toggleTheme" aria-label="Toggle light/dark mode">
                                <i class="p-1"
                                    :class="this.themeIcon"
                                    aria-hidden="true">
                                </i>    
                            </span>
                            <g-link class="nav__link" to="/">Home</g-link>
                            <g-link class="nav__link" to="/blog/">Blog</g-link>
                            <g-link class="nav__link" to="/poems/">Poems</g-link>
                            <g-link class="nav__link" to="/contact/">Contact</g-link>
                        </div>
                        					
<!-- Mobile Navigation -->
                        
                        <div class="mobile-nav" > <!--Hidden for large devices-->
                            <span class="mobile-light-switch  mr-5 " @click="toggleTheme" aria-label="Toggle light/dark mode">
                                <i class="p-1"
                                    :class="this.themeIcon"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <!-- Mobile Menu Icon -->
                            <span @click="toggleMenu">
							    <i class="fas fa-bars menu-icon"></i>
                            </span>
                        </div>					
					</nav>
				</header>
                <!-- Mobile Menu List -->

                    <div v-if="isOpen" class="menu absolute text-center w-4/5 z-10 py-2 rounded-lg">
                        <div v-click-outside="hideMenu">
                            <g-link class="menu-link" to="/">Home</g-link>
                            <g-link class="menu-link" to="/blog/">Blog</g-link>
                            <g-link class="menu-link" to="/poems/">Poems</g-link>
                            <g-link class="menu-link" to="/contact/">Contact</g-link>
                        </div>
                    </div>

                <!-- Transition -->
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

<style lang="scss" scoped>

.fade-enter-active {
	transition: opacity 1s;
}

.fade-enter {
	opacity: 0;
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
    mounted() {
        let localTheme = localStorage.getItem('theme') || 'darkMode';
        if (localTheme == "darkMode") {
            this.theme = "darkMode";
            this.themeIcon = 'fas fa-cloud-sun';
            document.documentElement.setAttribute('data-theme', 'dark');
        } 
        else {
            this.theme = "lightMode";
            this.themeIcon = 'fas fa-cloud-moon';
            document.documentElement.setAttribute('data-theme', 'light');
        }
    },
	data() {
		return {
            isOpen: false,
            theme: 'darkMode',
            fadingDiv: false,
            showButton: false,
            themeIcon: 'fas fa-cloud-sun'
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
            //Hack for gradient transition below. 
            //We transition into a class whose background colour is the same as the primary color of the gradient.
            //Then replace it with gradient class after a second.

            //stores the mode user is transitioning OUT of.
            let formerTheme = this.theme;

            // transitions to a background color.
            this.theme = formerTheme === 'darkMode' ?  'lightTransition' : 'darkTransition';
            this.themeIcon = formerTheme === 'darkMode' ?  'fas fa-cloud-sun' : ' fas fa-cloud-moon';

            //add gradient class after transition.
            setTimeout (() => { 
                if (formerTheme == 'darkMode') {
                    this.theme = "lightMode";
                    this.themeIcon = 'fas fa-cloud-moon';
                    document.documentElement.setAttribute('data-theme', 'light');
                } else {
                    this.theme = 'darkMode';
                    this.themeIcon = 'fas fa-cloud-sun';
                    document.documentElement.setAttribute('data-theme', 'dark');
                }
                localStorage.setItem('theme', this.theme);
            }, 900 ) 
        }
	},
};
</script>
