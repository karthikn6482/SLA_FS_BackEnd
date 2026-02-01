import { useEffect, useRef, useState } from "react";

export default function RenderVsState() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <h3>Render Count vs State</h3>
      <p>Component Renders: {renderCount.current}</p>
      <p>State Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
