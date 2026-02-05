import React from "react"

function Button({ id, onClick }) {
  console.log("Button render:", id)
  return <button onClick={() => onClick(id)}>Button {id}</button>
}

export default React.memo(Button)
