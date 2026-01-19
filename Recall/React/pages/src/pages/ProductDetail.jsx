import { useLocation } from "react-router-dom";
import { useState } from "react";

function ProductDetail() {
  const location = useLocation();
  const product = location.state;

  const [price, setPrice] = useState(product.price);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {price}</p>
      <button onClick={() => setPrice(price + 1000)}>Increase Price</button>
    </div>
  );
}

export default ProductDetail;
