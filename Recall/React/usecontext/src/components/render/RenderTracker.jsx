import { useContext, useEffect } from "react";
import { RenderContext } from "../../context/RenderContext";

export default function RenderTracker() {
  const renderRef = useContext(RenderContext);

  useEffect(() => {
    renderRef.current++;
  });

  return <h3>Renders: {renderRef.current}</h3>;
}
