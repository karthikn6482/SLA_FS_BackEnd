import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  return <button onClick={() => setUser("Karthikeyan")}>Login</button>;
}
