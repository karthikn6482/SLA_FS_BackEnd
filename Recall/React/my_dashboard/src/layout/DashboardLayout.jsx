import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{ width: "200px", background: "#2563eb", color: "white", padding: "20px" }}>
        <h2>Dashboard</h2>

        <NavLink to="/dashboard" style={{ color: "white", display: "block", margin: "10px 0" }}>
          Home
        </NavLink>

        <NavLink to="/dashboard/profile" style={{ color: "white", display: "block", margin: "10px 0" }}>
          Profile
        </NavLink>
      </div>

      {/* Page content */}
      <div style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;
