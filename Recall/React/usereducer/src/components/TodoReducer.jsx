import { useReducer, useState } from "react";

const initialState = { todos: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((_, index) => index !== action.payload)
      };
    case "CLEAR_ALL":
      return initialState;
    default:
      return state;
  }
}

function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Todo Reducer</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          if (text.trim()) {
            dispatch({ type: "ADD_TODO", payload: text });
            setText("");
          }
        }}
      >
        Add
      </button>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: index })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
        Clear All
      </button>
    </div>
  );
}

export default TodoReducer;
