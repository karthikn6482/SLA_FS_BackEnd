import CounterStep from "./components/CounterStep";
import FormReducer from "./components/FormReducer";
import TodoReducer from "./components/TodoReducer";
import ThemeReducer from "./components/ThemeReducer";

function App() {
  return (
    <div>
      <h1>useReducer Tasks</h1>
      <CounterStep />
      <FormReducer />
      <TodoReducer />
      <ThemeReducer />
    </div>
  );
}

export default App;
