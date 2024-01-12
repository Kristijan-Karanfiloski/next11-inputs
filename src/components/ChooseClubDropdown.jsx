import "./ChooseClubDropdown.css";

const ChooseClubDropdown = ({ label, onChange, options }) => {
  return (
    <div className="wrapper">
      <div className="form-field">
        <select
          className="club-name"
          onChange={(e) => onChange(e.target.value)}
          // onChange={onChange}
        >
          <option disabled={true} value="">
            Choose club
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

export default ChooseClubDropdown;
