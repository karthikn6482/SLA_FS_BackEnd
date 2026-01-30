import { useRef } from "react";

function Task6GetPText() {
  const pRef = useRef(null);

  const showText = () => {
    alert(pRef.current.innerText);
  };

  return (
    <>
      <p ref={pRef}>Hello from Paragraph</p>
      <button onClick={showText}>Get Text</button>
    </>
  );
}

export default Task6GetPText;
