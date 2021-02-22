---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1613932905/watchers_zbwbrb.jpg'
title: "Introduction to Vue Watchers"
duration: "3 minutes"
excerpt: "In this article, we will take a deep dive into watchers, one of the core concepts in Vue.js..."
date: "2021-02-22"
isBlogPost: true
---
In this article, we will be discussing watchers, one of the core concepts in Vue.js.

Watchers, just as the name implies are used to watch out for changes in a property previously defined in the data object. It is triggered whenever the value of that property changes.

Let's create a watcher for an "answer" property below. The watcher must have the same name as the property being observed.

```js
export default {
  data() {
    return {
      answer: ''
    }
  },
  watch: {
    answer: function() {
      console.log(this.answer)
    }
  },
}
```
The Watcher above will log the ```answer``` property to the console anytime it's value changes.

We can also access the old property value and new property value in a Watcher by adding two optional parameters as shown below.

```js
export default {
  data() {
    return {
      answer: ''
    }
  },
  watch: {
    answer: function(oldAnswer, newAnswer) {
      console.log(`The answer has been changed from ${oldAnswer} to ${newAnswer}`)
    }
  },

}
```

If we want to monitor the changes of a items within an array or properties of an object we use ```deep```.

```js
export default {
  data() {
    return {
      person: {
          name: 'Linda',
          gender: 'Female',
          signedIn: false
      }
    }
  },
  watch: {
    person: {
      deep: true, // Vue now watches for changes within the person Object
      handler() {
        if (this.person.isSignedIn) this.records++
      }
    }
  },

}
```

For instance we can use a watcher to monitor the number of times a user has signed in the Dummy App below.

<iframe height="265" style="width: 100%;" scrolling="no" title="Watchers" src="https://codepen.io/LindaOjo/embed/qBqPZYm?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/LindaOjo/pen/qBqPZYm'>Watchers</a> by Linda
  (<a href='https://codepen.io/LindaOjo'>@LindaOjo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>




