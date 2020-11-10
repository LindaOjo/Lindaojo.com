---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1605043758/undderrated_js_f6zyb7.png'
title: "Underrated JavaScript Array Methods – Part 2"
duration: "2 minutes"
excerpt: "JavaScript Array Methods are popular, some more than others. We are going to be looking through some methods you might have not heard of..."
date: "2020-11-09"
isBlogPost: true
---

Last week, we looked at a few JavaScript Array Methods which you can read about in my last article: <a>Underrated JavaScript Array Methods – Part 1</a>. In the nature of finishing what we start. We are going to discuss a few more Methods which I call Underdogs.


<h3>- reduceRight()</h3>

The <span class="code-word">copyWithin()</span>  method shallow copies part of an array to another location in the same array and returns it without modifying its length. Here is a example of this method in action

Syntax – <span class="code-word">arr.copyWithin(target, start?, end?)</span><br>

<span class="code-word">target</span>: the index position  at which to copy the sequence to.
The <span class="code-word">start</span> and <span class="code-word">end</span> argument is optional.

The <span class="code-word">start</span> index defaults to zero, while the <span class="code-word">end</span> index defaults to <span class="code-word">array.length</span>.

```js{codeTitle: "copyWithin()"}
const hearts = ['💜', '🧡', '💙', '🤍', ' 💚'];

// copy to index 0 the element at index 3
console.log(hearts.copyWithin(0, 3, 4));
// expected output: ["🤍", "🧡", "💙", "🤍", "💚"]

// copy to index 1 all elements from index 3 to the end
console.log(hearts.copyWithin(1, 3));
// expected output: ["💜", "🤍", "💚", "🤍", "💚"]

// copy to index 0 the element at index 4
console.log(hearts.copyWithin(0, 4));
// expected output: ["💚", "🧡", "💙", "🤍", "💚"]

```