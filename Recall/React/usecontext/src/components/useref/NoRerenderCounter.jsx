import { useRef, useState } from "react";

export default function NoRerenderCounter() {
  const refCount = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  return (
    <div>
      <h3>useRef vs useState</h3>

      <button onClick={() => refCount.current++}>
        Ref Count (no re-render)
      </button>
      <p>Ref Count: {refCount.current}</p>

      <button onClick={() => setStateCount(stateCount + 1)}>
        State Count (re-render)
      </button>
      <p>State Count: {stateCount}</p>
    </div>
  );
}
