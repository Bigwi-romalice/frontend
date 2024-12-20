import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TwoFactorAuthPage = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate OTP (in a real-world app, this would be an API call)
    if (otp === "123456") { // Dummy check for OTP
      navigate("/vendorDashboard");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="two-factor-auth-page vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="card shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4" style={{ color: "#007bff" }}>Two-Factor Authentication</h2>
          <p className="text-center mb-4" style={{ fontSize: "14px", color: "#6c757d" }}>
            We have sent a verification code to your registered email.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">Enter OTP</label>
              <input
                type="text"
                id="otp"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
                placeholder="6-digit code"
              />
            </div>

            {error && <p className="text-danger text-center">{error}</p>}

            <button type="submit" className="btn btn-primary w-100 py-2 mt-3">
              Verify OTP
            </button>
          </form>

          <div className="text-center mt-3">
            <a href="#" className="text-muted" style={{ fontSize: "14px" }}>
              Didn&apos;t receive the code? Resend OTP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
