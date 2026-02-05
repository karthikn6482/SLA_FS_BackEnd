import { useMemo, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const heavyCalculation = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i;
    }
    return total;
  }, [count]);

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Count: {count}</p>
      <p>Heavy Result: {heavyCalculation}</p>
    </div>
  );
}
