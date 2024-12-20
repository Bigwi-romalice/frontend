import { useState } from "react";
import { InputField } from "../../components/index";
import { Button } from "../../components/index";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot Password Email:", email); // Replace with actual forgot-password logic
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="vh-100 d-flex">
      {/* Left Side - Full Image */}
      <div
        className="forgot-password-image"
        style={{
          flex: "60%",
          backgroundImage: "url('https://images.unsplash.com/photo-1483918793747-5adbf82956c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlc2glMjBoZWFydGglMjBvcmdhbmljJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Side - Forgot Password Form */}
      <div
        className="forgot-password-form d-flex justify-content-center align-items-center"
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
          <h3 className="text-center mb-4" style={{ color: "#ffc107" }}>
            Forgot Password
          </h3>
          <form onSubmit={handleForgotPassword}>
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Button text="Reset Password" type="submit" styleClass="btn-warning" />
          </form>

          <div className="text-center mt-4">
            <Button text="Go Back" styleClass="btn-secondary" onClick={goBack} />
          </div>
        </div>
      </div>
    </div>
  );
};
