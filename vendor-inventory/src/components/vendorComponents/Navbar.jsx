import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Navbar = () => {
  const profileName = "Mr Kelvin D"; // Replace with dynamic data if needed
  const profileImage =
    "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="; // Replace with your profile image URL

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogout = () => {
    // Clear user session or token (add your logout logic here)
    console.log("Logging out...");

    // Redirect to the root ("/") page
    navigate("/"); // Navigates to the root page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Section: Profile Info */}
        <div className="d-flex align-items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="text-white">{profileName}</span>
        </div>

        {/* Right Section: Logout Button */}
        <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
