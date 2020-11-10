---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1605043758/undderrated_js_f6zyb7.png'
title: "Underrated JavaScript Array Methods – Part 1"
duration: "2 minutes"
excerpt: "JavaScript Array Methods are popular, some more than others. We are going to be looking through some methods you might have not heard of..."
date: "2020-11-09"
isBlogPost: true
---

JavaScript Arrays have built-in methods. These methods are unique functions that we apply to our arrays to carry out common manipulations on the array. This helps us save time as we don't have to write common functions from scratch every time.

JavaScript Array Methods are popular, some more than others. We are going to be looking through some methods you might have not heard of.


<h3>- copyWithin()</h3>

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

<h3>- Entries()</h3>

<span class="code-word">Entries()</span> is applied on an Object to return a new Array iterator object that allows you to iterate through the key/value pairs in the array. One could say <span class="code-word">Entries()</span> converts an object to a nested array.

```js{codeTitle: "entries()"}
//Imagine a user fills a form that returns the object below
const allergies = {
  'milk': true,
  'eggs': false,
  'peanuts': false
}

const allergiesArray = allergies.entries();

console.log(allergiesArray);
// expected output: 
 [
    ['milk', true],
    ['eggs', false],
    ['peanuts', true]
];

```

Now that you see how it works, you might be thinking why should we convert the <span class="code-word">allergies</span> Object to an Array.

Well, unlike Objects, Arrays can be manipulated using JavaScript Array methods such as
<a class="code-word"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target='_blank'>.filter()</a> or
<a class="code-word"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target='_blank'>.map()</a>.

Let me show you the importance by returning an array of allergies that the user marked as true.

```js{codeTitle: "entries()"}

let result = allergiesArray.filter(([key, value]) => value) // returns [['milk', true], ['peanuts', true]]
                           .map(item => item[0]); // returns ['milk','peanuts']

console.log(result)
// expected output:
['milk','peanuts'] //List of User's allergies
```

<h3>- Fill()</h3>

<span class="code-word">Fill()</span> method changes all elements in an array to a static value, from a <span class="code-word">start</span> index to an <span class="code-word">end</span> index. It returns the modified array.

Syntax – <span class="code-word">array.fill(value,  start?,  end?)</span><br><br>
<span class="code-word">Start</span> and <span class="code-word">end</span> are optional. The <span class="code-word">start</span> index defaults to zero, while the <span class="code-word">end</span> index defaults to <span class="code-word">array.length</span>.

```js{codeTitle: "fill()"}
const hearts = ['💜', '🧡', '💙', '🤍', ' 💚'];

// fill with 💖 from position 2
console.log(hearts.fill('💖', 2));
// expected output: ['💜', '🧡', '💖', '💖', ' 💖']

//fill the whole array
console.log(hearts.fill(💖));
// expected output: ['💖', '💖', '💖', '💖', ' 💖']

```