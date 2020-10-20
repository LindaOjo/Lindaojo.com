<template>
	<div class="themer" :class="theme">
        <div :class="fadingDiv" class="h-full w-full"></div>   <!-- GIve illusion of transitioon --> 
		<div class="container">
			<div class="lg-container">
				<header class="header h-12">
					<h1 class="h1 title">
						<g-link to="/">Linda Ojo</g-link>
					</h1>
					<nav class="nav">
                        <div class="desktop-nav w-2/3 inline-flex items-end">
                            <span class="desktop-theme-switch  nav__link" @click="toggleTheme" aria-label="Toggle light/dark mode"> <!-- Desktop theme-switch-->
                                    <!-- Dark-cloud svg-->
                                <svg v-if="this.theme == 'lightMode'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#bedcfa" width="28px" height="28px">
                                    <path d="M342.8 352.7c5.7-9.6 9.2-20.7 9.2-32.7 0-35.3-28.7-64-64-64-17.2 0-32.8 6.9-44.3 17.9-16.3-29.6-47.5-49.9-83.7-49.9-53 0-96 43-96 96 0 2 .5 3.8.6 5.7C27.1 338.8 0 374.1 0 416c0 53 43 96 96 96h240c44.2 0 80-35.8 80-80 0-41.9-32.3-75.8-73.2-79.3zm222.5-54.3c-93.1 17.7-178.5-53.7-178.5-147.7 0-54.2 29-104 76.1-130.8 7.3-4.1 5.4-15.1-2.8-16.7C448.4 1.1 436.7 0 425 0 319.1 0 233.1 85.9 233.1 192c0 8.5.7 16.8 1.8 25 5.9 4.3 11.6 8.9 16.7 14.2 11.4-4.7 23.7-7.2 36.4-7.2 52.9 0 96 43.1 96 96 0 3.6-.2 7.2-.6 10.7 23.6 10.8 42.4 29.5 53.5 52.6 54.4-3.4 103.7-29.3 137.1-70.4 5.3-6.5-.5-16.1-8.7-14.5z"/>
                                </svg>
                                     <!-- Sun-cloud svg-->
                                <svg  v-if=" this.theme == 'darkMode'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#bedcfa" width="30px" height="30px">
                                    <path d="M575.2 325.7c.2-1.9.8-3.7.8-5.6 0-35.3-28.7-64-64-64-12.6 0-24.2 3.8-34.1 10-17.6-38.8-56.5-66-101.9-66-61.8 0-112 50.1-112 112 0 3 .7 5.8.9 8.7-49.6 3.7-88.9 44.7-88.9 95.3 0 53 43 96 96 96h272c53 0 96-43 96-96 0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3 43.7-43.7 114.7-43.7 158.4 0 9.7 9.7 16.9 20.9 22.3 32.7 9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2 237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2 81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3 8-4.7 16.3-8.8 25.2-11.7 5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z"/>
                                </svg>
                            </span>
                            <g-link class="nav__link" to="/">Home</g-link>
                            <g-link class="nav__link" to="/articles/">Articles</g-link>
                            <g-link class="nav__link" to="/poems/">Poems</g-link>
                            <g-link class="nav__link" to="/contact/">Contact</g-link>
                            <g-link to="https://www.zikoko.com/citizen/everything-you-need-to-know-about-the-endsars-protest/" class="nav__link text-red-700"><strong>#ENDSARS</strong></g-link>
                        </div>
                        					
<!-- Mobile Navigation -->
                        
                        <div class="mobile-nav inline-flex items-end" >
                            <span class="mobile-theme-switch  mr-5 " @click="toggleTheme" aria-label="Toggle light/dark mode"> <!-- Mobile theme-switch-->
                                 <!-- Dark-cloud svg-->
                                <svg v-if="this.theme == 'lightMode'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#bedcfa" width="28px" height="28px">
                                    <path d="M342.8 352.7c5.7-9.6 9.2-20.7 9.2-32.7 0-35.3-28.7-64-64-64-17.2 0-32.8 6.9-44.3 17.9-16.3-29.6-47.5-49.9-83.7-49.9-53 0-96 43-96 96 0 2 .5 3.8.6 5.7C27.1 338.8 0 374.1 0 416c0 53 43 96 96 96h240c44.2 0 80-35.8 80-80 0-41.9-32.3-75.8-73.2-79.3zm222.5-54.3c-93.1 17.7-178.5-53.7-178.5-147.7 0-54.2 29-104 76.1-130.8 7.3-4.1 5.4-15.1-2.8-16.7C448.4 1.1 436.7 0 425 0 319.1 0 233.1 85.9 233.1 192c0 8.5.7 16.8 1.8 25 5.9 4.3 11.6 8.9 16.7 14.2 11.4-4.7 23.7-7.2 36.4-7.2 52.9 0 96 43.1 96 96 0 3.6-.2 7.2-.6 10.7 23.6 10.8 42.4 29.5 53.5 52.6 54.4-3.4 103.7-29.3 137.1-70.4 5.3-6.5-.5-16.1-8.7-14.5z"/>
                                </svg>
                                 <!-- Sun-cloud svg-->
                                <svg  v-if=" this.theme == 'darkMode'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#bedcfa" width="30px" height="30px">
                                    <path d="M575.2 325.7c.2-1.9.8-3.7.8-5.6 0-35.3-28.7-64-64-64-12.6 0-24.2 3.8-34.1 10-17.6-38.8-56.5-66-101.9-66-61.8 0-112 50.1-112 112 0 3 .7 5.8.9 8.7-49.6 3.7-88.9 44.7-88.9 95.3 0 53 43 96 96 96h272c53 0 96-43 96-96 0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3 43.7-43.7 114.7-43.7 158.4 0 9.7 9.7 16.9 20.9 22.3 32.7 9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2 237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2 81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3 8-4.7 16.3-8.8 25.2-11.7 5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z"/>
                                </svg>
                            </span>
                            <!-- Mobile Menu Icon -->
                            <span @click="toggleMenu">
                                 <!-- three (3) bars svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#4d9cec" width="30px" height="30px">
                                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
                                </svg>
                            </span>
                        </div>					
					</nav>
				</header>
                <!-- Mobile Menu List -->

                    <div v-if="isOpen" :class="slide" class="menu absolute text-center w-4/5 z-10 py-2 rounded-lg">
                        <div v-click-outside="hideMenu">
                            <g-link class="menu-link" to="/">Home</g-link>
                            <g-link class="menu-link" to="/articles/">Articles</g-link>
                            <g-link class="menu-link" to="/poems/">Poems</g-link>
                            <g-link class="menu-link" to="/contact/">Contact</g-link>
                            <g-link to="https://www.zikoko.com/citizen/everything-you-need-to-know-about-the-endsars-protest/" class="menu-link text-red-700">#ENDSARS</g-link>
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
.title:hover {
    color: var(--primary);
}

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
    metaInfo()  {
        return {
            link: [
                { rel: 'icon', href:'https://res.cloudinary.com/lindaojo/image/upload/v1601407787/favicon_kbxn6x.png'}
            ]
        }
    },
    mounted() {
        let localTheme = localStorage.getItem('theme') || 'darkMode';
        if (localTheme == "darkMode") {
            this.theme = "darkMode";
            document.documentElement.setAttribute('data-theme', 'dark');
        } 
        else {
            this.theme = "lightMode";
            document.documentElement.setAttribute('data-theme', 'light');
        }
    },
	data() {
		return {
            isOpen: false,
            theme: 'darkMode',
            fadingDiv: false,
            showButton: false,
            slide: '',
		};
    },
	methods: {
        hideMenu() {
            if(!this.isOpen) return;
            this.isOpen = false;
        },
		toggleMenu() {
            this.isOpen = !this.isOpen;
            if (this.isOpen && !this.menuAnimate) this.slide = 'slide-bottom';
            
        },
        toggleTheme() {
            //Hack for gradient transition below. 
            //We transition into a class whose background colour is the same as the primary color of the gradient.
            //Then replace it with gradient class after a second.

            //stores the mode user is transitioning OUT of.
            let formerTheme = this.theme;

            // transitions to a background color.
            this.theme = formerTheme === 'darkMode' ?  'lightTransition' : 'darkTransition';

            //add gradient class after transition.
            setTimeout (() => { 
                if (formerTheme == 'darkMode') {
                    this.theme = "lightMode";
                    document.documentElement.setAttribute('data-theme', 'light');
                } else {
                    this.theme = 'darkMode';
                    document.documentElement.setAttribute('data-theme', 'dark');
                }
                localStorage.setItem('theme', this.theme);
            }, 900 ) 
        }
	},
};
</script>
