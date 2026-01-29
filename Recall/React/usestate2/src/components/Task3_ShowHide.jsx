import { useEffect, useState } from "react";

export default function Task3() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h2>Task 3</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && users.map(u => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
