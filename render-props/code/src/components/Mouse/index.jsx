import { useState } from "react";

function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = ({ clientX, clientY }) => {
    setPosition({ x: clientX, y: clientY });
  }

  return (
    <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

export default Mouse;
