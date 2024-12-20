/* eslint-disable no-undef */
import { useState } from "react";
import { Button } from "../../components/generalComponents/Button";
import { InputField } from "../../components/generalComponents/InputField";
import { Modal } from "react-bootstrap"; // Using react-bootstrap for modal
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate, Link } from "react-router-dom";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { CreateUsers } from "../../services/userServices/UserService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Marker icon fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    latitude: "",
    longitude: "",
    userType: "", // New field
    phoneNumber: "", // New field
    address: "", // New field
    status: false,
  });

  const [showMap, setShowMap] = useState(false); // State for modal
  const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!formData.email || !formData.password || !formData.name || !formData.userType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!isValidEmail(formData.email)) {
        toast.error("Invalid email format");
        return;
      }
    console.log("Sign Up Data:", formData);  
    CreateUsers(formData, {
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Signup successful!");
          navigate('/auth/login');
        } else {
          toast.error("Error during signup.");
        }
      })
      .catch((error) => {
        toast.error(`Request failed: ${error.message}`);
      });
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  // Function to handle location selection
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedLocation({ lat, lng });
        setFormData({ ...formData, latitude: lat, longitude: lng });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return selectedLocation.lat !== 0 && selectedLocation.lng !== 0 ? (
      <Marker position={[selectedLocation.lat, selectedLocation.lng]} />
    ) : null;
  };

  return (
    <div className="vh-100 d-flex">
      {/* Left Side - Full Image */}
      <div
        className="signup-image"
        style={{
          flex: "60%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Side - Sign Up Form */}
      <div
        className="signup-form d-flex justify-content-center align-items-center"
        style={{
          flex: "40%",
          backgroundColor: "#f8f9fa",
          overflow: "hidden", // Ensure content stays within the bounds
        }}
      >
        <div
          className="card p-3 w-100"
          style={{
            maxWidth: "400px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxHeight: "90vh", // Ensure the form does not exceed viewport height
            overflowY: "auto", // Add vertical scroll if content overflows  
          }}
        >
          <h3 className="text-center mb-1" style={{ color: "#00B207" }}>
            Sign Up
          </h3>
          <form onSubmit={handleSignUp}>
            <InputField
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <div className="mb-3">
                  <label htmlFor="userType" className="form-label">
                    User Type
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    className="form-select"
                    value={formData.userType}
                    onChange={handleChange}
                  >
                    <option value="">Select User Type</option>
                    <option value="CUSTOMER">Customer</option>
                    <option value="VENDOR">Vendor</option>
                  </select>
                </div>
              <InputField
                label="Phone Number"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              <InputField
                label="Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            <div className="mb-1">
              <label className="form-label">
                Latitude: {formData.latitude || "Not selected"}
              </label>
              <br />
              <label className="form-label">
                Longitude: {formData.longitude || "Not selected"}
              </label>
              <Button
                text="Choose Location"
                styleClass="btn-info mt-1"
                onClick={() => setShowMap(true)}
              />
            </div>
            <Button text="Sign Up" type="submit" styleClass="btn-success" />
          </form>

          <div className="text-center mt-1">
            <span>Already have an account?</span>{" "}
            <Link to="/auth/login" style={{ textDecoration: "underline", color: "#00B207" }}>
              Login
            </Link>
          </div>

          <div className="text-center mt-1">
            <Button text="Go Back" styleClass="btn-secondary" onClick={goBack} />
          </div>
        </div>
      </div>

      {/* Modal for Map */}
      <Modal show={showMap} onHide={() => setShowMap(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MapContainer
            center={[-1.95, 30.06]} // Center of Rwanda (approximate)
            zoom={8} // Appropriate zoom level for Rwanda
            style={{ height: "400px", width: "100%" }}
            bounds={[
              [-2.837, 28.861], // Southwest corner
              [-1.065, 30.896], // Northeast corner
            ]}
            maxBounds={[
              [-2.837, 28.861], // Southwest corner
              [-1.065, 30.896], // Northeast corner
            ]}
            maxBoundsViscosity={1.0} // Prevent dragging outside bounds
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
          </MapContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Save Location"
            styleClass="btn-success"
            onClick={() => setShowMap(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
