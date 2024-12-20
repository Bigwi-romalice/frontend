import { useNavigate } from "react-router-dom";

export const AllOrders = () => {
  const navigate = useNavigate(); // Hook for navigation

  const orders = [
    {
      id: 1,
      orderNumber: "101",
      status: "Shipped",
      date: "2024-12-19",
      totalAmount: "$120.00",
    },
    {
      id: 2,
      orderNumber: "102",
      status: "Delivered",
      date: "2024-12-18",
      totalAmount: "$80.00",
    },
    {
      id: 3,
      orderNumber: "103",
      status: "Cancelled",
      date: "2024-12-17",
      totalAmount: "$50.00",
    },
    {
      id: 4,
      orderNumber: "104",
      status: "Pending",
      date: "2024-12-16",
      totalAmount: "$200.00",
    },
  ];

  // Navigate to the Order Details page
  const handleViewDetails = (orderId) => {
    navigate(`/orderDetails/${orderId}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Orders</h2>
      <div className="row">
        {orders.map((order) => (
          <div key={order.id} className="col-md-6 mb-4">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title">Order #{order.orderNumber}</h5>
                <p className="card-text">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`badge ${
                      order.status === "Shipped"
                        ? "bg-success"
                        : order.status === "Delivered"
                        ? "bg-primary"
                        : order.status === "Cancelled"
                        ? "bg-danger"
                        : "bg-warning"
                    }`}
                  >
                    {order.status}
                  </span>
                </p>
                <p className="card-text">
                  <strong>Date:</strong> {order.date}
                </p>
                <p className="card-text">
                  <strong>Total Amount:</strong> {order.totalAmount}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleViewDetails(order.id)}
                  >
                    View Details
                  </button>
                  <span className="badge bg-secondary">{order.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
