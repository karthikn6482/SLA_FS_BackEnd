import StudentRegistration from "./components/StudentRegistration";
import ProductForm from "./components/ProductForm";
import EditProfile from "./components/EditProfile";
import LoginForm from "./components/LoginForm";
import AddressForm from "./components/AddressForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <StudentRegistration />
      <ProductForm />
      <EditProfile />
      <LoginForm />
      <AddressForm />
    </div>
  );
}

export default App;
