import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h1>Profile Page</h1>

      {data ? (
        <>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Role: {data.role}</p>
        </>
      ) : (
        <p>No data received</p>
      )}
    </div>
  );
}

export default Profile;
