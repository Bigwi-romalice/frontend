import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add product goes here
    console.log(`Adding product to shop ${id}:`, { productName, price });
    navigate(`/shop/${id}`);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center mb-4">Add Product to Shop (ID: {id})</h1>
      <form onSubmit={handleSubmit} className="shadow p-4">
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};
