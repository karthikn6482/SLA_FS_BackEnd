import { createContext, useRef } from "react";

export const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const inputRef = useRef();

  return (
    <FocusContext.Provider value={inputRef}>
      {children}
    </FocusContext.Provider>
  );
};
