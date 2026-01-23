import { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    quantity: ""
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const getStockStatus = () => {
    if (product.quantity === "0") return "Out of Stock";
    if (product.quantity < 5) return "Low Stock";
    return "In Stock";
  };

  return (
    <>
      <h2>Product Form</h2>

      <form onSubmit={(e) => { e.preventDefault(); setShow(true); }}>
        <input name="productName" placeholder="Product Name" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="quantity" placeholder="Quantity" onChange={handleChange} />
        <button>Add Product</button>
      </form>

      {show && (
        <div className="card">
          <p>{product.productName}</p>
          <p>₹ {product.price}</p>
          <p>Status: {getStockStatus()}</p>
        </div>
      )}
    </>
  );
}

export default ProductForm;
