import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 5 };
    case "DEC":
      return { count: state.count - 5 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function CounterStep() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter With Step</h2>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INC" })}>+5</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-5</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default CounterStep;
