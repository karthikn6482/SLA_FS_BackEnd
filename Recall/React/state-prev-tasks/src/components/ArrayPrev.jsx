import { useState } from "react";

function ArrayPrev() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  return (
    <div>
      <h2>Array Prev</h2>
      <button onClick={addNumber}>Add</button>

      <ul>
        {numbers.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayPrev;
