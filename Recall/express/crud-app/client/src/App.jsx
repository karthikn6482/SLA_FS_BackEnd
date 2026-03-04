import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // READ
  const fetchItems = async () => {
    const res = await API.get("/");
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // CREATE
  const addItem = async () => {
    await API.post("/", { name, price });
    fetchItems();
    setName("");
    setPrice("");
  };

  // DELETE
  const deleteItem = async (id) => {
    await API.delete(`/${id}`);
    fetchItems();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD App</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - ₹{item.price}
            <button onClick={() => deleteItem(item._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;