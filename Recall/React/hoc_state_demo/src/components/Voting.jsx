import { useState } from "react";

export default function Voting() {
  const [age, setAge] = useState(0);

  return (
    <div>
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <h3>{age >= 18 ? "Eligible" : "Not Eligible"}</h3>
    </div>
  );
}
