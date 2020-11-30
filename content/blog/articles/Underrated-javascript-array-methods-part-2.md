---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1605043758/undderrated_js_f6zyb7.png'
title: "Underrated JavaScript Array Methods – Part 2"
duration: "2 minutes"
excerpt: "Last week, we looked at a few JavaScript Array Methods which you can read about in my last article. This week, we are going to discuss a few more methods..."
date: "2020-11-16"
isBlogPost: true
---

Last week, we looked at a few JavaScript Array Methods which you can read about in my last article: <a href="https://www.lindaojo.com/blog/underrated-java-script-array-methods-part-1/" target="_blank" rel="noopener" class="link">Underrated JavaScript Array Methods – Part 1</a>. We are rounding up this week with a few more methods.

<h3>- flat()</h3>

This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Syntax – <span class="code-word">array.flat(depth?)</span><br>

<strong>Note: Arguments followed by a question mark are optional.</strong>

```js{codeTitle: "flat()"}
const array = [ [1, 2], [3, 4], [[5, 6]] ];

const flattenedOnce = array.flat();
const flattenedTwice = array.flat(2);

console.log(flattenedOnce);
// expected output: Array [1, 2, 3, 4, [5, 6]]

console.log(flattenedTwice);
// expected output: Array [1, 2, 3, 4, 5, 6]
```

<h3>- reduceRight()</h3>

The <span class="code-word">reduceRight()</span> method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. This method comes in pretty handy when you want to specify items in a left-to-right manner but execute them in a right-to-left manner.

You could use <span class="code-word">reduceRight()</span> method to replace <span href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noopener" class="code-word"> Array.reverse().reduce()</span>

```js{codeTitle: "reduceRight()"}
const numbers = [[0, 0], [1, 1], [2, 2]];

const modifiedNumbers = numbers.reduceRight( (a, b) => a.concat(b) );

console.log(modifiedNumbers);
// expected output: Array [2, 2, 1, 1, 0, 0]
```

<h3>- lastIndexOf()</h3>

The <span class="code-word">lastIndexOf()</span> method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at <span class="code-word">fromIndex</span> if this argument is available. The <span class="code-word">lastIndexOf()</span> method is case-sensitive.

Syntax – <span class="code-word">array.lastIndexOf(searchValue,  fromIndex?)</span><br>

```js{codeTitle: "lastIndexOf()"}
const names = ['John', 'Bolanle', 'Dwight', 'Mary'];

console.log( names.lastIndexOf('Dwight') );
// expected output: 2

// -1 is returned if the searchValue is absent in the Array 
console.log( names.lastIndexOf('Tiger') );
// expected output: -1
```
See you next week 💙
