import { useState } from "react";

function ConditionalUI() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional UI</h2>

      <button onClick={() => setIsLoggedIn(prev => !prev)}>
        Toggle
      </button>

      {isLoggedIn && <p>Welcome User</p>}
      {!isLoggedIn && <p>Please Login</p>}
    </div>
  );
}

export default ConditionalUI;
