import { useEffect } from "react";
import API from "../api";

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const res = await API.get("/dashboard", {
        headers: { Authorization: token },
      });

      alert(res.data.message);
    };

    fetchData();
  }, []);

  return <h2>Dashboard</h2>;
}

export default Dashboard;