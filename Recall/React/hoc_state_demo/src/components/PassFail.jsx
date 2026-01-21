import { useState } from "react";

export default function PassFail() {
  const [marks, setMarks] = useState(0);

  return (
    <div>
      <input type="number" onChange={(e) => setMarks(e.target.value)} />
      <h3>{marks >= 40 ? "Pass" : "Fail"}</h3>
    </div>
  );
}
