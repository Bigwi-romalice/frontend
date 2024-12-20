import { NavLink } from "react-router-dom";

export const CustomerSidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark vh-100 p-3">
      <h5 className="text-center text-white mb-4">Shopery</h5>
      <ul className="nav flex-column">
        {/* All Orders Button */}
        <li className="nav-item">
          <NavLink
            to="/customerDashboard"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-box-open me-2"></i>All Orders
          </NavLink>
        </li>

        {/* Carts Button */}
        <li className="nav-item">
          <NavLink
            to="/customerCart"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-shopping-cart me-2"></i>Carts
          </NavLink>
        </li>

        {/* Notifications Button */}
        <li className="nav-item">
          <NavLink
            to="/customerMsg"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-bell me-2"></i>Notifications
          </NavLink>
        </li>

        {/* Profile Button */}
        <li className="nav-item">
          <NavLink
            to="/customerProfile"
            className={({ isActive }) =>
              `nav-link text-light ${isActive ? "active bg-success rounded" : ""}`
            }
          >
            <i className="fas fa-user me-2"></i>Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
