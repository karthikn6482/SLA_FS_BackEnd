import useFetchUsers from "../hooks/useFetchUsers";

const Users = () => {
  const { data, loading, error } = useFetchUsers();

  if (loading) return <h3>Loading users...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Users</h2>
      {data.map(user => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
