import { useReducer } from "react";

const initialState = {
  dark: false,
  fontSize: 16
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, dark: !state.dark };
    case "INC_FONT":
      return { ...state, fontSize: state.fontSize + 2 };
    case "DEC_FONT":
      return { ...state, fontSize: state.fontSize - 2 };
    default:
      return state;
  }
}

function ThemeReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const style = {
    background: state.dark ? "#222" : "#fff",
    color: state.dark ? "#fff" : "#000",
    padding: "20px",
    fontSize: state.fontSize
  };

  return (
    <div style={style}>
      <h2>Theme & Font Reducer</h2>

      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>

      <button onClick={() => dispatch({ type: "INC_FONT" })}>
        Increase Font
      </button>

      <button onClick={() => dispatch({ type: "DEC_FONT" })}>
        Decrease Font
      </button>
    </div>
  );
}

export default ThemeReducer;
