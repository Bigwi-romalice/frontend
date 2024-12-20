import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-light py-5 mt-auto" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-light text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none" to="/auth/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none" to="/auth/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:support@myshop.com" className="text-light text-decoration-none">
                  support@shopery.com
                </a>
              </li>
              <li>
                <a href="tel:+250788001122" className="text-light text-decoration-none">
                  +250788001122
                </a>
              </li>
              <li>
                <p className="text-light">KN 2  St 56, Kigali, Rwanda</p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://facebook.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="me-3">
                <a href="https://instagram.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          {/* App Store & Play Store */}
          <div className="col-md-6">
            <h5>Download Our App</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://play.google.com/store/apps" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-google-play fa-2x"></i> Play Store
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-apple fa-2x"></i> App Store
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="col-md-6">
            <h5>Payment Methods</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://www.mtn.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-microsoft fa-2x"></i> Momo
                </a>
              </li>
              <li>
                <a href="https://www.airtel.com" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-apple fa-2x"></i> Airtel Money
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} Shopery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
