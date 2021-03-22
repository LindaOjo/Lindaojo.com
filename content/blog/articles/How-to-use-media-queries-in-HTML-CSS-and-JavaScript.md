---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1616440805/three-way-knot_cnrrze.jpg'
title: "How to use Media Queries in HTML, CSS and JavaScript"
duration: "2 minutes"
excerpt: "Media queries are commonly associated with CSS, but they can be used in HTML and JavaScript as well."
date: "2021-03-22"
isBlogPost: true
---

Media queries can be used to check many things, such as:
<ol class="ml-8">
    <li>width and height of the viewport</li>
    <li>width and height of the device</li>
    <li>orientation (is the tablet/phone in landscape or portrait mode?)
    resolution</li>
    <li>Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.</li>
</ol>

Media queries are commonly associated with CSS, but they can be used in HTML and JavaScript as well.

<h3>Media Queries in HTML</h3>

We can use media queries to determine what `<link>` to use in the `<head>` of an HTML file as shown below.

```html
<html>
  <head>
    <link rel="stylesheet" href="all.css" media="all" />
    <!-- Use for screens that have a width of at least 50rem -->
    <link rel="stylesheet" href="small.css" media="(min-width: 50rem)" />
    <!-- Use for screens that have a width of at least 80rem -->
    <link rel="stylesheet" href="medium.css" media="(min-width: 80rem)" />
</html>

```

We can use media queries on the `<style>` element too.

```html
<style media="all and (min-width: 800px)">
  h1 {
    font-size: 2rem;
    color: green;
  }
</style>
```

Media queries can also be placed within the `<picture>` element. How? By specifying them on the `<source>` element which lets us pass multiply image options.

```html
<picture>
  <!-- Use image in landscape mode -->
  <source srcset="alligator.png" media="(orientation: landscape)">
  <!-- Use image in portrait mode -->
  <source srcset="girrafe.png" media="(orientation: portrait)">
</picture>
```

<h3>Media Queries in CSS</h3>

This is the most common environment for writing media queries.

The `@media` rule is used in media queries to apply different styles for different media types/devices.

```css
@media only screen and (min-device-width: 500px) and (max-device-width: 8000px) {
  .container {
    display: hidden;
  }
}
```

<h3>Media Queries in JavaScript</h3>

You can add media queries to your JavaScript by using the  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia" class="link" target="_blank">window.matchMedia()</a> method.

For instance, if we want to change the background color of the `<body>` to "red" when the screen width exceeds 600px, we can do that by first creating a constant using "window.matchMedia()" as shown below.

```js
// Create a media condition that targets viewports at least 768px wide
const mediaQueryCondition = window.matchMedia( '( min-width: 600px )' )
```

```js
if ( mediaQueryCondition.matches ) {
    document.body.style.cssText = `
        background-color: red;
    `
}
```

That's it folks! You can now add media queries anywhere you want in the whole wild world.

See you next week!