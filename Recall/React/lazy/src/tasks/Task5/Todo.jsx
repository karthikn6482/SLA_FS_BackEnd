import { useReducer, useRef, useState } from "react"
import { reducer } from "./reducer"

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  const timer = useRef()

  const add = value => {
    dispatch({ type: "ADD", payload: value })
    setCount(c => c + 1)
    inputRef.current.focus()
  }

  return (
    <>
      <h3>Task 5</h3>
      <input
        ref={inputRef}
        onChange={e => {
          clearTimeout(timer.current)
          const val = e.target.value
          timer.current = setTimeout(() => add(val), 1000)
        }}
      />
      {todos.map((t, i) => (
        <div key={i}>
          {t}
          <button onClick={() => dispatch({ type: "DEL", payload: i })}>X</button>
        </div>
      ))}
      <p>Total Added: {count}</p>
    </>
  )
}
