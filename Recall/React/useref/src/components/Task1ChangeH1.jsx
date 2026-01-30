import { useRef } from "react";

function Task1ChangeH1() {
  const headingRef = useRef(null);

  const changeText = () => {
    headingRef.current.innerText = "Text Changed using useRef!";
  };

  return (
    <>
      <h1 ref={headingRef}>Original Text</h1>
      <button onClick={changeText}>Change Text</button>
    </>
  );
}

export default Task1ChangeH1;
