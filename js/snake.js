import { getInputDirection } from "./input.js";

/* Change SNAKE_SPEED if you want to change the speed of the snake mouvements */
export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  for (let index = snakeBody.length - 2 ; index >= 0; index--){
    snakeBody[index + 1] = {...snakeBody[index] }
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

function addSegments() {
  for (let index = 0; index < newSegments; index++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0;
}
