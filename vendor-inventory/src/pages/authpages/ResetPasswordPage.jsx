import { useState } from "react";
import { InputField, Button } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

export const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({ newPassword: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token } = useParams(); // Retrieve token from URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on input change
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!formData.newPassword || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Simulate reset password logic
    console.log("Reset Password Data:", { ...formData, token });

    // Redirect to login page or success message
    alert("Password has been reset successfully!");
    navigate("/auth/login");
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="vh-100 d-flex flex-column flex-md-row">
      {/* Left Side - Full Image */}
      <div
        className="reset-password-image"
        style={{
          flex: "60%",
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1722073663754-c47eff499093?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZXNoJTIwaGVhcnRoJTIwb3JnYW5pYyUyMGZvb2R8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Side - Reset Password Form */}
      <div
        className="reset-password-form d-flex justify-content-center align-items-center p-4"
        style={{
          flex: "40%",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          className="card p-4 w-100"
          style={{
            maxWidth: "400px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 className="text-center mb-4" style={{ color: "#28a745" }}>
            Reset Password
          </h3>

          {error && (
            <div
              className="alert alert-danger"
              role="alert"
              style={{ fontSize: "0.9rem" }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleResetPassword}>
            <InputField
              label="New Password"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
            />
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            <Button text="Update Password" type="submit" styleClass="btn-success w-100" />
          </form>

          <div className="text-center mt-4">
            <Button text="Go Back" styleClass="btn-secondary w-100" onClick={goBack} />
          </div>
        </div>
      </div>
    </div>
  );
};
