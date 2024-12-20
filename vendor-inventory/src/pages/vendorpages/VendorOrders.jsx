import { useState } from "react";

export const VendorOrders = () => {
  const orders = [
    { id: 101, shop: "Shop 1", product: "Product A", productImage: "https://www.agrifarming.in/wp-content/uploads/2022/06/Vegetable-Farming-USA4.jpg", customer: "Jane Doe", status: "Pending", date: "2024-12-19" },
    { id: 102, shop: "Shop 2", product: "Product B", productImage: "https://www.orgpick.com/cdn/shop/products/vegetables-box.jpg?v=1541021440", customer: "John Smith", status: "Delivered", date: "2024-12-18" },
    { id: 103, shop: "Shop 1", product: "Product C", productImage: "https://5.imimg.com/data5/SELLER/Default/2023/10/354803846/SP/SK/XW/198733956/organic-fresh-vegetables-500x500.jpg", customer: "Alice Brown", status: "Cancelled", date: "2024-12-17" },
    { id: 104, shop: "Shop 3", product: "Product D", productImage: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg", customer: "Michael Green", status: "Delivered", date: "2024-12-16" },
    { id: 105, shop: "Shop 2", product: "Product E", productImage: "https://assets.cntraveller.in/photos/60ba23b90f3a5367ec9fe85b/4:3/w_1024,h_768,c_limit/Farm-fresh-produce-1366x768.jpg", customer: "Emily White", status: "Pending", date: "2024-12-15" },
    { id: 106, shop: "Shop 1", product: "Product F", productImage: "https://www.backyardfarmfresh.com/cdn/shop/collections/Garden_Veggies_460x@2x.jpg", customer: "David Blue", status: "Cancelled", date: "2024-12-14" },
    { id: 107, shop: "Shop 3", product: "Product G", productImage: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg", customer: "Olivia Brown", status: "Pending", date: "2024-12-13" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [shopFilter, setShopFilter] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [customerFilter, setCustomerFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const itemsPerPage = 3;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredOrders = orders.filter((order) => {
    return (
      (order.shop.toLowerCase().includes(shopFilter.toLowerCase()) || shopFilter === "") &&
      (order.product.toLowerCase().includes(productFilter.toLowerCase()) || productFilter === "") &&
      (order.customer.toLowerCase().includes(customerFilter.toLowerCase()) || customerFilter === "") &&
      (order.status.toLowerCase().includes(statusFilter.toLowerCase()) || statusFilter === "")
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mt-4">
      <h1 className="vendor-orders-heading text-success text-center mb-4">Vendor Orders</h1>
      
      {/* Global Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Orders by Shop, Product, Customer, or Status"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Individual Column Filters */}
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Shop"
            value={shopFilter}
            onChange={(e) => setShopFilter(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Product"
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Customer"
            value={customerFilter}
            onChange={(e) => setCustomerFilter(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th>Order ID</th>
              <th>Shop</th>
              <th>Product</th>
              <th>Product Image</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.shop}</td>
                <td>{order.product}</td>
                <td>
                  <img
                    src={order.productImage}
                    alt={order.product}
                    className="img-thumbnail"
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{order.customer}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "Pending"
                        ? "bg-warning"
                        : order.status === "Delivered"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm me-2">View</button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    disabled={order.status !== "Pending"}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-outline-secondary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
