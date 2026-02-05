import { useEffect, useMemo, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=50")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const totalPrice = useMemo(() => {
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  return (
    <div>
      <h3>Products</h3>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}
