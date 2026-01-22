import { useState } from "react";

function NumberArray() {
  const [num, setNum] = useState("");
  const [list, setList] = useState([]);

  const addNumber = () => {
    setList([...list, num]);
    setNum("");
  };

  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={addNumber}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default NumberArray;
