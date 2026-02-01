import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "10px",
        marginTop: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <h3>Current Theme</h3>
      <p>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</p>
    </div>
  );
}
