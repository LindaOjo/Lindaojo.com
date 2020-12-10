---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1607182017/Accessibility_ijkxod.png'
title: "How to Improve Lighthouse Score - Accessibility"
duration: "3 minutes"
excerpt: "In this post, I will be sharing great tips on how to get a perfect lighthouse score in accessibility."
date: "2020-12-07"
isBlogPost: true
---

This article is part of the lighthouse series. You can check out other Lighthouse articles below:

<div>
    <ol class="ml-8">
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-search-engine-optimization-seo/"  target="_blank" rel="noopener">
                How to Improve Lighthouse Score - Search Engine Optimization (SEO)
            </a>
        </li>
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-best-practices/"  target="_blank"  rel="noopener">
                How to Improve Lighthouse Score - Best Practices
            </a>
        </li>
        <li>
            <a class="link"  href="https://www.lindaojo.com/blog/how-to-improve-lighthouse-score-performance/"  target="_blank"  rel="noopener">
                How to Improve Lighthouse Score - Performance
            </a>
        </li>
    </ol>
</div>
<br>

Don't know how to check your website's Lighthouse score? No problem, use this article <a class="link" href="https://www.lindaojo.com/blog/how-to-check-lighthouse-scores-on-chrome-or-firefox/" target="_blank" rel="noopener">How to Check Lighthouse Scores using Chrome or Firefox</a> as a guide.

In this post, I will be sharing great tips on how to get a perfect lighthouse score in accessibility.

You should know, accessibility is very important and spans beyond the audits of Lighthouse. Do not rely solely on Lighthouse to rate the accessibility of your website. Only a subset of accessibility issues can be automatically detected by Lighthouse so manually testing is encouraged.

<h3>Ensure all elements have sufficient contrast ratio</h3>

Elements whose brightness is too close to the background brightness have a low contrast ratio. Elements with a low contrast ratio are hardly visible.

The button below has good contrast with its inner text but poor contrast with its background. 

<div class="centered-image lg:w-2/4 md:w-2/3 sm:w-56">

![Low Contrast](https://res.cloudinary.com/lindaojo/image/upload/v1607338557/no-contrast_example_oce1u0.png)

</div>

We can improve the background contrast by changing the button's color or adding a border with the appropriate color as shown below.

<div class="centered-image lg:w-2/4 md:w-2/3 sm:w-56">

![No Contrast](https://res.cloudinary.com/lindaojo/image/upload/v1607338557/contrast_example_damzp7.png)

</div>

Chrome lets you know the contrast ratio of elements when inspecting.

![Contrast](https://res.cloudinary.com/lindaojo/image/upload/v1607338008/contrast_kcysdx.png)


<h3>Use tabindex to improve experience for keyboard users</h3>

Try to go through your website using the keyboard only, is it difficult? are there processes you can't carry out?
If yes, you got some work to do.

Elements like Buttons and links can be accessed using a keyboard by default. You can add focus to other useful elements by setting <strong>tabindex = "0"</strong>.

<strong>tabindex="0"</strong> allows elements besides links and form elements to receive keyboard focus. It does not change the tab order but places the element in the logical navigation flow as if it were a link/button on the page. This comes in handy for elements like icons which are not part of the natural tab order.

Do not set a tabindex="1" or any value greater than zero. It removes an element from the natural tab order.


<h3>Add a title element</h3>

The title gives users of screen readers and other assistive technologies an overview of the page. The title is the first text that an assistive technology announces. Search engine users also rely on the title to determine whether a page is relevant to their search.

Use a unique title for each page. Your title should also be descriptive, avoid using vague titles like "Home".

```html{codeTitle: Title Element}
<head>
    <title>Linda Ojo</title>
</head>  
```

<h3>Add a "lang" attribute to </h3>

Screen readers use a different sound library for each language they support, to ensure the correct pronunciation of words. Screen readers can switch between these language libraries easily, but only if a web page specifies which language to read for a given piece of content.

If a page doesn't specify a language for the <html> element, a screen reader assumes the page is in the default language that the user chose when setting up the screen reader, often making it impossible to understand the content.

For example, this code below sets the language of the document to English:

```html{codeTitle: "lang" attribute}
<html lang="en">
```

<h3>Order heading elements properly</h3>

Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies.

Make all heading elements follow a logical, numerical order that reflects the structure of your content. Your heading text should clearly convey the content in the associated section.

For example:

```html{codeTitle: Title Element}
<div>
    <h1>Colors</h1>
    <section>
    <h2>Primary Colours</h2>
    …
        <h3>Red</h3>
    </section>
</div> 
```

<h3>Add alternative text to images</h3>

All images should have the <span class="code-word">alt</span> attribute which contains a short descriptive text. If the image acts as decoration and does not provide any useful content, give it an empty <span class="code-word">alt=""</span> attribute.

This is very important as visually impaired users using screen readers will be read an <span class="code-word">alt</span> attribute to better understand an on-page image. These attributes are also displayed in place of an image that fails to load.

```html{codeTitle: Alternative texts}
<!-- Do -->
<img src="background.png" alt=""> <!--decorative image -->
<img src="dancers.png" alt="4 female dancers in yellow dresses"> <!-- informative image-->
```

<h3>Call to Action Elements should have descriptive text</h3>

Call to Actions (CTA) are elements that can be triggered by the user to achieve a goal. Examples of CTAs are buttons, links, icons etc

Lighthouse flags generic CTA texts such as "click here", "go", "start", "more", "learn more" e.t.c. Using descriptive text for CTA elements will help screen readers understand your content.

```html{codeTitle: Links}
<!-- Don't  -->
❌ <p>To load more pictures, <a href="/articles">click here</a>.</p> 

<!-- Do -->
✅ <p><a href="/articles">Load more pictures of Schrute Farms</a>.</p> 
```

<h3>Always place list items within a parent element </h3>

When assistive technologies come to a list, they notify users how many items are within the list. If you don't wrap list items in a parent list element, assistive technologies can't set user expectations correctly.

Lighthouse flags list items that aren't contained in parent elements. Always place your list items in parent elements as shown below.

```html{codeTitle: List items}
<!-- Unordered list -->
    <ul>
        <li>Green</li>
        <li>Blue</li>
        <li>Yellow</li>
    </ul>
<!-- Ordered list -->
    <ol>
        <li>Antelope</li>
        <li>Bat</li>
        <li>Cheetah</li>
    </ol>

```

The tips above will definitely boost your lighthouse accessibility score and make it easier for anyone to use your website.