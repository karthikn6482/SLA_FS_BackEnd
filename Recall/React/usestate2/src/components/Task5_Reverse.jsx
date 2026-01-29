import { useEffect, useState } from "react";

export default function Task5() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const reverseList = () => {
    setUsers([...users].reverse());
  };

  return (
    <>
      <h2>Task 5</h2>
      <button onClick={reverseList}>Reverse</button>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
