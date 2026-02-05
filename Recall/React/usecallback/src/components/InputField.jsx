import React from "react"

function InputField({ name, value, onChange }) {
  console.log("Input render:", name)
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={name}
    />
  )
}

export default React.memo(InputField)
