---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1605904193/SEO_l95mif.png'
title: "Improve Lighthouse Score - Search Engine Optimization (SEO)"
duration: "2 minute"
excerpt: "In this post, we are gonna be going through tips to improve your Lighthouse SEO score and overall visibility of your website..."
date: "2020-11-23"
isBlogPost: true
---

This is the first article of the Lighthouse Series 🎉 Don't know how to check your website's Lighthouse score? No problem, use last article <a class="link" href="https://www.lindaojo.com/blog/how-to-check-lighthouse-scores-on-chrome-and-firefox/" target="_blank">How to Check Lighthouse Scores using Chrome or Firefox</a> as a guide.

In this post, we are gonna be going through tips to improve your Lighthouse SEO score and overall visibility of your website.

<h3>What is SEO?</h3>

Search Engine Optimization (SEO) simply means the process of improving your site to increase its visibility for relevant searches. The higher your SEO score, the better visibility your pages have in search results.

Lighthouse carries various audits on you website, these audits can be passed by making a few simple changes. Want to know what they are? Keep reading. 


<h3>Add a Title Element</h3>

The title element is very important because search engines such as Google rely on it heavily to determine if a page is relevant to their search. It also gives screen reader users an overview of the page.

```html{codeTitle: Title Element}
<head>
    <title>Linda Ojo</title>
</head>  
```


<h3>Add necessary meta tags</h3>  

Meta tags provide information about a webpage. The meta tags don’t appear on the page itself, but only in the page’s source code. For starters, your website should have the meta tags show below

```html{codeTitle: Meta Tag}
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> //optimize your webpage for smaller screens
    <meta name="description" content="Articles on frontend development written by Linda Ojo, Frontend Developer"> //are included in search results to concisely summarize page content.

</head>
```

<h3>Size interactive elements properly</h3>

Interactive elements such as links and buttons should be sized and spaced properly. This is very important as search engines rank pages based on how mobile-friendly they are.

These elements minimum have a size of 48px by 48px and a spacing of at least 8px in all directions.

<h3>Links should have descriptive text</h3>

Lighthouse flags generic link texts such as "click here", "go", "start", "more", "learn more" e.t.c. Use descriptive text for anchor elements will help search engines understand your content.

```html{codeTitle: Links}
<!-- Don't  -->
❌ <p>To read more articles about JavaScript, <a href="/articles">click here</a>.</p> 

<!-- Do -->
✅ <p><a href="/articles">Read more JavaScript articles</a>.</p> 
```

<h3>Add Alternative text to images</h3>

All images should have the alt attribute which contains a short descriptive text. If the image acts as decoration and does not provide any useful content, give it an empty alt="" attribute to remove it from the accessibility tree.

```html{codeTitle: Alternative texts}
<!-- Do -->
<img src="background.png" alt=""> <!--decorative image -->
<img src="dancers.png" alt="4 female dancers in yellow dresses"> <!-- informative image-->
```

<h3>Use Legible Font Sizes for all screen sizes</h3>

The minimum accepted font size for text is 12px. Text with a font size lower than 12px forces most mobile users to zoom in in order to read. There are edge cases where small fonts are needed, these small fonts should not make up more than 40% of a page's text.
