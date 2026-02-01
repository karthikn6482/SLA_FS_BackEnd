import { useRef, useState } from "react";

export default function FocusAfterUpdate() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = () => {
    setText("");
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Focus After Submit</h3>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
