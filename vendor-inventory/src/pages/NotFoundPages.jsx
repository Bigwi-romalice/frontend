import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export const NotFoundPages = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you’re looking for doesn’t exist or might have been moved.
        </p>
        <div className="not-found-actions">
          <button className="btn btn-success" onClick={handleGoBack}>
            Go Back
          </button>
          <button
            className="btn btn-danger"
            onClick={() => navigate("/")}
          >
            Take Me Home
          </button>
        </div>
      </div>
    </div>
  );
};
