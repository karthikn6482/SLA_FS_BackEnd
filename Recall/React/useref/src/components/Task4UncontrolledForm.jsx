import { useRef } from "react";

function Task4UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Task4UncontrolledForm;
