import "./ChooseSportDropdown.css";

const ChooseSportDropdown = ({ label, value, onChange, options, title }) => {
  return (
    <div>
      <div className="form-field">
        {/*<label>{title}</label>*/}
        <select
          className="sport"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option disabled={true}>{label}</option>
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
