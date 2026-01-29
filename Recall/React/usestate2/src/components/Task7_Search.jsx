import { useEffect, useState } from "react";

export default function Task7() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Task 7</h2>
      <input
        placeholder="Search name"
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.map(u => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
