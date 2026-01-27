import { useState } from "react";

function ValidationForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    if (form.password.length < 6) {
      alert("Password too short");
      return;
    }

    alert("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Validation Form</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;
