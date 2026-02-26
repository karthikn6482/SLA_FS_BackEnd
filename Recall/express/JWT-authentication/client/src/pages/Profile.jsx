import { useEffect, useState } from "react";
import API from "../api/axios";

function Profile() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/profile");
        setData(res.data.message);
      } catch (err) {
        setError("Unauthorized! Please login first.");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container">
      <h2>Profile Page</h2>

      {data && <h3>{data}</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </div>
  );
}

export default Profile;