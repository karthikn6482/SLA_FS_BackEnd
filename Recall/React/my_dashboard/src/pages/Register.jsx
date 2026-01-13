import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Register</h2>

      <input type="text" placeholder="Username" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button>Register</button>

      <p onClick={() => navigate("/")}>Go to Login</p>
    </div>
  );
}

export default Register;
