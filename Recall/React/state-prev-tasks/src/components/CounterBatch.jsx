import { useState } from "react";

function CounterBatch() {
  const [count, setCount] = useState(0);

  const increaseWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const increaseCorrect = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Counter Batch</h2>
      <p>Count: {count}</p>
      <button onClick={increaseWrong}>Wrong +3</button>
      <button onClick={increaseCorrect}>Correct +3</button>
    </div>
  );
}

export default CounterBatch;
