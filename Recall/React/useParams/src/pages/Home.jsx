import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const sendData = () => {
    navigate("/profile", {
      state: {
        name: "Karthikeyan",
        age: 22,
        role: "Developer",
      },
    });
  };

  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/product/101">Go to Product 101</Link>

      <br /><br />

      <button onClick={sendData}>Send Data to Profile</button>
    </div>
  );
}

export default Home;
