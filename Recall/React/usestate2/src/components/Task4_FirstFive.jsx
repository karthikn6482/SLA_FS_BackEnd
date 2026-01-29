import { useEffect, useState } from "react";

export default function Task4() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 5)));
  }, []);

  return (
    <>
      <h2>Task 4</h2>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
