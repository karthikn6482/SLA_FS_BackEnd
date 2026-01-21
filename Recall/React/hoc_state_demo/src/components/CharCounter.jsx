import { useState } from "react";

export default function CharCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h3>Count: {text.length}</h3>
    </div>
  );
}
