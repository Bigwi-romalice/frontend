import { Navbar, CustomerSidebar } from "../components";
import { Outlet } from "react-router";

export const CustomerLayout = () => {
  return (
    <main className="d-flex vh-100">
      {/* Sidebar Section */}
      <CustomerSidebar className="sidebar" />

      {/* Main Content Section */}
      <section className="main-content flex-grow-1">
        <Navbar />
        <Outlet />
      </section>
    </main>
  );
};
