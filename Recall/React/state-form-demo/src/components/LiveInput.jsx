import { useState } from "react";

function LiveInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Typed Value: {name}</p>
    </>
  );
}

export default LiveInput;
