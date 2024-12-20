// eslint-disable-next-line react/prop-types
export const Button = ({ text, onClick, styleClass, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${styleClass}`}
      style={{ width: "100%", marginBottom: "10px" }}
    >
      {text}
    </button>
  );
};
