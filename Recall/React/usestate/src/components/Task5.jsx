import { useState } from "react";
import { toast } from "react-toastify";

function Task5() {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Number(num);

    if (n % 3 === 0 && n % 5 === 0) {
      toast.success("Special Number");
      setNum("");
    } else {
      toast.info("Normal Number");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Task 5: Conditional Reset</h3>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button>Check</button>
    </form>
  );
}

export default Task5;
