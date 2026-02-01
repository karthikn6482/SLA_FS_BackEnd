import { createContext, useRef } from "react";

export const RenderContext = createContext();

export const RenderProvider = ({ children }) => {
  const renderCount = useRef(0);
  return (
    <RenderContext.Provider value={renderCount}>
      {children}
    </RenderContext.Provider>
  );
};
