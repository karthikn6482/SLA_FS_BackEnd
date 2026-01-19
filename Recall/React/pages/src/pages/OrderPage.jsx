import { useNavigate } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();

  const order = {
    id: 101,
    item: "Laptop",
    status: "Pending",
  };

  return (
    <div>
    <p>View Order ProductList</p>
      <button onClick={() => navigate("/order-details", { state: order })}>
        View Order
      </button>
    </div>
  );
}

export default OrderPage;
