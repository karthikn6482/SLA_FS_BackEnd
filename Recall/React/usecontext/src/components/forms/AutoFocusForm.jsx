import { useRef, useState } from "react";

export default function AutoFocusForm() {
  const [email, setEmail] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Auto Focus Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
