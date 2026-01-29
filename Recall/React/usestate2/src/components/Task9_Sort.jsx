import { useEffect, useState } from "react";

export default function Task9() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const sortData = () => {
    const sorted = [...users].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUsers(sorted);
  };

  return (
    <>
      <h2>Task 9</h2>
      <button onClick={sortData}>Sort</button>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
