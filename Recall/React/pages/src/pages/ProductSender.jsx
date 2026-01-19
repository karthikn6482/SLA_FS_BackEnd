import { useNavigate } from "react-router-dom";

function ProductSender() {
  const navigate = useNavigate();

  const product = {
    name: "Headphones",
    price: 2000,
  };

  return (
    <button onClick={() => navigate("/edit", { state: product })}>
      Edit Product
    </button>
  );
}

export default ProductSender;
