import { useState } from "react";

function AgeCheck() {
  const [age, setAge] = useState("");

  return (
    <>
      <input
        type="number"
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />

      {age && (
        <p>{age >= 18 ? "Eligible for Voting" : "Not Eligible"}</p>
      )}
    </>
  );
}

export default AgeCheck;
