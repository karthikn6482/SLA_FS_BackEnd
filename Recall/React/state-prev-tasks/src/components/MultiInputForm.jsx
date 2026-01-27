import { useState } from "react";

function MultiInputForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Multi Input Form</h2>

      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />

      <p>{form.username}</p>
      <p>{form.email}</p>
      <p>{form.password}</p>
    </div>
  );
}

export default MultiInputForm;
