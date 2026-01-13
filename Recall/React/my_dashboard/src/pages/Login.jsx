import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Login</button>
      </form>

      <p onClick={() => navigate("/register")}>Go to Register</p>
    </div>
  );
}

export default Login;
