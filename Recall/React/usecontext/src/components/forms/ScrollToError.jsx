import { useRef, useState } from "react";

export default function ScrollToError() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) return nameRef.current.focus();
    if (!form.email) return emailRef.current.focus();
    if (!form.age) return ageRef.current.focus();

    alert("Form submitted");
  };

  return (
    <div>
      <h3>Scroll to Error</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          ref={emailRef}
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          ref={ageRef}
          placeholder="Age"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
