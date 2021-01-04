---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1609757500/CSS_attribute_selectors_yrqhex.png'
title: "Advanced Styling using CSS Attribute Selectors"
duration: "3 minutes"
excerpt: "The attributes often selected for styling are 'class' and 'id' attribute. In this article, I will show you how to target specific elements using other attributes and their values..."
date: "2021-01-04"
isBlogPost: true
---
CSS is that friend we all love and hate. Another reason to love CSS is it enables you to select elements using their attributes.

The attributes often selected for styling are "class" and "id" attribute. In this article, I will show you how to target specific elements using other attributes and their specified values.

<h3>[attribute] Selector</h3>

The [attribute] Selector selects elements with a specified attribute.

Example

```css
img[alt] {
  border: 2px solid yellow;
}
```
The selector above targets only images that contain the "alt" attribute so images with "alt" attribute would have a yellow border.

```html
<img src="./../../images/dog.png" alt="cute white dog"/> // ✅ Selected, has yellow border
<img src="./../../images/cat.png"/>// ❌ not selected, no border
```

<h3>[attribute="value"] Selector</h3>

The [attribute="value"] selector selects elements that contain a specific attribute with an exact specified value.

Attribute value strings are by default case-sensitive, but can be changed to case-insensitive by adding 'i' before the closing bracket as shown below:

```css
img[alt="paper"] { //Case sensitive
  border: 2px solid yellow;
}

img[alt="PapEr" i] {  //Case insensitive
  border: 2px solid yellow;
}

The selectors above target the same elements.
```
Example

```html
<img src="./../../images/paper.png" alt="paper"/> // ✅ Selected, has yellow border
```

The selectors above target only images that contain the "alt" attributes whose value is "paper".

<h3>[attribute*="value"] Selector</h3>

The [attribute*="value"] selector is used to select elements whose attribute value contains a specified value anywhere.

```css
img[alt*="ter"] {
  border: 2px solid yellow;
}
```
Example

```html
<img src="./../../images/paper.png" alt="alter"/> // ✅ Selected, has yellow border
<img src="./../../images/paper.png" alt="termite"/> // ✅ Selected, has yellow border
<img src="./../../images/paper.png" alt="flattering"/> // ✅ Selected, has yellow border
```

<h3>[attribute~="value"] Selector</h3>

The [attribute~="value"] selector is used to select elements whose attribute value contains a specified word.

```css
img[alt~="coin"] {
  border: 2px solid yellow;
}
```
Example

```html
<img src="./../../images/man.png" alt="coin collector"/> // ✅ Selected, has yellow border
<img src="./../../images/office.png" alt=" Buycoins Headquaters"/> // ❌ not selected, no border
```
<h3>[attribute^="value"] Selector</h3>

The [attribute^="value"] selector is used to select elements whose attribute value begins with a specified value.

```css
img[alt^="hat"] {
  border: 2px solid yellow;
}
```
Example

```html
<img src="./../../images/hat.png" alt="hat"/> // ✅ Selected, has yellow border
<img src="./../../images/ronaldo.png" alt="hatrick"/> // ✅ Selected, has yellow border
```

<h3>[attribute|="value"] Selector</h3>

The [attribute|="value"] selector is used to select elements with the specified attribute starting with the specified value. In this case, the value has to be a whole word or the first word in a hyphen-separated word.

```css
img[alt|="front"] {
  border: 2px solid yellow;
}
```
Example

```html
<img src="./../../images/linda.png" alt="front-end-developer"/> // ✅ Selected, has yellow border
<img src="./../../images/linda.png" alt="frontend-developer"/> // ❌ not selected, no border
<img src="./../../images/location.png" alt="front"/> // ✅ Selected, has yellow border
```
<h3>[attribute$="value"] Selector</h3>

The [attribute$="value"] selector is used to select elements whose attribute value ends with a specified value. The value does not have to be a whole word.

```css
img[alt$="tion"] {
  border: 2px solid yellow;
}
```

Example

```html
<img src="./../../images/banner.png" alt="education"/> // ✅ Selected, has yellow border
<img src="./../../images/linda.png" alt="hand-lotion"/> // ✅ Selected, has yellow border

```

