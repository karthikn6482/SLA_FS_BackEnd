import { useRef } from "react";

function Task9SetInputValue() {
  const inputRef = useRef(null);

  const setValue = () => {
    inputRef.current.value = "Hello React!";
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={setValue}>Set Value</button>
    </>
  );
}

export default Task9SetInputValue;
