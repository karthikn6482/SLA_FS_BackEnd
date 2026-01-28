import { useState } from "react";
import { toast } from "react-toastify";

function Task4() {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^9\d{3}$/.test(num)) {
      toast.success("Accepted Number");
    } else {
      toast.error("Rejected Number");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Task 4: Pattern Check</h3>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button>Check</button>
    </form>
  );
}

export default Task4;
