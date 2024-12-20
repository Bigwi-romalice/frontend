
// eslint-disable-next-line react/prop-types
export const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
        id={name}
      />
    </div>
  );
};
