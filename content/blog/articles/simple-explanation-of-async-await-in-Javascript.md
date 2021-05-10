---
image: "https://res.cloudinary.com/lindaojo/image/upload/v1612179240/async-await_rjyirp.jpg"
title: "Simple Explanation of Async-Await in Javascript"
duration: "3 minutes"
excerpt: "To fully appreciate the use of Async-Await you must first understand that by default, JavaScript is synchronous..."
date: "2021-02-01"
isBlogPost: true
---

To fully appreciate the use of Async-Await you must first understand that by default, JavaScript is synchronous.

<h3>Synchronous Functions</h3>

In synchronous functions, operations run simultaneously and you can't specify <strong>pausing or waiting</strong> points.

Example

```js
function solveC() {
    const A = 1;

    const B = 2;

    const C = A + B;

    console.log(C);
}

solveC(); // 3
```
But if for some reason there is a delay in getting the value 'B', JavaScript will execute other lines of code that aren't delayed.This could result in an error.

In the example below, 'B' is delayed using a promise. Let's check out what the results will be.

```js
function solveC() {
    const getB = () => {
      const executor = (resolve, _reject) => {
        setTimeout(() => resolve(2), 100);
      };
      return new Promise(executor); 
    }
    const A = 1;

    const B = getB();
    
    const C = A + B;

    console.log(C);
}

solveC(); // "1[object Promise]"
```
JavaScript logs the result before the promise above is fulfilled; 

What do we do to get the right result even if B is delayed? How do we ask Javascript to <strong>pause and wait</strong> for 'B'.

The answer is we make the function asynchronous. This is where ```async-await``` comes in.

<strong>Note</strong>: there are other ways to write asynchronous code. You could use <a href="https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/" class="link" >Callback functions</a> and <a href="https://www.freecodecamp.org/news/javascript-promises-explained/" class="link" target="_blank" rel="noopener">promises</a>.

<h3>Asynchronous Functions using Async-Await</h3>

To make a function Asynchronous we declare the function using the ```Async``` keyword.
The word “async” before a function means the function will always returns a <a class="link" href="https://medium.com/javascript-in-plain-english/truly-understanding-promises-in-javascript-cb31ee487860" target="_blank" rel="noopener">promise</a>.

The async function below...

```js
async function One() {
  return 1;
}
```
is the same as the normal function below that returns a promise.

```js
async function One() {
  return Promise.resolve(1);
}
```
We can ask JavaScript to wait for a promise to be fulfilled by using the ```await``` keyword. It has to be noted that it only makes the async function block wait and not the whole program execution.

The code block below shows how we solve our earlier problem with the use of async-await.

```js
async function solveC() {
    const getB = () => {
      const executor = (resolve, _reject) => {
        setTimeout(() => resolve(2), 100);
      };
      return new Promise(executor); 
    }
    const A = 1;

    const B = await getB(); //waits for promise to be resolved
    
    const C = A + B;

    console.log(C);
}

solveC(); // 3

```

<strong>Note</strong>: the ```await``` keyword can only be used within ```async``` functions.

That's it! Hope this was helpful cause I kept it light for beginners. If you want to read a more advanced explanation of async-await, I recommend <a class="link" href="https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb" target="_blank" rel="noopener">this article by Ashay Mandwarya</a>
