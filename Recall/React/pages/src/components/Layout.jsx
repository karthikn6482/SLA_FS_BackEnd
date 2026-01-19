import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
