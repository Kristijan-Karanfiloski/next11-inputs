import "./ChooseSportDropdown.css";

const ChooseSportDropdown = ({ value, onChange, options }) => {
  return (
    <div>
      <select
        className="sport-name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled={true} value="">
          Choose Sport
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChooseSportDropdown;
