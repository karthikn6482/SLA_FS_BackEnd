import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export default function CounterIncrement() {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(c => c + 1)}>+</button>;
}
