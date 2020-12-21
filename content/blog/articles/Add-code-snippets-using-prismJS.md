---
image: "https://res.cloudinary.com/lindaojo/image/upload/v1608541080/code_block_azkdxl.png"
title: "Add code snippets using Gridsome Prism.js plugin"
duration: "3 minutes"
excerpt: "Add code blocks and syntax highlights to your posts using Prism.js."
date: "2020-12-21"
isBlogPost: true
---
Code snippets are a key part of writing for any developer. In this post, I am going to walk you through a simple way to add code snippets to your posts.

<h3>Install plugin</h3>
<br>

install the prism.js plugin by running the command below in your terminal.

```html
npm i gridsome-plugin-remark-prismjs-all
```

<h3>Add plugin in gridsome.config.js</h3>
<br>

```js
// In your gridsome.config.js
transformers: {
    //Add markdown support to all file-system sources
    remark: { 
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'gridsome-plugin-remark-prismjs-all',
      ]
    }
  }
```
You could set custom class names which you can use for styling as shown below

```js
// In your gridsome.config.js
transformers: {
        plugins: [
            [
                "gridsome-plugin-remark-prismjs-all",
                {
                showLineNumber: true,
                highlightClassName: "gridsome-highlight",
                codeTitleClassName: "gridsome-code-title",
                classPrefix: "language-",
                },
            ]
        ]
    }
```
<h3>Add a theme in your main.js</h3>

There are 3 different themes presently available, you can import anyone as shown below

```js
require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
```

```js
require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");
```

```js
require("gridsome-plugin-remark-prismjs-all/themes/tomorrow.css");
```


<h3>Add Code Snippet to file</h3>

Wrap your code in triple backquotes then specifying the code language and title. Check out some examples and their resulting renders below.

Example 1

<pre>
```js{codeTitle: "Prism.js example1"}
    let number = 4;
    console.log(number);
``` 
</pre>

Render
```js{codeTitle: "Prism.js example1"}
    let number = 4;
    console.log(number);
```
Example 2

<pre>
```css{codeTitle: "Prism.js example2"}
body {
    min-height: 100vh;
    background-color: transparent;
    line-height: 1.5;
}
``` 
</pre>

Render
```css {codeTitle: "Prism.js example2"}
body {
    min-height: 100vh;
    background-color: transparent;
    line-height: 1.5;
}
```

