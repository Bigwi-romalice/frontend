import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
       
      >
        <div className="container">
          {/* Logo Link */}
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", width: "auto" }}
            />
          </NavLink>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) =>
                    isActive ? { color: "#fff", fontWeight: "bold" } : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/shop"
                  style={({ isActive }) =>
                    isActive ? { color: "#fff", fontWeight: "bold" } : undefined
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/auth/login"
                  style={({ isActive }) =>
                    isActive ? { color: "#fff", fontWeight: "bold" } : undefined
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/auth/signup"
                  style={({ isActive }) =>
                    isActive ? { color: "#fff", fontWeight: "bold" } : undefined
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};


