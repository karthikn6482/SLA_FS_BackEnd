import { useEffect, useReducer, useRef, useState } from "react"
import { reducer } from "./reducer"

export default function ScrollPage() {
  const [count, setCount] = useState(0)
  const [positions, dispatch] = useReducer(reducer, [])
  const lastTime = useRef(0)
  const prevScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const now = Date.now()
      if (now - lastTime.current < 1000) return
      lastTime.current = now
      setCount(c => c + 1)
      prevScroll.current = window.scrollY
      dispatch({ type: "ADD", payload: prevScroll.current })
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <h3>Task 2</h3>
      <div style={{ height: "150vh" }} />
      <p>Scroll Count: {count}</p>
      {positions.map((p, i) => <div key={i}>{p}</div>)}
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
    </>
  )
}
