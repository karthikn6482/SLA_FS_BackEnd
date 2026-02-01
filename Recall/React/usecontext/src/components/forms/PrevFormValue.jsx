import { useEffect, useRef, useState } from "react";

export default function PrevFormValue() {
  const [name, setName] = useState("");
  const prevNameRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    prevNameRef.current = name;
    setName("");
  };

  return (
    <div>
      <h3>Previous Name Tracker</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Previous Name: {prevNameRef.current}</p>
    </div>
  );
}
