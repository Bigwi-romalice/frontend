import  { useState } from "react";
import { Link } from "react-router-dom";

export const MyShop = () => {
  // Increased number of shops
  const shops = [
    { id: 1, name: "Shop 1", logo: "https://i.pinimg.com/474x/bc/7b/98/bc7b98d09c6887f9888f144667eed515.jpg" },
    { id: 2, name: "Shop 2", logo: "https://i.pinimg.com/564x/ab/92/2f/ab922f8052473a99241d1fe2d171d2b9.jpg" },
    { id: 3, name: "Shop 3", logo: "https://via.placeholder.com/150" },
    { id: 4, name: "Shop 4", logo: "https://via.placeholder.com/150" },
    { id: 5, name: "Shop 5", logo: "https://via.placeholder.com/150" },
    { id: 6, name: "Shop 6", logo: "https://via.placeholder.com/150" },
    { id: 7, name: "Shop 7", logo: "https://via.placeholder.com/150" },
    { id: 8, name: "Shop 8", logo: "https://via.placeholder.com/150" },
    { id: 9, name: "Shop 9", logo: "https://via.placeholder.com/150" },
    { id: 10, name: "Shop 10", logo: "https://via.placeholder.com/150" },
    { id: 11, name: "Shop 11", logo: "https://via.placeholder.com/150" },
    { id: 12, name: "Shop 12", logo: "https://via.placeholder.com/150" },
  ];

  // Pagination state
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the index of the last shop on the current page
  const indexOfLastShop = currentPage * itemsPerPage;
  const indexOfFirstShop = indexOfLastShop - itemsPerPage;

  // Slice the shops array based on the current page
  const currentShops = shops.slice(indexOfFirstShop, indexOfLastShop);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(shops.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mt-4">
      <h1 className="text-success text-center mb-4 vendor-orders-heading">My Shops</h1>
      <div className="row mb-2">
        {currentShops.map((shop) => (
            <div className="col-md-3" key={shop.id}>
            <div className="card shadow-sm mb-4 d-flex flex-column h-100">
                <img src={shop.logo} className="card-img-top" alt={`${shop.name} Logo`} />
                <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title">{shop.name}</h5>
                <Link to={`/shop/${shop.id}`} className="btn btn-primary mt-auto">
                    View Shop
                </Link>
                </div>
            </div>
            </div>
        ))}
      </div>

      {/* Pagination controls */}
      <nav aria-label="Page navigation ">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link text-success" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
