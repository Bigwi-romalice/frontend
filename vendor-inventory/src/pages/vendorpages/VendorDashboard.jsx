import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Import necessary chart dependencies
export const VendorDashboard = () => {
  // Sample data for the chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="d-flex vh-100">
      <div className="container mt-4" style={{ flex: 1 }}>
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-primary">Vendor Dashboard</h1>
        </div>

        {/* Quick Buttons */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <Link to="/myshop" className="btn btn-primary btn-block p-3">
              MyShop
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/vendororders" className="btn btn-warning btn-block p-3">
              VendorOrders
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link to="/notifications" className="btn btn-info btn-block p-3">
              Notifications
            </Link>
          </div>
        </div>

        {/* Sales Overview Chart */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h5>Sales Overview</h5>
          </div>
          <div className="card-body" style={{ height: "200px" }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">Total Sales</div>
              <div className="card-body">
                <h4 className="card-title">$12,345</h4>
                <p className="card-text">This is your total sales this month.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card text-white bg-danger mb-3">
              <div className="card-header">Pending Orders</div>
              <div className="card-body">
                <h4 className="card-title">24</h4>
                <p className="card-text">Orders waiting for your confirmation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Summary Card */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card text-white bg-info mb-3">
              <div className="card-header">Notifications</div>
              <div className="card-body">
                <h4 className="card-title">8</h4>
                <p className="card-text">You have 8 new notifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
