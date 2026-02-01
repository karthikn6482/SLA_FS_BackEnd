import { useEffect, useRef, useState } from "react";

export default function TimerSubmitForm() {
  const [feedback, setFeedback] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    if (feedback && !timerRef.current) {
      timerRef.current = setTimeout(() => {
        alert("Auto Submitted: " + feedback);
        setFeedback("");
        timerRef.current = null;
      }, 10000);
    }

    return () => clearTimeout(timerRef.current);
  }, [feedback]);

  return (
    <div>
      <h3>Timer Submit Form</h3>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Type feedback..."
      />
    </div>
  );
}
