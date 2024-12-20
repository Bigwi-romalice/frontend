import { Link, useParams } from "react-router-dom";

export const ShopDetails = () => {
  const { id } = useParams();
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$15" },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center mb-4">Shop Details (ID: {id})</h1>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>
        <Link to={`/shop/${id}/add-product`} className="btn btn-success">
          Add Product
        </Link>
      </div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
