import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ThemePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const mode = params.get("mode") || "light";

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(mode);
  }, [mode]);

  return (
    <div className="page">
      <h2>{mode.toUpperCase()} MODE</h2>
      <p>Theme applied globally</p>
    </div>
  );
}

export default ThemePage;
