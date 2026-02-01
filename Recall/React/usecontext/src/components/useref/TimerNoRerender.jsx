import { useRef, useState } from "react";

export default function TimerNoRerender() {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h3>Timer (useRef)</h3>
      <p>Seconds: {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
