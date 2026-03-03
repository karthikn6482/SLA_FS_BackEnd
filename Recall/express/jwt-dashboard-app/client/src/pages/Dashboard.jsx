import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      try {
        const res = await API.get("/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (error) {
        alert("Token Invalid");
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      {user && <h3>Welcome {user.name}</h3>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;