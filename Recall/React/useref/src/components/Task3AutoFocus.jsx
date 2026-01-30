import { useRef, useEffect } from "react";

function Task3AutoFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Auto Focused" />;
}

export default Task3AutoFocus;
