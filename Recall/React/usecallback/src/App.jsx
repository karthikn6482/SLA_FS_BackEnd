import { useState, useCallback } from "react"
import CounterChild from "./components/CounterChild"
import ItemList from "./components/ItemList"
import InputField from "./components/InputField"
import Button from "./components/Button"

export default function App() {
  const [dark, setDark] = useState(false)
  const [count, setCount] = useState(0)
  const [items, setItems] = useState(["Apple", "Banana", "Orange"])
  const [form, setForm] = useState({ name: "", email: "" })

  const themeStyle = {
    background: dark ? "#222" : "#eee",
    color: dark ? "#fff" : "#000",
    padding: "20px"
  }

  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, [])

  const toggleTheme = useCallback(() => {
    setDark(d => !d)
  }, [])

  const deleteItem = useCallback((item) => {
    setItems(prev => prev.filter(i => i !== item))
  }, [])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleBtnClick = useCallback((id) => {
    console.log("Button clicked:", id)
  }, [])

  return (
    <div style={themeStyle}>
      <h2>Count: {count}</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
      <CounterChild onIncrement={increment} />

      <hr />

      <ItemList items={items} onDelete={deleteItem} />

      <hr />

      <InputField name="name" value={form.name} onChange={handleChange} />
      <InputField name="email" value={form.email} onChange={handleChange} />

      <hr />

      <Button id={1} onClick={handleBtnClick} />
      <Button id={2} onClick={handleBtnClick} />
      <Button id={3} onClick={handleBtnClick} />
    </div>
  )
}
