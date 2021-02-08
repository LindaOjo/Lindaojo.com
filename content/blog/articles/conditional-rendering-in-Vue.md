---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1612788205/conditional_rendering_dnlo0m.jpg'
title: "Conditional Rendering in Vue"
duration: "3 minutes"
excerpt: "Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false."
date: "2021-02-08"
isBlogPost: true
---

Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false.

Conditional Rendering can be implemented in Vue using the directives below

<p class="list-item"> 💚 v-if</p>
<p class="list-item"> 💚 v-else</p>
<p class="list-item"> 💚 v-else-if</p>
<p class="list-item"> 💚 v-show</p>


<h3>v-if</h3>

The ```v-if``` directive can used to conditionally render an element including other elements that may be within it. The block will only be rendered if the directive’s expression returns a <a class="link" href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy" target="_blank">truthy value</a>.

Example

```html
<h1 v-if="showGreeting">Welcome Home!</h1>
```
Because v-if is a directive, it has to be attached to a single element. But what if we want to toggle more than one element?

You can also add conditional rendering to a group of elements by wrapping them in a ```<template>``` element as shown below

```html
<template v-if="Chores"> 🙃
    <h1>Chores</h1>
    <ul>
        <li>Wash the cat</li>
        <l1>Do the dishes</li>
    <ul>
</template>
```
<template> element serves as an invisible wrapper and will not be displayed in the final rendered result.

<h3>v-else</h3>

The ```v-else``` directive can only be used immediately after the ```v-if``` directive. They follow the pattern of a typical if-else statement.

The content within the v-else element will be rendered if the condition set in the v-if element is not met.

```html
<template v-if="Chores"> 🙃
    <h1>Chores</h1>
    <ul>
        <li>Wash the cat</li>
        <l1>Do the dishes</li>
    <ul>
</template>
<h1 v-else> Watch television</h1> 😀
```
<h3>v-else-if</h3>

The ```v-else``` element gives you only one other option to render if ```v-if``` element's condition is not met.

```v-else-if``` serves as an “else if block” for v-if. It can also be chained multiple times so it enable you to have more than one option to render.

```html
<template v-if="Chores"> 🙃
    <h1>Chores</h1>
    <ul>
        <li>Wash the cat</li>
        <l1>Do the dishes</li>
    <ul>
</template>
<h1 v-else-if="Homework"> Do homework</h1>
<h1 v-else> Watch television</h1> 😀
```

<h3>v-show</h3>

```v-show``` is very similar to ```v-if```

The difference is that an element with ```v-show``` will always be rendered and remain in the DOM; ```v-show``` only toggles the display CSS property of the element.

```v-show``` does not work in the ```template``` element nor does it work with ```v-else```.

```v-if``` has higher toggle costs while ```v-show``` has higher initial render costs. So use ```v-show``` if you need to toggle something very often, and prefer ```v-if``` if the condition is unlikely to change at runtime.

You can play around with Conditional rendering using the vue Sandbox belwo.
Example



