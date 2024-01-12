import "./Customer.css";
import Button from "../components/Button.jsx";
import TextInput from "../components/TextInput.jsx";

const Customer = ({ handleNavigate, handleTextInputChange }) => {
  return (
    <div className="customer">
      <TextInput onChange={handleTextInputChange} label="Club Name*" />
      <Button title="CREATE CLUB" onClick={() => handleNavigate()} />
    </div>
  );
};

export default Customer;
