import { useParams } from "react-router-dom";

export const OrderDetail = () => {
  const { orderId } = useParams();
  
  // Sample order data (this can be fetched from an API)
  const orderDetails = {
    orderNumber: orderId,
    status: "Shipped",
    date: "2024-12-19",
    totalAmount: "$120.00",
    items: [
      { id: 1, name: "Product 1", quantity: 2, price: "$30.00" },
      { id: 2, name: "Product 2", quantity: 1, price: "$60.00" },
    ],
    shippingAddress: "123 Customer Street, City, Country",
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Order #{orderDetails.orderNumber} Details</h2>
      
      {/* Order Status and Date */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Order Information</h5>
          <p><strong>Status:</strong> 
            <span
              className={`badge ${
                orderDetails.status === "Shipped"
                  ? "bg-success"
                  : orderDetails.status === "Delivered"
                  ? "bg-primary"
                  : orderDetails.status === "Cancelled"
                  ? "bg-danger"
                  : "bg-warning"
              }`}
            >
              {orderDetails.status}
            </span>
          </p>
          <p><strong>Order Date:</strong> {orderDetails.date}</p>
          <p><strong>Total Amount:</strong> {orderDetails.totalAmount}</p>
        </div>
      </div>

      {/* Ordered Items */}
      <h4 className="mb-3">Items in this Order:</h4>
      <div className="card mb-4">
        <div className="card-body">
          <ul className="list-group">
            {orderDetails.items.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Shipping Address */}
      <h4 className="mb-3">Shipping Address:</h4>
      <div className="card">
        <div className="card-body">
          <p>{orderDetails.shippingAddress}</p>
        </div>
      </div>
    </div>
  );
};
