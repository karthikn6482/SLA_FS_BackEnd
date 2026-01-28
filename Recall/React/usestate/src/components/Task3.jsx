import { useState } from "react";
import { toast } from "react-toastify";

function Task3() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (count >= 3) {
      toast.error("Limit Reached");
      return;
    }

    setCount(count + 1);
    toast.success(`Submitted ${count + 1} time(s)`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Task 3: Attempt Limit</h3>
      <input type="text" />
      <button disabled={count >= 3}>Submit</button>
    </form>
  );
}

export default Task3;
