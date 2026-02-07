import { useReducer, useRef, useState, lazy, Suspense } from "react"
import { reducer } from "./reducer"

const TextView = lazy(() => import("./TextView"))

export default function Settings() {
  const [state, dispatch] = useReducer(reducer, { dark: false, size: 14 })
  const [count, setCount] = useState(0)
  const prev = useRef(14)

  return (
    <>
      <h3>Task 6</h3>
      <button onClick={() => { dispatch({ type: "THEME" }); setCount(c => c + 1) }}>
        Theme
      </button>
      <input
        type="number"
        value={state.size}
        onChange={e => {
          prev.current = state.size
          dispatch({ type: "FONT", payload: +e.target.value })
          setCount(c => c + 1)
        }}
      />
      <p>Changes: {count}</p>
      <Suspense fallback="Loading...">
        <TextView dark={state.dark} size={state.size} />
      </Suspense>
    </>
  )
}
