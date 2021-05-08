import React from 'react'
import './GameOver.css'

interface GameOverProps {
  restart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({restart}) => {
  return (
    <div className="overlay">
      <h1>YOU LOST</h1>
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default GameOver
