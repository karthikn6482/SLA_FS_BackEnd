import { useState } from "react";

function EditProfile() {
  const [user, setUser] = useState({
    name: "Karthikeyan",
    email: "karthi@gmail.com",
    city: "Chennai"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Profile Updated Successfully");
  };

  return (
    <>
      <h2>Edit Profile</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={user.name} onChange={handleChange} />
        <input name="email" value={user.email} onChange={handleChange} />
        <input name="city" value={user.city} onChange={handleChange} />
        <button>Update</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
    </>
  );
}

export default EditProfile;
