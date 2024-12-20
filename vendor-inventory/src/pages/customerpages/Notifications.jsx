export const Notifications = () => {
    // Sample notifications data (this can be fetched from an API)
    const notifications = [
      {
        id: 1,
        title: "Your Order #101 has been Shipped",
        message: "Your order has been shipped and is on its way! You can track your shipment using the tracking number provided.",
        date: "2024-12-19",
      },
      {
        id: 2,
        title: "Order #102 Delivered",
        message: "Your order #102 has been successfully delivered. We hope you enjoy your purchase.",
        date: "2024-12-18",
      },
      {
        id: 3,
        title: "Order #103 Cancelled",
        message: "Unfortunately, your order #103 has been cancelled due to stock issues. Please contact customer support for more information.",
        date: "2024-12-17",
      },
      {
        id: 4,
        title: "Order #104 Pending",
        message: "Your order #104 is still pending. Please check back later for an update on your order status.",
        date: "2024-12-16",
      },
    ];
  
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Notifications</h2>
        <div className="row">
          {notifications.map((notification) => (
            <div key={notification.id} className="col-md-6 mb-4">
            <div className="card shadow-sm border-light d-flex flex-column">
                <div className="card-body d-flex flex-column">
                <h5 className="card-title">{notification.title}</h5>
                <p className="card-text">{notification.message}</p>
                <p className="card-text mt-auto">
                    <small className="text-muted">Date: {notification.date}</small>
                </p>
                </div>
            </div>
            </div>

          ))}
        </div>
      </div>
    );
  };
  