import React from "react"

function Item({ item, onDelete }) {
  console.log("Item render:", item)
  return (
    <div>
      {item}
      <button onClick={() => onDelete(item)}>Delete</button>
    </div>
  )
}

export default React.memo(Item)
