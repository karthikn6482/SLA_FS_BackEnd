import { useState, useRef, useEffect } from "react";

function Task10PrevValue() {
  const [count, setCount] = useState(0);
  const prevRef = useRef(0);

  useEffect(() => {
    prevRef.current = count;
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Task10PrevValue;
