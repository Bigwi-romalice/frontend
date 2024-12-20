import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

export const NotificationPage = () => {
  // Sample notifications data (can be replaced with actual API data)
  const notifications = [
    {
      id: 1,
      message: "Your order #101 has been shipped.",
      date: "2024-12-19",
      type: "info", // info, success, warning, danger
    },
    {
      id: 2,
      message: "Your order #102 has been delivered.",
      date: "2024-12-18",
      type: "success",
    },
    {
      id: 3,
      message: "Order #103 has been cancelled.",
      date: "2024-12-17",
      type: "danger",
    },
    {
      id: 4,
      message: "New promotional offer available in Shop 1!",
      date: "2024-12-16",
      type: "info",
    },
    {
      id: 5,
      message: "Your subscription is about to expire.",
      date: "2024-12-15",
      type: "warning",
    },
  ];

  const renderNotificationType = (type) => {
    switch (type) {
      case "info":
        return { className: "bg-info", icon: <FaInfoCircle /> };
      case "success":
        return { className: "bg-success", icon: <FaCheckCircle /> };
      case "warning":
        return { className: "bg-warning", icon: <FaExclamationTriangle /> };
      case "danger":
        return { className: "bg-danger", icon: <FaTimesCircle /> };
      default:
        return { className: "bg-secondary", icon: null };
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center mb-4">Notifications</h1>
      <div className="list-group">
        {notifications.map((notification) => {
          const { className, icon } = renderNotificationType(notification.type);
          return (
            <div
              key={notification.id}
              className={`list-group-item list-group-item-action ${className} text-white mb-3 rounded shadow-sm`}
            >
              <div className="d-flex align-items-center">
                <div className="me-3">{icon && <span className="fs-3">{icon}</span>}</div>
                <div className="flex-grow-1">
                  <h5 className="mb-1">{notification.message}</h5>
                  <p className="mb-0 small">{formatDate(notification.date)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
