import { useEffect, useState } from "react";

export default function Task6() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const removeUser = id => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <>
      <h2>Task 6</h2>
      {users.map(u => (
        <p key={u.id}>
          {u.name}
          <button onClick={() => removeUser(u.id)}>❌</button>
        </p>
      ))}
    </>
  );
}
