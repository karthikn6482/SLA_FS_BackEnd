import { useEffect, useReducer, useRef, useState, lazy, Suspense } from "react"
import { reducer } from "./reducer"

const History = lazy(() => import("./History"))

export default function Search() {
  const inputRef = useRef()
  const timer = useRef()
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  const [history, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    clearTimeout(timer.current)
    if (!text) return
    timer.current = setTimeout(() => {
      setCount(c => c + 1)
      dispatch({ type: "ADD", payload: text })
    }, 1000)
  }, [text])

  return (
    <>
      <h3>Task 1</h3>
      <input ref={inputRef} onChange={e => setText(e.target.value)} />
      <p>Search Count: {count}</p>
      <Suspense fallback="Loading...">
        <History list={history} clear={() => dispatch({ type: "CLEAR" })} />
      </Suspense>
    </>
  )
}
