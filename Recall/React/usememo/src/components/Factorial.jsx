import { useMemo, useState } from "react";

export default function Factorial() {
  const [num, setNum] = useState(1);

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  return (
    <div>
      <h3>Factorial</h3>
      <input
        type="number"
        value={num}
        onChange={e => setNum(Number(e.target.value))}
      />
      <p>Factorial: {factorial}</p>
    </div>
  );
}
