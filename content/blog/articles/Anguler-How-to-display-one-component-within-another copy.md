---
title: "Angular — How to display one component within another"
duration: "2 minutes"
excerpt: "Let's begin with an Angular project which has a container component. We are going to display another component (let's call it child component) within the container component in this post.

We will be using the Angular CLI to generate modules and components, you can install Angular CLI by running the command below..."
date: "2020-04-15"
isBlogPost: true
songHref: "https://music.youtube.com/watch?v=JpGGta_R8IM&feature=share" 
---

<span class="centered-image">

![Nested Components](./article-images/nested-components.png)

</span>

Before we get started, all of the code for this tutorial can be found in my GitHub Repository.

Let's begin with an Angular project which has a container component. We are going to display another component (let's call it child component) within the container component in this post.

We will be using the Angular CLI to generate modules and components, you can install Angular CLI by running the command below.

```{codeTitle: "In terminal"}
npm i @angular/cli
```

<h3>Create a Child Component</h3>

The first thing is to create the “child” component you plan to display. If you haven’t created the child component already, you can do so using the command below. We will display this child component within the container component.

```{codeTitle: "In terminal"}
ng generate component <child-component-name>
```

<h3>Create the Child module</h3>

Navigate into your child component folder and create a module for your component using the command below. The module acts as a package which contains the component and carries everything that concerns the component.

```{codeTitle: "In terminal"}
ng generate module <child-component-name> --flat
```

<span class="code-word">--flat</span> is a command-line flag that ensures that the module is not created within a new folder.

Open <span class="code-word">child.module.ts</span> file and import the child component using JavaScript import at the top of the file.

Note: Always import your component or modules using JavaScript before using them in the NgModule decorator.

Next, declare and export your child component within the NgModule in <span class="code-word">child.module.ts</span> so it's made available to other components including the container component. <span class="code-word">child.module.ts</span> should look a lot like this 👇🏾

```ts{codeTitle: "In child.module.ts"}
import { ChildComponent } from './child.component'; // JavaScript import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChildComponent], // Declare child component
  imports: [CommonModule],
  exports: [ChildComponent] // Export child component
})

export class ChildModule { }
```

<h3>Import Child Module into Container Module</h3>

Next, head on to <span class="code-word">container.module.ts</span> and import the child Module within the NgModule.

💡 you can create a container module same way we made the child module if it doesn’t exist. This is what my <span class="code-word">container.module.ts</span> looks like.

```ts{codeTitle: "In container.module.ts"}
import { ChildModule } from './../child/child.module'; // JavaScript Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildModule // NgModule import of Child Module
  ]
})
export class ContainerModule { }
```

<h3>Display Child Component in Container Component using Selector</h3>

This is the easiest part. Open <span class="code-word">container.component.html</span> and display the child component using its selector as shown below. You can find the selector within the <strong>@Component Decorator</strong> in <span class="code-word">child.component.ts</span>

```html{codeTitle: "container.component.html"}
<h1> I am a Container </h1> 
<app-child></app-child> <!-- child component selector -->
```

That’s all.

Thank you <a href="https://twitter.com/uxFeranmi" class="link">Feranmi Akinlade</a> for reviewing drafts.