import { useContext } from "react";
import { FocusContext } from "../../context/FocusContext";

export default function FocusInput() {
  const inputRef = useContext(FocusContext);
  return <input ref={inputRef} placeholder="Focus me" />;
}
