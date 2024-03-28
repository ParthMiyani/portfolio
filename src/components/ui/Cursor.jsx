import { useState, useEffect, useRef } from "react";
import "../../styles/ui/cursor.css";

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      let x = e.clientX - 150;
      let y = e.clientY - 150;
      setCursorPosition({ x: x, y: y });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="bubble"
      style={{
        left: cursorPosition.x + "px",
        top: cursorPosition.y + "px",
      }}
    ></div>
  );
}
