import "./TextInput.css";
import { useState } from "react";

const TextInput = ({ label, value, onChange, required, style }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelClass = value ? "label--small" : "";

  return (
    <>
      <div>
        <div className="customer__input-container">
          <input
            className="container__input"
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            // onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={style}
          />
          <label
            // style={{
            //   top: value ? "-20px" : "10%",
            //   fontSize: value ? "12px" : "16px",
            //   color: value ? "#007bff" : "",
            // }}
            className={`container__label ${labelClass}`}
          >
            {label}
          </label>
          <span className="container__input-highlight"></span>
        </div>
      </div>
    </>
  );
};

export default TextInput;
