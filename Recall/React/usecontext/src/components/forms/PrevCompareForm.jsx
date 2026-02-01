import { useEffect, useRef, useState } from "react";

export default function PrevCompareForm() {
  const [phone, setPhone] = useState("");
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = phone;
  }, [phone]);

  return (
    <div>
      <h3>Phone Comparison</h3>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
      />
      <p>
        {phone === prevRef.current ? "Same as previous" : "Value changed"}
      </p>
    </div>
  );
}
