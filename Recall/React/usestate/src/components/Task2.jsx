import { useState } from "react";
import { toast } from "react-toastify";

function Task2() {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Number(num);

    if (n >= 50 && n <= 150 && n % 5 === 0) {
      toast.success("Valid Number");
    } else {
      toast.error("Invalid Number");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Task 2: Range Validation</h3>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button>Validate</button>
    </form>
  );
}

export default Task2;
