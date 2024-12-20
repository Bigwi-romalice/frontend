import google from '../../assets/Google_48px.png'

// eslint-disable-next-line react/prop-types
export const GoogleAuthButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-light d-flex align-items-center justify-content-center"
      style={{
        border: "1px solid #ddd",
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <img
        src={google}
        alt="Google"
        style={{ width: "20px", marginRight: "10px" }}
      />
      Continue with Google
    </button>
  );
};
