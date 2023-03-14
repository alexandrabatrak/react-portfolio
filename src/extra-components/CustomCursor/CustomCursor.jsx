import { useState, useEffect } from "react";
import "./customcursor.scss";

// TODO: Cursor render isn't smooth enough on the home page

export default function CustomCursor({ hoverable }) {
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseDown = () => {
    setClicking(true);
  };

  const mouseUp = () => {
    setClicking(false);
  };

  const hover = (isHovering) => {
    setHovering(isHovering);
  };

  const mouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(hoverable);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => hover(true));
      el.addEventListener("mouseleave", () => hover(false));
      el.addEventListener("mousedown", () => mouseDown(true));
      el.addEventListener("mouseup", () => mouseUp(true));
    });
    document.addEventListener("mousemove", mouseMove);
    document.body.style.cursor = "none";
    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", () => hover(true));
        el.removeEventListener("mouseleave", () => hover(false));
        el.removeEventListener("mousedown", () => mouseDown(false));
        el.removeEventListener("mouseup", () => mouseUp(false));
      });
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [hoverable]);

  return (
    <>
      <div
        className={`cursor ${clicking ? "click" : ""} ${
          hovering ? "hover" : ""
        }`}
        style={{
          transform: ` translate3d(calc(${position.x}px), calc(${position.y}px), 0)`,
        }}
      />
      <div
        className={`cursor-buddy ${clicking ? "click" : ""} ${
          hovering ? "hover" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: hovering
            ? "scale(4) translate(-10%, -10%)"
            : "scale(1) translate(15%, 15%)",
        }}
      />
    </>
  );
}
