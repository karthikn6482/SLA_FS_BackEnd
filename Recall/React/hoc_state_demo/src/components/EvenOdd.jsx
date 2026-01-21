import { useState } from "react";

export default function EvenOdd() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <h3>{num % 2 === 0 ? "Even" : "Odd"}</h3>
    </div>
  );
}
