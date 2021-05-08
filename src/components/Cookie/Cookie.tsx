import React from 'react';
import { Position } from '../../types/Position';
import CookieImg from '../../assets/cookie.png';

import './Cookie.css'

interface CookieProps {
  cookiePos: Position;
}

const Cookie: React.FC<CookieProps> = ({ cookiePos }) => {
  return (
    <div
      className="cookie"
      style={{
        gridRowStart: cookiePos.y,
        gridColumnStart: cookiePos.x,
      }}
    >
      <img src={CookieImg} alt="cookie" />
    </div>
  );
};

export default Cookie;
