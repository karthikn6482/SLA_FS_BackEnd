import { useRef } from "react";

function Task2BgColor() {
  const boxRef = useRef(null);

  const changeColor = () => {
    boxRef.current.style.backgroundColor = "lightgreen";
  };

  return (
    <>
      <div ref={boxRef} style={{ width: 200, height: 100, background: "#ccc" }} />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default Task2BgColor;
