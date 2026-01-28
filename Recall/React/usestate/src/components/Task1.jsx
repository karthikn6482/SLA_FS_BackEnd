import { useState } from "react";
import { toast } from "react-toastify";

function Task1() {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Number(num);

    if (n >= 10 && n <= 100 && n % 10 === 0) {
      toast.success("Good Number");
    } else {
      toast.error("Not a Good Number");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Task 1: Good Number</h3>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button>Check</button>
    </form>
  );
}

export default Task1;
