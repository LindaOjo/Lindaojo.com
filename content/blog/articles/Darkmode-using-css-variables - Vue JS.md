---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1605039310/darkmode_varvyx.png'
title: "Darkmode using CSS variables - Vue JS"
duration: "3 minutes"
excerpt: "First, we set up custom variables in CSS. Variables are also available in SASS and LESS in a slightly different format. Variables for the default theme should be placed..."
date: "2020-11-02"
isBlogPost: true
---
Dark Mode! Dark Mode! Dark Mode! Everybody wants it! That's why you are here and I will help you achieve it in Vue JS. Let's go!

Variables for the default theme should be placed under <strong class=code-word>:root</strong>, while the variables for dark mode can be placed under the data-theme attribute. Make sure data-theme is set to "darkMode" as shown below

```css{codeTitle: "main.css"}
:root {
    /* Variables for default theme (light-mode) */
    --background-color: white;
    --text-color: black;  
}

[data-theme="darkMode"] {
    /* Variables for dark mode */
    --background-color: black;
    --text-color: white;   
}
```
We can use the <a class="link" href="https://www.w3schools.com/css/css3_variables.asp" target="_blank">var() function</a> to insert the value of the variables we just created in our CSS. Take a look at the example below.

```css{codeTitle: "main.css"}
.example {
    background-color: var(--background-color);
    color: var(--text-color);
}
```
These variables help us switch between styles with ease.

💡 You would want users to be able to switch themes anywhere within your site so I recommend adding the theme <span class="code-word">toggle element</span> to your header.

To toggle between the two themes, let's add a function called <span class="code-word">Toggle theme</span> which will be triggered by a <span class="code-word">button</span>.

```ts{codeTitle: "header.vue"}
 <button  @click="toggleTheme" aria-label="Toggle themes">
    <span>Toggle Theme</span>  
 </button>


data() {
    return {
        theme: '' //When this property is empty, the theme is set to the default theme i.e. light mode.
    };
},

toggleTheme() {
            this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
}
```
Now we can toggle dark mode by clicking on the <span class="code-word">toggle theme button</span>.

We also need to set the theme when the page loads. We do this in Vue JS within the <a class="link" href="https://vuejs.org/v2/api/#mounted" target="_blank">Mounted Life-Cycle hook</a>.

```ts{codeTitle: "header.vue"}

    mounted() {
        let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
        document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
    },
```

We can now switch the content of the <span class="code-word">button</span> element based on the active theme using <a href="https://vuejs.org/v2/guide/conditional.html" target="_blank"> Vue's Conditional Rendering</a> as shown below.

```html{codeTitle: "header.vue"}
 <button @click="toggleTheme" aria-label="Toggle themes">
    <span v-if="this.theme == 'darkMode'"> Light</span>
    <span v-else> Dark</span>     
</button>
```

Here is a holistic view of the previous code snippets working together.

```ts{codeTitle: "header.vue"}
 <button  @click="toggleTheme" aria-label="Toggle themes">
    <span v-if="this.theme == 'darkMode'"> Light</span>
    <span v-else> Dark</span>     
</button>

<script>
export default {
    data() {
        return {
            theme: '' //When this property is empty, the theme is set to the default theme i.e. light mode.
        };
    },

    mounted() {
        let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
        document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
    },

    toggleTheme() {
                this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
                document.documentElement.setAttribute('data-theme', this.theme); // updates the data-theme attribute
                localStorage.setItem('theme', this.theme); // stores theme value in local storage
    }
}
<script>
```

Now we can toggle between light and dark mode and the user's preferred mode is stored locally, pretty neat!
