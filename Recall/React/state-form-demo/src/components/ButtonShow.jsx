import { useState } from "react";

function ButtonShow() {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowText(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setText(e.target.value)} />
        <button type="submit">Show</button>
      </form>

      <p>Output: {showText}</p>
    </>
  );
}

export default ButtonShow;
