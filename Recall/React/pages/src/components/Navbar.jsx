import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>

        <NavLink
          to="/profile?name=Karthik&age=22"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Order
        </NavLink>
      </div>

      <div className="nav-right">
        <button onClick={() => navigate("/theme?mode=light")}>Light</button>
        <button onClick={() => navigate("/theme?mode=dark")}>Dark</button>
      </div>
    </nav>
  );
}

export default Navbar;
