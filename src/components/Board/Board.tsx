import React from 'react';
import { Position } from '../../types/Position';
import { Snake } from '../../types/Snake';
import Cookie from '../Cookie/Cookie';
import './Board.css';

interface BoardProps {
  snakeBody: Snake;
  cookiePos: Position;
}

const Board: React.FC<BoardProps> = ({ snakeBody, cookiePos }) => {
  return (
    <div className="board">
      {snakeBody &&
        snakeBody.map((snakeElement, idx) => (
          <div
            key={idx}
            className="snakeCell"
            style={{
              gridRowStart: snakeElement.y,
              gridColumnStart: snakeElement.x,
            }}
          ></div>
        ))}
      <Cookie cookiePos={cookiePos} />
    </div>
  );
};

export default Board;
