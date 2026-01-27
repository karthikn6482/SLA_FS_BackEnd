import { useState } from "react";

function TogglePrev() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>Toggle Prev</h2>
      <button onClick={() => setIsVisible(prev => !prev)}>
        Toggle
      </button>

      {isVisible && <p>Visible Text</p>}
    </div>
  );
}

export default TogglePrev;
