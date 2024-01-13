import "./CreateClubNameScreen.css";
import Button from "../components/button/Button.jsx";
import TagMapping from "../components/tag-mapping/TagMapping.jsx";
import { clubOptions, sportOptions } from "../components/data.js";
import { useState } from "react";
import ChooseSportDropdown from "../components/choose-sport-dropdown/ChooseSportDropdown.jsx";
import ChooseClubDropdown from "../components/choose-club-dropdown/ChooseClubDropdown.jsx";
import TextInput from "../components/text-input/TextInput.jsx";

const CreateClubNameScreen = ({ textInputValue }) => {
  // console.log("DATA", data);
  const [teamName, setTeamName] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  //
  const handleTeamNameChange = (value) => {
    setTeamName(value);
  };
  const handleDropdownChangeClub = (value) => {
    setSelectedClub(value);

    console.log("VALUE FROM HANDLE DROPDOWN CHANGE CLUB: ", value);
  };
  //
  const handleDropdownChangeSport = (value) => {
    setSelectedSport(value);

    console.log("VALUE FROM HANDLE DROPDOWN CHANGE SPORT: ", value);
  };

  return (
    <div className="invite">
      {clubOptions.map((dropdown, index) => {
        return (
          <ChooseClubDropdown
            key={index}
            options={
              dropdown.options
                ? [
                    ...dropdown.options,
                    { label: textInputValue, value: textInputValue },
                  ]
                : []
            }
            onChange={handleDropdownChangeClub}
          />
        );
      })}

      <TextInput
        value={teamName}
        label="Team Name*"
        onChange={handleTeamNameChange}
      />
      <ChooseSportDropdown
        options={sportOptions}
        onChange={handleDropdownChangeSport}
      />
      <TagMapping />
      <Button title="CREATE TEAM" />
      <div>
        <p>{selectedClub}</p>
        <p>{selectedSport}</p>
        <p>{teamName}</p>
      </div>
    </div>
  );
};

export default CreateClubNameScreen;