import { useState, useRef, RefObject } from 'react';

const usePointerMovement = (ref: RefObject<HTMLElement>) => {
  const [mouseMovement, setMouseMovement] = useState(0);

  const mouseAtRef = useRef(0);
  const prevMousePosRef = useRef(mouseMovement);

  const handlePointerDown = (cx: number) => {
    mouseAtRef.current = cx;
  };

  const handlePointerMove = (cx: number) => {
    if (mouseAtRef.current === 0) return;

    const mouseDelta = mouseAtRef.current - cx,
      maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentage = Math.max(
        Math.min(prevMousePosRef.current + percentage, 0),
        -100
      );

    setMouseMovement(nextPercentage);
  };

  const handlePointerUp = () => {
    mouseAtRef.current = 0;
    prevMousePosRef.current = mouseMovement;
  };

  return {
    mouseMovement,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
  };
};

export { usePointerMovement };
