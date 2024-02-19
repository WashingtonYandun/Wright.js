# Wright.js

Mini Tiny Frontend "Framework" (I'm very brave to call this framework)

> [!WARNING]
> This is not is not intended to be used anywhere. It's just a simple project that helps you to experiment and see how some other frameworks work.
> IT HAS NO PURPOSE TO BE USED IN A REAL PROJECT. IT'S JUST A SIMPLE PROJECT TO LEARN HOW TO CREATE A FRAMEWORK.
> Many things are not implemented and many things are not working properly.

## What is Wright.js?

Wright.js is a tiny frontend framework that helps you to create a simple web application. It's a very simple framework that has a simple concept (Creation of elements). It's not a full-featured framework like React, Angular, or Vue. It's just a simple framework that helps you to create tags and components.

It was based on React. I created this framework to learn how to create a simple framework and to understand how React.js work.

## How to use Wright.js?

First, you need to include the Wright.js file in your HTML file.

```html
<script src="wright.js"></script>
```

Then, you can create a simple component like this:

```javascript
export const navBar = nav(
    a("Home").setAttr("href", "#/"),
    a("About Us").setAttr("href", "#/about")
);
```

And then, you can render the component to the HTML file like this:

```javascript
root.prepend(navBar);
```

## How to create a component?

You can create a component by using the `createElement` function. The `createElement` function is a function that helps you to create a simple HTML tag. You can create a simple tag like this:

```javascript
const xyz = createElement("xyz");
```

You can also create a tag with attributes like this:

```javascript
const a = a("Go to my github").setAttr(
    "href",
    "https://github.com/WashingtonYandun"
);
```
