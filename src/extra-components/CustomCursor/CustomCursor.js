import { useState, useEffect } from 'react';
import './style.scss';

// TODO: Cursor render isn't smooth enough on the home page

export default function CustomCursor({ hoverable }) {
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = () => {
    setClicking(true);
  };

  const handleMouseUp = () => {
    setClicking(false);
  };

  const handleHover = (isHovering) => {
    setHovering(isHovering);
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(hoverable);
    elements.forEach((el) => {
      el.addEventListener('mouseenter', () => handleHover(true));
      el.addEventListener('mouseleave', () => handleHover(false));
      el.addEventListener('mousedown', () => handleMouseDown(true));
      el.addEventListener('mouseup', () => handleMouseUp(true));
    });
    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';
    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', () => handleHover(true));
        el.removeEventListener('mouseleave', () => handleHover(false));
        el.removeEventListener('mousedown', () => handleMouseDown(false));
        el.removeEventListener('mouseup', () => handleMouseUp(false));
      });
      document.removeEventListener('mousemove', handleMouseMove);
      // document.body.style.cursor = 'auto';
    };
  }, [hoverable]);

  return (
    <div
      className={`cursor ${clicking ? 'click' : ''} ${hovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: hovering
          ? 'scale(2) translate(-15%, -15%)'
          : 'scale(1) translate(-15%, -15%)',
      }}
    />
  );
}
