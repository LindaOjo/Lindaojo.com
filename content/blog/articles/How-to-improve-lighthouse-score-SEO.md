---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1605904193/SEO_l95mif.png'
title: "How to Improve Lighthouse Score - Search Engine Optimization (SEO)"
duration: "3 minutes"
excerpt: "In this post, we are gonna be going through tips to improve your Lighthouse SEO score and overall visibility of your website..."
date: "2020-11-23"
isBlogPost: true
---

This is the first article of the Lighthouse Series 🎉🎉🎉  You can check out other articles below:

<div>
    <ol class="ml-8">
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-best-practices/"  target="_blank"  rel="noopener">
                How to Improve Lighthouse Score - Best Practices
            </a>
        </li>
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-accessibility/"  target="_blank"  rel="noopener">
                How to Improve Lighthouse Score -Accessibility
            </a>
        </li>
    </ol>
</div>


Don't know how to check your website's Lighthouse score? No problem, use my last article <a class="link" href="https://www.lindaojo.com/blog/how-to-check-lighthouse-scores-on-chrome-or-firefox/" target="_blank" rel="noopener">How to Check Lighthouse Scores using Chrome or Firefox</a> as a guide.

In this post, we will be going through tips to improve your Lighthouse SEO score and the overall visibility of your website.

<h3>What is SEO?</h3>

Search Engine Optimization (SEO) simply means the process of improving your site to increase its visibility for relevant searches. The higher your SEO score, the better visibility your web pages have in search results.

Lighthouse carries various audits on your website, these audits can be passed by making a few simple changes. Want to know what they are? Keep reading. 

<h3>Add a title element</h3>

Adding a title element is very important because search engines such as Google rely on it heavily to determine if a page is relevant to their search. It also gives screen reader users an overview of the page. The title element is usually added to the head of an <span class="code-word">index.html</span> file as shown below.

```html{codeTitle: Title Element}
<head>
    <title>Linda Ojo</title>
</head>  
```

<h3>Add necessary meta tags</h3>  

Meta tags provide information about a webpage. The meta tags don’t appear on the page itself, but only in the page’s source code. For starters, your website should have the meta tags shown below

```html{codeTitle: Meta Tag}
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> //optimize your webpage for smaller screens
    <meta name="author" content="Linda Ojo">
    <meta name="description" content="Articles on frontend development written by Linda Ojo, Frontend Developer"> //included in search results to concisely summarize page content.
    <meta name="keywords" content="HTML, CSS, JavaScript, Frontend, Web Development">
</head>
```
You could also customise the way your webpage link looks on social media platforms such as Twitter and Facebook. Though this does <strong>not</strong> affect your lighthouse score, it's recommended.

Below are meta tags I use to customise links to my website

```html{codeTitle: Meta Tag}
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
Using the meta tags above, a link to my website on Twitter looks like this:

![twitter card](https://res.cloudinary.com/lindaojo/image/upload/v1606058540/twitter-card_mpspzu.png)

<h3>Size interactive elements properly</h3>

Interactive elements such as links and buttons should be sized and spaced properly. This is very important as search engines rank pages based on how mobile-friendly they are.

These elements should have a minimum size of 48px by 48px and a spacing of at least 8px in all directions.

<h3>Links should have descriptive text</h3>

Lighthouse flags generic link texts such as "click here", "go", "start", "more", "learn more" e.t.c. Using descriptive text for anchor elements will help search engines understand your content.

```html{codeTitle: Links}
<!-- Don't  -->
❌ <p>To read more articles about JavaScript, <a href="/articles">click here</a>.</p> 

<!-- Do -->
✅ <p><a href="/articles">Read more JavaScript articles</a>.</p> 
```

<h3>Add alternative text to images</h3>

All images should have the <span class="code-word">alt</span> attribute which contains a short descriptive text. If the image acts as decoration and does not provide any useful content, give it an empty <span class="code-word">alt=""</span> attribute.

```html{codeTitle: Alternative texts}
<!-- Do -->
<img src="background.png" alt=""> <!--decorative image -->
<img src="dancers.png" alt="4 female dancers in yellow dresses"> <!-- informative image-->
```

<h3>Use legible font sizes for all screen sizes</h3>

The minimum accepted font size for text is 12px. Text with a font size lower than 12px forces most mobile users to zoom in in order to read. There are edge cases where small fonts are needed, these small fonts should not make up more than 40% of a page's text.

<h3>Use "hreflang" links to specify different Versions of a website</h3>

<span class="code-word">hreflang</span> links enables search engines to select the right version of a website based on the language and region of the user. Lighthouse checks for <span class="code-word">hreflang</span> links in the page's head and in its <a href="https://developer.mozilla.org/en-US/docs/Glossary/Response_header"  rel="noopener" class="link">response headers</a>.

<span class="code-word">hreflang</span> links should be added to the head of your webpage.

```html{codeTitle: Alternative texts}
<link rel="alternate" hreflang="en" href="https://example.com" />    //English
<link rel="alternate" hreflang="es" href="https://es.example.com" /> // Spanish
<link rel="alternate" hreflang="de" href="https://de.example.com" /> // German
```
For pages that allow users to select their language, use the x-default keyword:

```html{codeTitle: Alternative texts}
<link rel="alternate" href="https://example.com" hreflang="x-default" />
```
<br>

These tips will definitely boost your lighthouse SEO score and improve the overall visibility of your website on the internet.