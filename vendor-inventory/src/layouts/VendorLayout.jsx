import { Outlet } from "react-router";
import { Navbar, Sidebar } from "../components";

export const VendorLayout = () => {
  return (
    <main className="d-flex vh-100">
      {/* Sidebar Section */}
      <Sidebar className="sidebar" />

      {/* Main Content Section */}
      <section className="main-content flex-grow-1">
      <Navbar/>
        <Outlet />
        
      </section>
    </main>
  );
};
