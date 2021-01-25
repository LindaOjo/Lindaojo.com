---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1611512000/sharing-links_p4iqei.png'
title: "How to add Social Media Sharing Links to a Vue Website"
duration: "2 minutes"
excerpt: "A step by step guide on how to add social media sharing links to your favorite social media platforms on your website. "
date: "2021-01-25"
isBlogPost: true
---

In the article, I share a step by step guide on how to add sharing links to your Vue website. This will enable your users to share your website page on social media with just a click of a button, literally.

We are using the <a class="link" href="https://www.npmjs.com/package/vue-social-sharing" target="_blank">Vue Social Sharing</a> package to add sharing links. This package supports sharing on over 20 networks including all the favourites like Twitter, Facebook, WhatsApp, email and much more. You can <a class="link" href="https://www.npmjs.com/package/vue-social-sharing" target="_blank">check out other supported networks</a>. Let's dive in!

<h3>Install Vue Social Sharing package</h3>

Install Vue Social Sharing package by running the command below in your terminal.

```
npm install --save vue-social-sharing
```

<h3>Set up Vue Social Sharing package</h3>

You can set up the package in main.js file as shown below

```js
import VueSocialSharing from 'vue-social-sharing'
 
Vue.use(VueSocialSharing);
```

or import using a script tag in your index.html file

``` html
<script src="/dist/vue-social-sharing.js"></script>
```

<h3>Add Social Media sharing links using the Share Network Component</h3>

The Vue social sharing package lets you add social sharing links to multiple networks with ease, right within your template. Here are a few examples.

<strong>Note:</strong> the <strong>'network'</strong> and <strong>'url'</strong> are the only required properties.

Facebook Example
```html
<template>
    <button>
        <ShareNetwork
            network="facebook"
            url="https://lindaojo.com/blog/awesome-article"
            title="Awesome Article"
            description="This is an awesome article for awesome readers"
            hashtags="Frontend, Programming">
            <span>Share on Facebook</span>
        </ShareNetwork>
    </button>
</template>

```

Twitter Example
```html
<template>
    <button>
        <ShareNetwork
            network="twitter"
            url="https://lindaojo.com/blog/another-awesome-article"
            title="Another Awesome Article"
            description="This is another awesome article for awesome readers"
            twitter-user="LindaOjo_">
            <span>Share on Twitter</span>
        </ShareNetwork>
    </button>
</template>

```
Now you can share your website on Twitter, Facebook, and much more 🎉.

<h3>Extending the network list</h3>

If the package does not support a network you desire by default, you can extend or override the list of available networks in your main.js file as shown below

```js
    Vue.use(VueSocialSharing, {
        networks: {
            newNetwork: 'https://newnetwork.com/share?url=@url&title=@title'
        }
    })
```

<h3>Customise your sharing links on popular social media platforms (Optional)</h3>

Customising your share links makes it stand out hence increasing the likelihood of it being engaged with.

For instance, a link to my website on Twitter looks like this:
![twitter card](https://res.cloudinary.com/lindaojo/image/upload/v1606058540/twitter-card_mpspzu.png)

You can customise your share links by adding the right meta tags to the head section of your index.html.

Below are the meta tags I used to customise my share links.

```html{codeTitle: Meta Tags}
<head>
    <!-- Facebook, Whatsapp -->
    <meta property="og:site_name" content="Linda Ojo">
    <meta property="og:title" content="Linda Ojo's Personal website and Blog">
    <meta property="og:description" content="Articles on frontend development written by Linda Ojo, Frontend Developer">
    <meta property="og:image" content="logo.png">
    <meta property="og:url" content="https//www.lindaojo.com">

     <!-- Twitter -->
    <meta name="twitter:title" content="Linda Ojo's Personal website and Blog">
    <meta name="twitter:description" content="Articles on frontend development written by Linda Ojo, Frontend Developer">
    <meta name="twitter:image" content="logo.png">
    <meta property="twitter:url" content="https//www.lindaojo.com">
    <meta name="twitter:card" content="summary">
</head>
```

