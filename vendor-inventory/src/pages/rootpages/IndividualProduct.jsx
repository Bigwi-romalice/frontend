import { useParams, Link } from "react-router-dom";
import { useState,useEffect } from "react";

export const IndividualProduct = () => {
    const { id } = useParams(); // Extract product ID from URL
    const [product, setProduct] = useState(null);
  
    // Sample Products Data (replace with API call if needed)
    const allProducts = Array.from({ length: 150 }, (_, index) => ({
      id: (index + 1).toString(),
      name: `Product ${index + 1}`,
      price: `$${(Math.random() * 20 + 1).toFixed(2)}`,
      description: `This is a detailed description of Product ${index + 1}.`,
      image: `/images/product${(index % 5) + 1}.jpg`,
    }));
  
    useEffect(() => {
      // Fetch product by ID (replace with API call logic if necessary)
      const foundProduct = allProducts.find((product) => product.id === id);
      setProduct(foundProduct);
    }, [id]);
  
    if (!product) {
      return (
        <div className="text-center">
          <h3>Product not found</h3>
          <Link to="/shop" style={{ color: "#00B207" }}>
            Back to Shop
          </Link>
        </div>
      );
    }
  
    return (
      <div className="product-details-container container py-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
  
          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3" style={{ color: "#00B207" }}>
              {product.name}
            </h2>
            <h4 className="text-muted mb-3">{product.price}</h4>
            <p className="mb-4">{product.description}</p>
  
            {/* Add to Cart Button */}
            <div className="d-flex align-items-center">
            <button className="btn btn-success me-3">Add to Cart</button>
            <Link to="/shop" className="btn btn-outline-secondary">
              Back to Shop
            </Link>
          </div>

          </div>
        </div>
      </div>
    );
};
