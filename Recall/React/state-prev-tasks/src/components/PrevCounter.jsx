import { useState } from "react";

function PrevCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Prev Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 5)}>
        Increase by 5
      </button>
    </div>
  );
}

export default PrevCounter;
