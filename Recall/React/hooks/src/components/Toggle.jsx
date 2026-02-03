import useInput from "../hooks/useInput";

export default function InputBox() {
  const name = useInput("");

  return (
    <div>
      <input placeholder="Enter name" {...name} />
      <h3>{name.value}</h3>
    </div>
  );
}
