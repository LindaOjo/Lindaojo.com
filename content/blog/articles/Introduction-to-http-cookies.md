---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1620497291/cookies_lznktu.jpg'
title: "Introduction to HTTP Cookies"
duration: "4 minutes"
excerpt: "We have all accepted cookies from random websites. What exactly do websites use these snacks for? "
date: "2021-05-09"
isBlogPost: true
---

I heard the british use biscuits instead of cookies...weird.

Okay, let's focus.

<h3>What are Cookies</h3>

Cookies, more properly called HTTP cookies, are small bits of data stored as text files on a browser. Cookies associate bits of data to a specific user.

Cookies are mainly used for three purposes:

<h4>Session management</h4>

Logins, game scores, or anything else the server should remember.

<h4>Personalization</h4>

User preferences, themes, and other settings.

For example, a user's preferences such as language and preferred theme could be saved for future sessions.

<h4>Tracking</h4>

Recording and analyzing user behavior.

When a user visits a shopping website and searches for an item, the item gets saved in their browser history. Cookies can read browsing history so similar are shown to the user next time they visit.

<h3>Types of Cookies</h3>

<h4>Session cookies</h4>

Session cookies, also known as 'temporary cookies', help websites recognise users and the information provided when they navigate through a website. Session cookies only retain information about a user's activities for as long as they are on the website. Once the web browser is closed, the cookies are deleted.

<h4>Permanent cookies</h4>

Permanent cookies are also known as 'persistent cookies'. They remain in operation even after the web browser has closed. For example they can remember login details and passwords so web users don't need to re-enter them every time they use a site.

<h4>Third-party cookies</h4>

Third-party cookies are installed by third-parties with the aim of collecting certain information from web users to carry out research into, for example, behaviour, demographics or spending habits. They are commonly used by advertisers who want to ensure that products and services are marketed towards the right target audience.

<h4>Flash cookies</h4>

Flash cookies are also known as 'super cookies'. They are independent from the web browser. They are designed to be permanently stored on a user's computer. These types of cookies remain on a user's device even after all cookies have been deleted from their web browser.

<h4>Zombie cookies</h4>

Zombie cookies are a type of flash cookie that are automatically re-created after a user has deleted them. This means they are difficult to detect or manage. They are often used in online games to prevent users from cheating, but have also been used to install malicious software onto a user's device.

<h4>Secure Cookies</h4>

Only HTTPS websites can set secure cookies, i.e., cookies with encrypted data. Mostly, the checkout or payment pages of e-commerce websites have secure cookies to facilitate safer transactions. Similarly, online banking websites are required to use secure cookies for security reasons.

<h3>Creating Cookies with Vanilla JavaScript</h3>

<strong>NOTE: For the code below to work, your browser has to have local cookies support turned on.</strong>

JavaScript can create, read, and delete cookies with the document.cookie property.

With JavaScript, a cookie can be created by setting a `cookie-name` and `cookie-value` as shown below.

```js
document.cookie = "username=LindaOjo";
```
The `cookie-name` above is `username` and it's corresponding value is `LindaOjo`

You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:

```js
document.cookie = "username=LindaOjo; expires=Wed, 1 Oct 2022 12:00:00 UTC";
```

With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

```js
document.cookie = "username=LindaOjo; expires=Wed, 1 Oct 2022 12:00:00 UTC; path=/";
```

Handling Cookies using just vanilla JavaScript can get tedious real quick that's why I prefer using the <a class="link" href="https://www.npmjs.com/package/js-cookie" target="_blank">JavaScript Cookie Package</a>


<h3>Handling Cookies with <a class="link" href="https://www.npmjs.com/package/js-cookie" target="_blank">JavaScript Cookie Package</a></h3>

JavaScript Cookie is a simple lightweight JavaScript API for handling cookies. It works on all browsers, accepts any character, heavily tested and requires no dependency. Awesome!

<h4>Installation</h4>

Run the command below in your root folder.

```js
npm install js-cookie --save
```

<h4>Cookie Attributes</h4>
<br>

<li><i>Expire:</i> define when the cookie will be removed. Value can be a Number which will be interpreted as days from time of creation or a Date instance.</li>
<li><i>Path:</i> a String indicating the path where the cookie is visible. </li>
<li><i>Domain:</i> a String indicating a valid domain where the cookie should be visible. The cookie will also be visible to all subdomains. </li>
<li><i>Secure:</i> Either true or false, indicating if the cookie transmission requires a secure protocol (https).
</li>


<h4>Create a cookie</h4>

We can create a cookie that valid across the entire website by providing the name and the value as shown below.

```js
import Cookies from 'js-cookie';

Cookies.set('name', 'value');
```

We can specify how long it takes for a cookie to expire by passing an object that contains the number of days before expiration as the third argument in the `Cookie.set` method. The cookie that's created below expires after 7 days. By default, a cookie is removed when the user closes the browser.

```js
import Cookies from 'js-cookie';

Cookies.set('name', 'value', { expires: 7 });
```

Next,We can create an secure expiring cookie that's only valid to the path of the current page. The path is add to the previous Object which contains the expiration date.

```js
Cookies.set('name', 'value', { expires: 7, path: '', secure: true });
```

<h4>Read cookie</h4>

The point of creating cookies is so we can use them later. We can access already existing cookies using the `Cookie.get` method. Let's create and read a real cookie called 'theme'.

```js
import Cookies from 'js-cookie';

Cookies.set('theme', 'dark');
Cookies.get('theme') // => 'dark'
```

You can also update a cookie by overriding it's value

```js
Cookies.set('theme', 'light');
```

Now the theme cookie has a value of 'light'.

We can get all cookies present at once by calling `Cookies.get` method without passing in any arguments. An object containing all cookies is returned in this case.

```js

Cookies.get(); // => { theme: 'light' }

```

<h4>Delete cookie</h4>

You can delete cookies that are globally accessible running the `Cookie.remove` method with just the first argument which is `value`  

```js
Cookies.remove('theme');
```

<strong>Note:</strong> when deleting a cookie and you are not relying on the default attributes, you must pass the exact same path and domain attributes that were used to set the cookie.
Let us set and delete a cookie valid to the path of the current page as an example.

```js
Cookies.set('direction', 'north', { path: '' });
Cookies.remove('direction'); // fail!
Cookies.remove('direction', { path: '' }); // removed!
```

That's a wrap! This is a simple introduction to HTTPS Cookies,I trust you learnt a lot.


