import React from "react"

function CounterChild({ onIncrement }) {
  console.log("CounterChild render")
  return <button onClick={onIncrement}>Increment</button>
}

export default React.memo(CounterChild)
