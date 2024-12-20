import { useState } from "react";

export const Cart = () => {
  // Sample cart data (this can be fetched from an API)
  const [cartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$30.00",
      quantity: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAy-WKJg5FtbwLbWZOycjV_tz9LOxGJNsGbg&s", // replace with actual image path
    },
    {
      id: 2,
      name: "Product 2",
      price: "$60.00",
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmewt3U7-O788QjUmyPrEyexJ8qtTidGzgGA&s", // replace with actual image path
    },
    {
      id: 3,
      name: "Product 3",
      price: "$20.00",
      quantity: 3,
      image: "https://www.orgpick.com/cdn/shop/articles/Apple_1024x1024.jpg?v=1547124407", // replace with actual image path
    },
  ]);

  // Calculate total cost
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-light d-flex flex-column h-100">
                <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }} // Optional: Adjust image height and fit
                />
                <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    <strong>Price:</strong> {item.price}
                </p>
                <p className="card-text">
                    <strong>Quantity:</strong> {item.quantity}
                </p>
                <p className="card-text">
                    <strong>Total:</strong> ${item.price * item.quantity}
                </p>
                {/* Optional: Add some spacing at the bottom */}
                <div className="mt-auto">
                    {/* Additional content can go here */}
                </div>
                </div>
            </div>
            </div>

          ))}
        </div>
      )}
      <div className="mt-4">
        <h3>Total Cost: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};
