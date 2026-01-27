import { useState } from "react";

function ObjectImmutable() {
  const [user, setUser] = useState({ name: "", age: 20 });

  const updateName = () => {
    setUser(prev => ({
      ...prev,
      name: "Karthikeyan"
    }));
  };

  return (
    <div>
      <h2>Immutable Object</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default ObjectImmutable;
