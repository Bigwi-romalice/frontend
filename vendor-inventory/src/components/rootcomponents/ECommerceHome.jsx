import { Link } from 'react-router-dom';
import fruits from '../../assets/fruits.jpg'
import vegetables from '../../assets/vegetables.jpg'
import dairy from '../../assets/dairy.jpg'
import bakery from '../../assets/bakery.jpg'
import beverages from '../../assets/beverages.jpg'
import snacks from '../../assets/snacks.jpg'

export const ECommerceHome = () => {
  return (
    <div className="ecommerce-home">
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="container">
          <h1>Welcome to Fresh Hearth Organic Food</h1>
          <p>Your one-stop shop for organic and sustainable products.</p>
          <Link to="/shop" className="btn btn-primary btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <div className="row">
            {[
              { name: 'Fresh Fruits', image: fruits, link: '/shop?category=fruits' },
              { name: 'Vegetables', image: vegetables, link: '/shop?category=vegetables' },
              { name: 'Dairy Products', image: dairy, link: '/shop?category=dairy' },
              { name: 'Bakery', image: bakery, link: '/shop?category=bakery' },
              { name: 'Beverages', image: beverages, link: '/shop?category=beverages' },
              { name: 'Snacks', image: snacks, link: '/shop?category=snacks' },
            ].map((category, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Link to={category.link} className="text-decoration-none">
                  <div className="card h-100">
                    <img src={category.image} alt={category.name} className="card-img-top" />
                    <div className="card-body text-center">
                      <h5 className="card-title">{category.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {[
              { name: 'Organic Apples', price: '$5.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDQPjtXnFzP3gjABS8wPsMwb8tLatM1t0ng&s', link: '/shop/product/1' },
              { name: 'Fresh Milk', price: '$2.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFuaK8aigwxpe4a1GQgwHhJ5fLVdIo6X7bA&s', link: '/shop/product/2' },
              { name: 'Whole Grain Bread', price: '$3.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5HSrCoSBMbwiKBx4-5z6XozskHjE79CUrnAnRpahE61qyGxPRvptips5LdS64aPDJGo&usqp=CAU', link: '/shop/product/3' },
            ].map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Link to={product.link} className="text-decoration-none">
                  <div className="card h-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="card-img-top" 
                      style={{ objectFit: 'cover', height: '200px' }} // Adjust image height
                    />
                    <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: '150px' }}>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center py-5" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h3>Don&apos;t Miss Out on Fresh Organic Deals!</h3>
          <Link to="/shop" className="btn btn-success btn-lg mt-3">
            View Our Shop
          </Link>
        </div>
      </section>
    </div>
  );
};
