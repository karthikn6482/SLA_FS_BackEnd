import { useLocation } from "react-router-dom";
import { useState } from "react";

function OrderDetails() {
  const location = useLocation();
  const order = location.state;

  const [status, setStatus] = useState(order.status);

  return (
    <div>
      <h2>Order: {order.item}</h2>
      <p>Status: {status}</p>
      <button onClick={() => setStatus("Delivered")}>Mark Delivered</button>
    </div>
  );
}

export default OrderDetails;
