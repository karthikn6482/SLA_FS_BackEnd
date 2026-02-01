import { useContext } from "react";
import { FocusContext } from "../../context/FocusContext";

export default function FocusButton() {
  const inputRef = useContext(FocusContext);
  return <button onClick={() => inputRef.current.focus()}>Focus</button>;
}
