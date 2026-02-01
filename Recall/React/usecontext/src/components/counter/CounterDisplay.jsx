import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export default function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return <h3>Count: {count}</h3>;
}
