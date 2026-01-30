import { useRef } from "react";

function Task5RefCounter() {
  const countRef = useRef(0);
  const displayRef = useRef(null);

  const increment = () => {
    countRef.current += 1;
    displayRef.current.innerText = countRef.current;
  };

  return (
    <>
      <h2 ref={displayRef}>0</h2>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Task5RefCounter;
