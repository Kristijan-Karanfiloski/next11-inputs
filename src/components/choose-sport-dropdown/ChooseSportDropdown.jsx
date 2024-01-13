import "./ChooseSportDropdown.css";

const ChooseSportDropdown = ({ value, onChange, options }) => {
  return (
    <div>
      <div className="form-field">
        <select
          className="sport"
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
    </div>
  );
};

export default ChooseSportDropdown;
