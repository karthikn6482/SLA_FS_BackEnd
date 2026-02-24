import { useState } from "react";
import axios from "axios";

function SendData() {
  const [response, setResponse] = useState(null);

  const sendData = async () => {
    try {
      const userData = {
        name: "Karthikeyan",
        email: "karthik@gmail.com"
      };

      const res = await axios.post(
        "http://localhost:5000/api/send-data",
        userData
      );

      console.log(res.data);
      setResponse(res.data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Vite → Node API</h2>

      <button onClick={sendData}>
        Send Data to Backend
      </button>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response from Backend:</h3>
          <p><b>Message:</b> {response.message}</p>
          <p><b>Name:</b> {response.name}</p>
          <p><b>Email:</b> {response.email}</p>
          <p><b>Status:</b> {response.status}</p>
        </div>
      )}
    </div>
  );
}

export default SendData;