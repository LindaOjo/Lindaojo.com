---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1617049164/axios_qvjbjq.jpg'
title: "Beginner's Introduction to Axios"
duration: "2 minutes"
excerpt: "Axios is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and Node.js platforms"
date: "2021-03-29"
isBlogPost: true
---

Making HTTP requests to fetch/save data is a common task for any client-side JavaScript application. Axios is a JavaScript library that's used to perform HTTP requests. It works in both Browser and Node.js platforms.

It supports all modern browsers, including support for IE8 and higher.


<h3>Adding Axios to your project</h3>

You can add Axios to your project using any of the methods listed below.

Using npm:

```bash
$ npm install axios
```

Using bower:

```bash
$ bower install axios
```

Using yarn:

```bash
$ yarn add axios
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

<h3>Making a "GET" request</h3>

Let's query the <a href="https://dummyapi.io/explorer" target="_blank" class="link">DummyAPI</a> to retrieve a list of users, using `axios.get()`.

```js
import axios from 'axios';

const response = axios.get('https://dummyapi.io/data/api/user?limit=10')
const users = response.data
```

Since Axios always returns the query in an object data, we can rewrite the code above as using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" class="link">destructuring</a>

```js
import axios from 'axios';

const {data} = axios.get('https://dummyapi.io/data/api/user?limit=10')
const users = data;

```

<h3>Making a "POST" request</h3>

A POST request is used to add new data on the Backend. A POST request is similar to a GET request, but instead of `axios.get`, you use `axios.post`.

A POST Request also accepts a second argument which is an Object containing the data that is to be added.

Let's add a new user below.

```js
import axios from 'axios';

let newUser = {
    name: 'John',
    email: 'john@gmail.com'
    Gender: Male,
}

addUser (user) => {
    axios.post('https://dummyapi.io/data/api/user/', user)
}

addUser(newUser);
```

This is a quick introduction for beginners. Axios enables you to do so much more. You can read about more advanced Axios methods in this <a href="https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/#postjson" target="_blank">Article by Faraz Kelhini</a> 