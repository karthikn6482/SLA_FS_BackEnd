import { useEffect, useState } from "react";

export default function Task10() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const clearAll = () => setUsers([]);

  return (
    <>
      <h2>Task 10</h2>
      <button onClick={clearAll}>Clear All</button>

      {users.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        users.map(u => <p key={u.id}>{u.name}</p>)
      )}
    </>
  );
}
