import { useState } from "react";

export default function Task2() {
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
      <h2>Task 2</h2>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
