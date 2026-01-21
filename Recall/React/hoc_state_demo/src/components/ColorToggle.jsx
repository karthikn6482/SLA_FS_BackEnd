import { useState } from "react";

export default function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <h3 style={{ color: isRed ? "red" : "blue" }}>
        Color Change Text
      </h3>
      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
}
