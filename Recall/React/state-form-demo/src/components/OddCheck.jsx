import { useState } from "react";

function OddCheck() {
  const [num, setNum] = useState("");

  return (
    <>
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setNum(e.target.value)}
      />

      {num && (
        <p>
          {num % 2 === 0
            ? "This is an Even Number"
            : "This is not an Even Number"}
        </p>
      )}
    </>
  );
}

export default OddCheck;
