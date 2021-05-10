---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1609107494/this_JS_wjxoir.png'
title: "A simple explanation of 'this' - JavaScript"
duration: "2 minutes"
excerpt: "In this post, I will be sharing a simple and detailed explanation of 'this' keyword in JavaScript. "
date: "2020-12-28"
isBlogPost: true
---

'this' is a property of an execution context

In <strong>non–strict mode</strong>, 'this' refers to the Object that is executing the current function.

In <strong> <a class="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" trget ="_blank">strict mode</a></strong>, 'this' can be any value.

The value of 'this' depends on the context in which it is used. Let's dive in!

<h3>Global Context</h3>

When 'this' is used globally, (meaning it is not within a method or function) it automatically refers to the window object.

```js
console.log(this); // {window Object}
```

<h3>Function Context</h3>

<h4>Regular Function Context</h4>

'this' within a regular function that is not part of an Object also refers to the window Object as shown below 

```js
const showThis = () => {
    console.log(this); // {window Object}
}

//In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined, as shown in the following example:

const showThis = () => {
    'use strict'; // see strict mode
    console.log(this); // undefined
}

```
<h4>Constructor Function Context</h4>

When using the constructor function to create a new object, the 'new' operator creates an object and points 'this' to the newly created object.

```js
function Series (title) {
    this.title = title;
    console.log (this); // {Newly created Object}
}

const v = new Series ('The Office');  //  Create new Object using constructor function.
```

<h3>Method Context</h3>

A method is a function that is part of an Object.

'this' within a method refers to its parent Object.

```js
const things = {
    roses: 'red',
    sky: 'blue',
    snow:'white',
    showColor(){
        console.log(this); // {things Object}
        console.log(this.roses); // 'red'
    }
};
```

A callback function within a method would refer to the window Object unless a 'this' argument aka <i>thisArg</i> is provided.


The <i>thisArg</i> is an optional value to use as 'this' when executing callback function. Take a look at how this works using the forEach array method.


```js
Syntax 
// arr.forEach(callback(currentValue) {
//   // execute something
// }, [thisArg]);

const random = {
    title: 'Primary',
    colours: ['red'],
    showColours ()){
        this.colours.forEach(colour => {
            console.log(this.heading, colour) // Rosy red
        }, { heading: 'Rosy' }) // optional 'this' argument
    }
};
```
That's all folks, see you next week!