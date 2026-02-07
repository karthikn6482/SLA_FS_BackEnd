import { useReducer, useRef, useState, lazy, Suspense } from "react"
import { reducer } from "./reducer"

const Preview = lazy(() => import("./Preview"))

export default function Controller() {
  const [state, dispatch] = useReducer(reducer, { dark: false, size: 16 })
  const [count, setCount] = useState(0)
  const prevSize = useRef(16)

  return (
    <>
      <h3>Task 4</h3>
      <button onClick={() => { dispatch({ type: "THEME" }); setCount(c => c + 1) }}>
        Toggle Theme
      </button>
      <input
        type="number"
        value={state.size}
        onChange={e => {
          prevSize.current = state.size
          dispatch({ type: "FONT", payload: +e.target.value })
          setCount(c => c + 1)
        }}
      />
      <p>Changes: {count}</p>
      <Suspense fallback="Loading...">
        <Preview dark={state.dark} size={state.size} />
      </Suspense>
    </>
  )
}
