import { useState } from "react";

export default function SquareCube() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <h3>Square: {num * num}</h3>
      <h3>Cube: {num * num * num}</h3>
    </div>
  );
}
