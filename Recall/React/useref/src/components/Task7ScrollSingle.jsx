import { useRef } from "react";

function Task7ScrollSingle() {
  const sectionRef = useRef(null);

  return (
    <>
      <button onClick={() => sectionRef.current.scrollIntoView({ behavior: "smooth" })}>
        Scroll
      </button>

      <div style={{ height: "600px" }} />

      <div ref={sectionRef}>🎯 Target Section</div>
    </>
  );
}

export default Task7ScrollSingle;
