import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"

import { ThemeProvider } from "./context/ThemeContext";
import { CounterProvider } from "./context/CounterContext";
import { FocusProvider } from "./context/FocusContext";
import { AuthProvider } from "./context/AuthContext";
import { RenderProvider } from "./context/RenderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CounterProvider>
      <FocusProvider>
        <AuthProvider>
          <RenderProvider>
            <App />
          </RenderProvider>
        </AuthProvider>
      </FocusProvider>
    </CounterProvider>
  </ThemeProvider>
);
