---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1607603313/Performance_f1zvh8.png'
title: "How to Improve Lighthouse Score - Performance"
duration: "4 minutes"
excerpt: "In this post, I will be guiding you on simple changes you can make to boost your website's performance."
date: "2020-12-14"
isBlogPost: true
---

This is the final article of the lighthouse series, I hope you enjoyed the series as much as I did. You can check out other Lighthouse articles below:

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
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-best-practices/"  target="_blank"  rel="noopener">
                How to Improve Lighthouse Score - Best Practices
            </a>
        </li>
    </ol>
</div>
<br>

Don't know how to check your website's Lighthouse score? No problem, use this article <a class="link" href="https://www.lindaojo.com/blog/how-to-check-lighthouse-scores-on-chrome-or-firefox/" target="_blank" rel="noopener">How to Check Lighthouse Scores using Chrome or Firefox</a> as a guide.

<h3>Eliminate render-blocking resources</h3>

Render-blocking resources are either scripts or stylesheets.

Use the Coverage tab in Chrome DevTools to identify non-critical CSS and JS. When you load or run a page, the tab tells you how much code was used.

Press <strong>Control+Shift+P</strong> or <strong>Command+Shift+P (Mac)</strong> to open the Coverage Tab shown below.

<div class="my-5">

![Low Contrast](https://res.cloudinary.com/lindaojo/image/upload/v1607625871/coverage_ev9doq.png)

</div>

Remove all the resources that are not used.

<h4>- Remove render blocking scripts</h4>

Non-critical scripts should be placed in the end of the body of your index.html file.

If a script is a render-blocking URL that's not critical(marked red), you can keep it in the URL, and then mark the URL with async or defer attributes as shown below

```html
<body>
    <script defer></script>
    <script async></script>
</body>
```
<h4>- Remove render blocking stylesheets</h4>

Remove render blocking stylesheets by preloading them. Suppose your page loads in the order below

```html
index.html
|--main.js
   |--styles.css
   |--animation.js
```

Main.js runs then styles.css and animation.js are downloaded. The page doesn't appear complete until those last 2 resources are downloaded, parsed, and executed. The order can be changed by preloading links in your HTML. This instruct the browser to download key resources as soon as possible.

```html
<head>
  ...
  <link rel="preload" href="styles.css" as="style">
  <link rel="preload" href="ui.js" as="script">
  ...
</head>
```

<h3>Avoid importing large 3rd party libraries</h3>

For instance instead of setting up font-awesome icons in the head of your html as shown below

```html
<head>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>

```
You could use SVG icons instead, they are light and you don't have to install a library containing thousands of icons when you are just using 25. Font Awesome also let's you down load the svg versions of icons. It's a win-win situation.

<h3>Use CDNs for images to optimize images</h3>

CDN stands for Content Delivery Network. Using an image CDN, such as  <a href="https://cloudinary.com/" target="_blank" rel="noopener" class="link">Cloudinary</a> can significantly reduce the latency of your image delivery. Switching to an image CDN can yield a 40–80% savings in image file size.

An image URL indicates not only which image to load, but also parameters like size, format, and quality. The code snippet below displays an image using a Cloudinary image link

```html
<img src="https://res.cloudinary.com/lindaojo/image/upload/v1607603313/Performance_f1zvh8.png" alt="lighthouse performance report">
```

<h3>Use improved image formats such as Webp</h3>

New image formats such as <a href="https://developers.google.com/speed/webp" target="_blank" rel="noopener" class="link">Webp</a> are lightweight yet of great quality. Even though it is not supported by all browsers yet. You could use Webp images along with a fall back image as shown below.

```html
<picture>
    <source alt="Angela's cat, Bandit" srcset="images/cat.webp" type="image/webp">
    <img alt="Angela's cat, Bandit" src="images/team/cat.jpg">
</picture>
```

<h3>Remove unused CSS</h3>

Removing unused CSS from your production builds for maximum performance.
When you are building a website, you might decide to use a CSS framework like TailwindCSS, Bootstrap, MaterializeCSS, etc... But you will only use a small set of the framework, and a lot of unused CSS styles will be included.

You could use a tool like PurgeCSS to remove the excesses. PurgeCSS analyzes your content and your CSS files. Then it matches the selectors used in your files with the one in your content files. It removes unused selectors from your CSS, resulting in smaller CSS files.

<a href="https://purgecss.com/#table-of-contents" target="_blank" rel="noopener" class="link">Get started with Purge CSS</a>

<h3>Minify CSS</h3>

Your CSS files usually contain unnecessary characters, such as whitespaces, comments, and indentation. In production, these characters can be removed to reduce CSS file size without changing how the browser processes the styles. This ensures that you are sending the smallest possible bundle to your users.

You can minimise your CSS using <a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin" target="_blank" rel="noopener" class="link">optimize-css-assets-webpack-plugin</a>


<h3>use light modern JS libraries</h3>
