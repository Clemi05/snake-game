# Tic Tac Toc Game

Snake game with HTML, CSS and JavaScript.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Click here to see live site]()
- Repository URL: [Click here to see repository](https://github.com/Clemi05/snake-game)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

In this project, I learn about the Spread syntax (...):

```js
export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  for (let index = snakeBody.length - 2 ; index >= 0; index--){
    snakeBody[index + 1] = {...snakeBody[index] }
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}
```

### Continued development

Following this project, I will continue working on small JavaScript projects (calculator or 2048 game) to exercise my self and improve my JavaScript and CSS skills. I am also going to learn more about React.

### Useful resources

- [Build Tic Tac Toe with JavaScript - Tutorial](https://www.youtube.com/watch?v=Y-GkMjUZsmM&ab_channel=WebDevSimplified)
- [MDN Web Docs - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Array/Object Destructuring Tutorial](https://www.youtube.com/watch?v=NIq3qLaHCIs&ab_channel=WebDevSimplified)


## Author

- Github - [Clemi05](https://github.com/Clemi05)
- LinkedIn - [Clément Azalbert](https://www.linkedin.com/in/clement-azalbert/)