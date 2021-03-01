---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1614585916/CSS_position_property_s83pcy.png'
title: "Detailed Explanation of CSS Position Property"
duration: "2 minutes"
excerpt: "The position property in CSS defines how an element will be positioned on a page. The top, right, bottom, and left properties determine the final location of positioned element "
date: "2021-03-01"
isBlogPost: true
---

There are two important types of properties you need to know about when positioning elements on a screen. The first one, position:, specifies the type of positioning method to be used for an element (i.e. static, relative, absolute or fixed). 

The second is a set of properties (top:, bottom:, right:, left:), used to specify the offset for the element. Top, bottom, right & left are calculated differently based on the positioning method used, and are ignored for position: static.

The position property in CSS defines how an element will be positioned on a page. The top, right, bottom, and left properties determine the final location of positioned elements.

<h3>Static Positioning</h3>

A static positioned element is always positioned according to the normal flow of the page. HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, right, and z-index properties. In the example below, the green box "B" has a static position.

```css
.static {
  position: static;
  /* This is often not needed since HTML elements have a static position by default */
}
``` 

<div class="centered-image lg:w-1/3 md:w-2/3 sm:w-56">

![Static positioning](https://res.cloudinary.com/lindaojo/image/upload/v1614593087/Static_dja3yr.png)

</div>

<h3>Relative Positioning</h3>

This acts similar to static positioning except that you can position it relative to itself using top, right, bottom, left.

Relative positioning tells the element to move relative to where it would have landed if it just had the default static positioning. If you give an element relative positioning and tell it to have a top of 40px, it moves down 40px from where it otherwise would have been.

```css
.relative {
  position: relative;
  top: 40px;
  left: 30px;
}
``` 
The CSS above changes the position of Box-B as shown below.

<div class="centered-image lg:w-1/3 md:w-2/3 sm:w-56">

![Relative positioning](https://res.cloudinary.com/lindaojo/image/upload/v1614593099/Relative_pr9pui.png)

</div>

<h3>Absolute Positioning</h3>

Absolute positioning tells the browser that the element being positioned should be removed from the normal flow of the document and will be placed in an exact location on the page based on the values specified in top, bottom, left & right. it won't affect how the elements before it or after it in the HTML are positioned on the Web page.

Absolute elements will by default head to the top-left of it's closest parent that has a non-static position .

```css
.absolute {
  position: absolute;
  top: 10px;
  right: 0px;
}
``` 

<div class="centered-image lg:w-1/3 md:w-2/3 sm:w-56">

![Absolute positioning](https://res.cloudinary.com/lindaojo/image/upload/v1614593107/Absolute_w2v3cc.png)

</div>

<h3>Fixed Positioning</h3>

Fixed elements are positioned relative to the entire HTMl element.

Fixed positioning is similar to absolute positioning, but, fixed positioning anchors an element to the browser window. If you scroll up and down, the fixed element stays put even as other elements scroll past.

```css
.fixed {
  position: fixed;
  top: 20px;
  right: 30px;
}
``` 

<div class="centered-image lg:w-1/3 md:w-2/3 sm:w-56">

![Fixed positioning](https://res.cloudinary.com/lindaojo/image/upload/v1614593119/Fixed_sslddt.png)

</div>

<h3>Sticky Positioning</h3>

Sticky position is a combination of both Relative and Fixed position into one. it starts out as relative but once it scrolls out of the page it becomes fixed position.

<strong>Note:</strong> Internet Explorer, Edge 15 and earlier versions do not support sticky positioning. Safari requires a -webkit- prefix (see example below). You must also specify at least one of top, right, bottom or left for sticky positioning to work.

```css
.sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 20px;
  right: 30px;
}
```
Here is a codepen that includes the other positions including Sticky. Scroll down to see the Sticky position in action.

<iframe height="465" style="width: 100%;" scrolling="no" title="CSS Positioning property" src="https://codepen.io/LindaOjo/embed/gOLeqaY?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/LindaOjo/pen/gOLeqaY'>CSS Positioning property</a> by Linda
  (<a href='https://codepen.io/LindaOjo'>@LindaOjo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

That's all folks, See you next week!