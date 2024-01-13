import "./ChooseClubDropdown.css";

const ChooseClubDropdown = ({ onChange, options }) => {
  return (
    <div>
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
  );
};

export default ChooseClubDropdown;
