import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <div>
      <button className="reusableBtn" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
