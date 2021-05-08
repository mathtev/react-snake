import { MutableRefObject, useEffect } from 'react';

export const useKeyPressDetector = (
  ref: MutableRefObject<any>,
  currentDir: string,
  setMoveDir: Function
): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          (currentDir !== 'down') && setMoveDir('up');
          break;
        case 'ArrowLeft':
          (currentDir !== 'right') && setMoveDir('left');
          break;
        case 'ArrowRight':
          currentDir !== 'left' && setMoveDir('right');
          break;
        case 'ArrowDown':
          currentDir !== 'up' && setMoveDir('down');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, currentDir, setMoveDir]);
};
