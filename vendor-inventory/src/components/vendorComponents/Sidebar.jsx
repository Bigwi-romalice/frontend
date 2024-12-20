import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark vh-100 p-3">
      <h5 className="text-center text-white mb-4">Shopery</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            to="/vendorDashboard"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-tachometer-alt me-2"></i>Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/myshop"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-store me-2"></i>MyShop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/vendororders"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-box me-2"></i>VendorOrders
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-bell me-2"></i>Notification
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
