import { useEffect, useRef } from "react";

export default function PreventMultiSubmit() {
  const btnRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    btnRef.current.disabled = true;
  };

  useEffect(() => {
    if (btnRef.current?.disabled) {
      const timer = setTimeout(() => {
        btnRef.current.disabled = false;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [btnRef.current?.disabled]);

  return (
    <div>
      <h3>Prevent Multiple Submit</h3>
      <form onSubmit={handleSubmit}>
        <button ref={btnRef}>Register</button>
      </form>
    </div>
  );
}
