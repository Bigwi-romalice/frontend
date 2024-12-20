export const VendorFooter = () => {
  return (
    <footer className="footerVendor bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© 2024 Shopery. All Rights Reserved.</p>
        <p className="mb-0">
          <a href="/privacy" className="text-decoration-none text-white me-3">
            Privacy Policy
          </a>
          <a href="/terms" className="text-decoration-none text-white">
            Terms of Service
          </a>
        </p>
        <div className="mt-2">
          <a
            href="https://facebook.com"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
