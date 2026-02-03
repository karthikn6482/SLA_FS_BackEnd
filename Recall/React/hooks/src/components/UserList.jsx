import useFetch from "../hooks/useFetch";

export default function UserList() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h3>Loading...</h3>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
