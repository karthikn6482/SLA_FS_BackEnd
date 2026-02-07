import { useReducer, useRef, useState } from "react"
import { reducer } from "./reducer"

export default function Form() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: ""
  })
  const [count, setCount] = useState(0)

  const emailRef = useRef()
  const passRef = useRef()

  const submit = e => {
    e.preventDefault()
    setCount(c => c + 1)
    dispatch({ type: "RESET" })
  }

  return (
    <>
      <h3>Task 3</h3>
      <form onSubmit={submit}>
        <input
          value={state.name}
          onChange={e => dispatch({ type: "SET", field: "name", value: e.target.value })}
          onKeyDown={e => e.key === "Enter" && emailRef.current.focus()}
        />
        <input
          ref={emailRef}
          value={state.email}
          onChange={e => dispatch({ type: "SET", field: "email", value: e.target.value })}
          onKeyDown={e => e.key === "Enter" && passRef.current.focus()}
        />
        <input
          ref={passRef}
          value={state.password}
          onChange={e => dispatch({ type: "SET", field: "password", value: e.target.value })}
        />
        <button>Submit</button>
      </form>
      <p>Submitted: {count}</p>
    </>
  )
}
