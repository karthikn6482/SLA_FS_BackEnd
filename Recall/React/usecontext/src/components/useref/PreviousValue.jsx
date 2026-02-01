import { useEffect, useRef, useState } from "react";

export default function PreviousValue() {
  const [text, setText] = useState("");
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = text;
  }, [text]);

  return (
    <div>
      <h3>Previous Value Tracker</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Current: {text}</p>
      <p>Previous: {prevRef.current}</p>
    </div>
  );
}
