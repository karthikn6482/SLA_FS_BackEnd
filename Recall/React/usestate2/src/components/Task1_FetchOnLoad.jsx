import { useEffect, useState } from "react";

export default function Task1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h2>Task 1</h2>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
