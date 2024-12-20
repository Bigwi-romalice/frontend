import { Link } from "react-router-dom";
import { useState } from "react";
import { Products } from "../../data/Products"; // Importing Products data

export const ShopProducts = () => {
  // Sample Categories
  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Snacks",
    "Beverages",
  ];

  // State for filtering and pagination
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 30;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Filter Products by Category
  const filteredProducts =
    selectedCategory === "All"
      ? Products
      : Products.filter((product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="shop-container d-flex">
      {/* Left Side - Categories */}
      <aside
        className="categories-section p-3"
        style={{
          width: "15%",
          backgroundColor: "#f8f9fa",
          borderRight: "1px solid #ddd",
        }}
      >
        <h5>Categories</h5>
        <ul className="list-group">
          <li
            className={`list-group-item ${
              selectedCategory === "All" ? "active" : ""
            }`}
            style={{
              cursor: "pointer",
              backgroundColor: selectedCategory === "All" ? "#00B207" : "",
              color: selectedCategory === "All" ? "#fff" : "",
            }}
            onClick={() => setSelectedCategory("All")}
          >
            All Products
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`list-group-item ${
                selectedCategory === category ? "active" : ""
              }`}
              style={{
                cursor: "pointer",
                backgroundColor: selectedCategory === category ? "#00B207" : "",
                color: selectedCategory === category ? "#fff" : "",
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Side - Products */}
      <main className="products-section p-3" style={{ width: "85%" }}>
        <h2 className="text-center">Shop Our Products</h2>
        <div className="row">
          {currentProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Link
                to={`/shop/product/${product.id}`}
                className="text-decoration-none"
              >
                <div className="card h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top img-fluid"
                    style={{
                      objectFit: "cover",
                      height: "200px",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-container d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li
                className={`page-item ${
                  currentPage === 1 ? "disabled" : ""
                }`}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                style={{ cursor: "pointer" }}
              >
                <span className="page-link" style={{ color: "#00B207" }}>
                  Previous
                </span>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className="page-link"
                    style={{
                      backgroundColor:
                        currentPage === index + 1 ? "#00B207" : "",
                      color: currentPage === index + 1 ? "#fff" : "#00B207",
                    }}
                  >
                    {index + 1}
                  </span>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                style={{ cursor: "pointer" }}
              >
                <span className="page-link" style={{ color: "#00B207" }}>
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
};
