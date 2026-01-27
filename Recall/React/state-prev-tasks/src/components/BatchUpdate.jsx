import { useState } from "react";

function BatchUpdate() {
  const [count, setCount] = useState(0);

  const wrong = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const correct = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Batch Update</h2>
      <p>{count}</p>
      <button onClick={wrong}>Wrong</button>
      <button onClick={correct}>Correct</button>
    </div>
  );
}

export default BatchUpdate;
