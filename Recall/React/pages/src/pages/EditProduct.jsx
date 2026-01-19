import { useLocation } from "react-router-dom";
import { useState } from "react";

function EditProduct() {
  const location = useLocation();
  const product = location.state;

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSave = () => {
    console.log("Updated:", { name, price });
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditProduct;
