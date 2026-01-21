import { useState } from "react";

export default function PositiveNegative() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <h3>
        {num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"}
      </h3>
    </div>
  );
}
