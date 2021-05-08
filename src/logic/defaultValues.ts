import { Snake } from '../types/Snake';

const rows = 30;
const columns = 30;

const cookiePosX = Math.floor(Math.random() * rows) + 1;
const cookiePosY = Math.floor(Math.random() * columns) + 1;

export { rows, columns };
export const defaultSnakeSpeed = 100;
export const defaultCookiePos = { x: cookiePosX, y: cookiePosY };
export const defaultSnakeDir = 'right';
export const defaultSnake: Snake = [
  { x: 10, y: 10 },
  { x: 11, y: 10 },
  { x: 12, y: 10 },
];
