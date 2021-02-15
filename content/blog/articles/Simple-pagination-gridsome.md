---
image: 'https://res.cloudinary.com/lindaojo/image/upload/v1613422335/pagination_ultdqf.png'
title: "How to Set Up Pagination in Gridsome"
duration: "3 minutes"
excerpt: "Conditional rendering is a term to describe the ability to render different user interface (UI) markup depending on if a condition is true or false."
date: "2021-02-15"
isBlogPost: true
---

<h3>What is Gridsome</h3>

Gridsome is a modern website development framework for creating fast and secure websites that can be deployed anywhere. Static HTML files are generated to create SEO-friendly markup that hydrates into a Vue.js-powered SPA once loaded in the browser. Gridsome has also made it easier than ever before to set up pagination 😄

<h3>Steps to set up Gridsome Pagination</h3>

I am assuming that you already have a gridsome blog that fetches blog posts and you are adding pagination as a new feature. In that case, these are the steps to follow.
 
<p class="list-item"> - Setup Pagination in GraphQL query</p>
<p class="list-item"> - Import Gridsome's Pager component</p>
<p class="list-item"> - Add necessary styling</p>

<h3>Setup Pagination in GraphQL query</h3>

Data collection is handled by the GraphQL query in Gridsome. We can use the <strong>@paginate</strong> directive in the GraphQL query to add automatic pagination for a collection.

The query will receive a <strong>$page: Int </strong>variable you can use to load sources for a specific page.

```js
query ($page: Int) {
  allBlogPost(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
```
In the example above, each page will contain 10 blog posts.

<h3>Import Gridsome's Pager component</h3>

Gridsome has a built-in <strong>Pager</strong> component which can be imported for easy pagination. Import and add the Pager component from Gridsome.

```js
import { Pager } from 'gridsome';

export default {
  components: {
    Pager
  }
 }
```

Though the Pager component can accept multiple properties, the only required properties are <strong>"total number of Pages"</strong> and <strong>"current Page"</strong>. These properties can be found in <strong>"pageInfo"</strong> which we pass into the Pager component.

```html
    <Pager :info="$page.allBlogPost.pageInfo" />
```

<h3>Add Custom Styles</h3>

We can style the pagination container using normal CSS classes but need to use the <strong>:linkClass</strong> property to style the links.

Template
```html
<Pager :info="$page.allBlogPost.pageInfo"
       class="pager-container"
       linkClass="pager-container__link"  />
```
Styles
```css
<style scoped lang="scss">
  .pager-container {
    display: inline-block;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    color: black;
    
    &__link {
      text-align: center;
      padding: 0.6rem 1.2rem;
      color: white;
      text-decoration: none;
    }
  }

  .active {
    background-color:  rgb(44, 201, 180);
  }
</style>
```
That's all folk. I have been writing consistently for 4 months 🎉😄
