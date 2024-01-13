import "./CreateClubScreen.css";
import Button from "../components/button/Button.jsx";
import TextInput from "../components/text-input/TextInput.jsx";

const CreateClubScreen = ({
  handleNavigate,
  handleTextInputChange,
  textInputValue,
}) => {
  return (
    <div className="customer">
      <TextInput
        value={textInputValue}
        onChange={handleTextInputChange}
        label="Club Name*"
      />
      <Button title="CREATE CLUB" onClick={() => handleNavigate()} />
    </div>
  );
};

export default CreateClubScreen;
