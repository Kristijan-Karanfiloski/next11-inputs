import TextInput from "./TextInput.jsx";
import ChooseClubDropdown from "./ChooseClubDropdown.jsx";

const Input = ({ type, label, value, options, onChange, style, title }) => {
  const renderInputType = () => {
    switch (type) {
      case "text":
        return (
          <TextInput
            label={label}
            value={value}
            onChange={onChange}
            style={style}
          />
        );
      case "createNewClubDropdown":
        return (
          <ChooseClubDropdown
            options={options}
            title={title}
            onChange={onChange}
          />
        );
      case "sportOptionsDropdown":
        return (
          <ChooseClubDropdown
            options={options}
            title={title}
            onChange={onChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="input-wrapper">
      <div>{renderInputType()}</div>
    </div>
  );
};

export default Input;
