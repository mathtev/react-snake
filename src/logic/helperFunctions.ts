import { Position } from '../types/Position';
import { Snake } from '../types/Snake';
import { columns, rows } from './defaultValues';

export const moveSnake = (snake: Snake, moveDir: string): Snake => {
  const newHead = { ...snake[snake.length - 1] };
  switch (moveDir) {
    case 'up':
      snake.shift();
      if (newHead) {
        newHead.y = newHead.y > 1 ? newHead.y - 1 : rows;
        snake.push(newHead);
      }
      return snake;
    case 'left':
      snake.shift();
      if (newHead) {
        newHead.x = newHead.x > 1 ? newHead.x - 1 : columns;
        snake.push(newHead);
      }
      return snake;
    case 'right':
      snake.shift();
      if (newHead) {
        newHead.x = newHead.x < columns ? newHead.x + 1 : 1;
        snake.push(newHead);
      }
      return snake;
    case 'down':
      snake.shift();
      if (newHead) {
        newHead.y = newHead.y < rows ? newHead.y + 1 : 1;
        snake.push(newHead);
      }
      return snake;
    default:
      return snake;
  }
};

export const eatCookie = (snake: Snake, cookiePos: Position, score: number) => {
  const snakeHead = { ...snake[snake.length - 1] };
  if (snakeHead.x === cookiePos.x && snakeHead.y === cookiePos.y) {
    increaseLenght(snake);
    score = increaseScore(score);
    cookiePos.x = Math.floor(Math.random() * rows) + 1;
    cookiePos.y = Math.floor(Math.random() * columns) + 1;
  }
  return score;
};

const increaseLenght = (snake: Snake) => {
  const newEl = { ...snake[0] };
  snake.unshift(newEl);
};

const increaseScore = (score: number) => {
  return score + 1;
};

export const handleCollision = (snake: Snake) => {
  const snakeHead = { ...snake[snake.length - 1] };
  const occurances = snake.filter((el) => {
    return el.x === snakeHead.x && el.y === snakeHead.y;
  });
  if (occurances.length > 1) {
    return true;
  }
  return false;
};
