import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import ThemePage from "./pages/ThemePage";
import OrderPage from "./pages/OrderPage";
import OrderDetails from "./pages/OrderDetails";
import ProductSender from "./pages/ProductSender";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="product" element={<ProductDetail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="theme" element={<ThemePage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="order-details" element={<OrderDetails />} />
        <Route path="send" element={<ProductSender />} />
        <Route path="edit" element={<EditProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
