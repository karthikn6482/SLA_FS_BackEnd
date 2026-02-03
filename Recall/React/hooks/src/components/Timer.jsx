import useTimer from "../hooks/useTimer";

export default function Timer() {
  const seconds = useTimer();

  return <h2>Seconds: {seconds}</h2>;
}
