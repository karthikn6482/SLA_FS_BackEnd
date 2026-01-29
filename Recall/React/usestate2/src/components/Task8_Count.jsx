import { useState } from "react";

export default function Task8() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  };

  return (
    <>
      <h2>Task 8</h2>
      <button onClick={fetchData}>Fetch</button>
      {loading && <p>Loading...</p>}
      {users.length > 0 && <p>Total Records: {users.length}</p>}
    </>
  );
}
