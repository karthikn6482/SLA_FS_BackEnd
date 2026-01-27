import { useState } from "react";

function SubmitCounter() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Submit Counter</h2>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <p>Submitted: {count} times</p>
    </div>
  );
}

export default SubmitCounter;
