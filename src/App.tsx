import React, { useEffect, useRef, useState } from 'react';
import Board from './components/Board/Board';
import {
  defaultCookiePos,
  defaultSnake,
  defaultSnakeDir,
  defaultSnakeSpeed,
} from './logic/defaultValues';
import { moveSnake, eatCookie, handleCollision } from './logic/helperFunctions';
import useInterval from './logic/hooks/useInterval';
import { useKeyPressDetector } from './logic/hooks/useKeyPressDetector';
import { Snake } from './types/Snake';
import { Position } from './types/Position';
import GameOver from './components/GameOver/GameOver';
import './App.css';

function App() {
  const [snakeBody, setSnakeBody] = useState<Snake>(defaultSnake);
  const [snakeDir, setSnakeDir] = useState<string>(defaultSnakeDir);
  const [cookiePos, setCookiePos] = useState<Position>(defaultCookiePos);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(false);
  const [snakeSpeed, setSnakeSpeed] = useState<number | null>(
    defaultSnakeSpeed
  );
  const [score, setScore] = useState(0);

  const startGame = () => {
    setSnakeBody(defaultSnake);
    setSnakeDir(defaultSnakeDir);
    setCookiePos(defaultCookiePos);
    setScore(0);
    setGameOver(false);
    setSnakeSpeed(defaultSnakeSpeed);
    setPause(false);
  };

  const togglePause = () => {
    setPause(!pause);
  };

  useInterval(() => {
    const newSnake = [...snakeBody];
    const newCookiePos = { ...cookiePos };
    let isOver = handleCollision(newSnake);
    let newScore;

    moveSnake(newSnake, snakeDir);
    newScore = eatCookie(newSnake, newCookiePos, score);
    setScore(newScore);
    if (isOver) {
      setGameOver(true);
      return;
    }
    setCookiePos(newCookiePos);
    setSnakeBody(newSnake);
  }, snakeSpeed);

  useEffect(() => {
    gameOver && setSnakeSpeed(null);
    pause ? setSnakeSpeed(null) : setSnakeSpeed(defaultSnakeSpeed);
  }, [gameOver, pause]);

  const appRef = useRef(null);
  useKeyPressDetector(appRef, snakeDir, setSnakeDir);

  return (
    <div ref={appRef} className="rootApp">
      <div className="appNav">
        <button className="appBtn" onClick={startGame}>
          Restart
        </button>
        <button className="appBtn" onClick={togglePause}>
          Pause ||
        </button>
        <h2>Your Score: {score}</h2>
      </div>
      <Board cookiePos={cookiePos} snakeBody={snakeBody} />
      {gameOver && <GameOver restart={startGame} />}
    </div>
  );
}

export default App;
