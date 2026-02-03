import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";
import useOnlineStatus from "./hooks/useOnlineStatus";
import usePrevious from "./hooks/usePrevious";

export default function App() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  const [name, setName] = useLocalStorage("name", "");
  const { width, height } = useWindowSize();
  const isOnline = useOnlineStatus();
  const prevText = usePrevious(text);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Debounced: {debouncedText}</p>
      <p>Previous: {prevText}</p>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Stored Name: {name}</p>

      <p>Width: {width}</p>
      <p>Height: {height}</p>

      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
