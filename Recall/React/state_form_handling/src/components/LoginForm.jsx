import { useState } from "react";

function LoginForm() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    role: ""
  });

  const [error, setError] = useState("");
  const [dashboard, setDashboard] = useState("");

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!login.username || !login.password || !login.role) {
      setError("All fields are required");
      return;
    }

    setError("");
    setDashboard(login.role);
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="password" placeholder="Password" onChange={handleChange} />
        <select name="role" onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button>Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {dashboard === "admin" && <h3>Admin Dashboard</h3>}
      {dashboard === "user" && <h3>User Dashboard</h3>}
    </>
  );
}

export default LoginForm;
