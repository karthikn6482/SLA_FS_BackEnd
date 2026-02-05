import { useState } from "react";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import SearchList from "./components/SearchList";
import Factorial from "./components/Factorial";
import SortedNumbers from "./components/SortedNumbers";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <Counter />
      <ProductList />
      <SearchList />
      <Factorial />
      <SortedNumbers theme={theme} />
    </div>
  );
}
