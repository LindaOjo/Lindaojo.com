---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1606668387/Best-Practices_jfpbck.png'
title: "How to Improve Lighthouse Score - Best Practices"
duration: "2 minutes"
excerpt: "In this post, we will be checking out a few best practices when building for the web."
date: "2020-11-30"
isBlogPost: true
---

This article is part of the lighthouse series. You can check out other articles below:

<div>
    <ol class="ml-8">
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-search-engine-optimization-seo/"  target="_blank" rel="noopener">
                How to Improve Lighthouse Score - Search Engine Optimization (SEO)
            </a>
        </li>
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-accessibility/"  target="_blank"  rel="noopener">
                How to Improve Lighthouse Score -Accessibility
            </a>
        </li>
    </ol>
</div>
<br>

In this post, we will be checking out a few best practices when building for the web.

<h3>Protect website using HTTPS</h3>

HTTPS stands for Hypertext Transfer Protocol Secure. HTTPS is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer.

Websites should be protected with HTTPS, including those that do not handle sensitive data. HTTPS prevents intruders from tampering with or passively listening in on the communications between your site and your users.

<h3>Ensure Links to External sites are safe</h3>

When you link to a page on another site using the <span class="code-word">target="_blank"</span> attribute, you can expose your site to performance and security issues. Adding <span class="code-word">rel="noopener"</span>  or <span class="code-word">rel="noreferrer"</span> to your links avoids these issues.

```html
<a class="link"  href="https://cloudinary.com/" target="_blank" rel="noopener">
```

<h3>Avoid Unload event listeners</h3>

Some developer treat the <span class="code-word">Unload</span> event as a callback. This is extremely unreliable because this event does not fire in many typical unload situations especially on mobile. Listening for <span class="code-word">Unload</span> event  can prevent browser optimizations like the <a class="link" href="https://web.dev/bfcache/" target="_blank" rel="noopener">Back-Forward Cache</a>. Consider using the <span class="code-word">pagehide</span> event or <span class="code-word">visibilitychange</span> events instead.


<h3>Avoid requesting for user location on page load</h3>

Remove all calls to <span class="code-word">geolocation.getCurrentPosition()</span> and <span class="code-word">geolocation.watchPosition()</span> that occur on page load. To provide a better user experience always request geolocation permission after a user action, not on page load.

<h3>Displays images with correct aspect ratio</h3>

Rendered images with aspect ratios greatly different from their source file could look distorted. Source files come with their natural aspect ratio.
An image content delivery network (CDN) can make it easier to automate the process of creating different sized versions of your images. I recommend <a class="link"  href="https://cloudinary.com/"  target="_blank" rel="noopener">Cloudinary</a>.


<h3>Allows users to paste into password fields</h3>

Allowing users to paste their passwords could improve security because it enables the use of password managers. Password managers can automatically paste passwords whenever users need to log in; this improves the user experience.

<h3>Ensure no browser errors are logged to the console</h3>

Messages logged in the console come from either the web developers who built the page or the browser itself. An Error message means there's a problem on your page that you need to resolve.
