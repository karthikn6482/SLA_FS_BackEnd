import { useRef } from "react";

function Task8MultiScroll() {
  const refs = [useRef(), useRef(), useRef(), useRef()];

  return (
    <>
      {refs.map((ref, i) => (
        <button key={i} onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}>
          Go to Section {i + 1}
        </button>
      ))}

      {refs.map((ref, i) => (
        <div key={i} ref={ref} style={{ height: 300 }}>
          Section {i + 1}
        </div>
      ))}
    </>
  );
}

export default Task8MultiScroll;
