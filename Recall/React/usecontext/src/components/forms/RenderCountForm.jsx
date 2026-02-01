import { useEffect, useRef, useState } from "react";

export default function RenderCountForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <h3>Render Count Form</h3>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Renders: {renderCount.current}</p>
    </div>
  );
}
