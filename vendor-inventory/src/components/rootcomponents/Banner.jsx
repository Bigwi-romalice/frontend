import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Image imports
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner6 from "../../assets/banner6.jpg";

export const Banner = () => {
  const slides = [
    {
      id: 1,
      image: banner1,
      message: "Discover the Taste of Nature - Fresh Organic Goodness Awaits!",
    },
    {
      id: 2,
      image: banner2,
      message: "Nourish Your Body, Mind, and Soul with Fresh Organic Choices!",
    },
    {
      id: 3,
      image: banner3,
      message: "From Farm to Table - Pure, Fresh, and Organic!",
    },
    {
        id: 4,
        image: banner4,
        message: "Eat Clean, Live Green - The Organic Way of Life!",
      },
      {
        id: 5,
        image: banner5,
        message: "Savor the Flavors of Health with Our Organic Delights!",
      },
      {
        id: 6,
        image: banner6,
        message: "Freshness You Can Trust - Organic Food for a Healthy Tomorrow!",
      },
  ];

  return (
    <div
      id="bannerCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.image}
              className="d-block w-100"
              alt={`Slide ${slide.id}`}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
            <h5
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
                    padding: '10px', // Adds space around the text
                    borderRadius: '5px', // Optional: Rounded corners
                    textAlign: 'center', // Center-align text
                    color: '#000', // Black text color for contrast
                    display: 'inline-block', // Adjusts background to fit text
                }}
                >
                {slide.message}
                </h5>

            </div>
          </div>
        ))}
      </div>
      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
