import "./Invite.css";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import TagMapping from "../components/TagMapping.jsx";
import { clubOptions, sportOptions } from "../components/data.js";
import { useState } from "react";
import ChooseSportDropdown from "../components/ChooseSportDropdown.jsx";
import ChooseClubDropdown from "../components/ChooseClubDropdown.jsx";
import TextInput from "../components/TextInput.jsx";

const Invite = ({ textInputValue }) => {
  // console.log("DATA", data);
  const [textInputValue2, setTextInputValue2] = useState("");
  const [selectDropdownChangeSportValue, setSelectDropdownChangeSportValue] =
    useState("");
  const [selectDropdownChangeClubValue, setSelectDropdownChangeClubValue] =
    useState("");
  //
  const handleTextInputChange2 = (value) => {
    setTextInputValue2(value);
  };
  const handleDropdownChangeClub = (value) => {
    setSelectDropdownChangeClubValue(value);

    console.log("VALUE FROM HANDLE DROPDOWN CHANGE CLUB: ", value);
  };
  //
  const handleDropdownChangeSport = (value) => {
    setSelectDropdownChangeSportValue(value);

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

      <TextInput label="Team Name*" onChange={handleTextInputChange2} />
      <ChooseSportDropdown
        options={sportOptions}
        onChange={handleDropdownChangeSport}
      />
      <TagMapping />
      <Button title="CREATE TEAM" />
      <div>
        <p>{selectDropdownChangeClubValue}</p>
        <p>{selectDropdownChangeSportValue}</p>
        <p>{textInputValue2}</p>
      </div>
    </div>
  );
};

export default Invite;

// {data.map((item, idx) => {
//     // console.log("ITEM :", item.options);
//     const isTargetInput =
//         item.type === "createNewClubDropdown" && idx === 0;
//
//     const modifiedOptions = isTargetInput
//         ? [...item.options, { label: textInputValue, value: textInputValue }]
//         : item.options;
//
//     // const targetTextInput =
//     //   item.type === "text" ? handleTextInputChange2 : null;
//     //
//     // const handleOnChange = isTargetInput
//     //   ? handleDropdownChangeClub
//     //   : handleDropdownChangeSport;
//     //
//     // const handleTextInputValue = targetTextInput
//     //   ? handleTextInputChange2
//     //   : handleOnChange;
//
//     return (
//         <Input
//             key={item.id}
//             {...item}
//             // label={item.label}
//             // type={item.type}
//             // onChange={handleInputChange}
//             options={modifiedOptions}
//             onChange={(e) => handleChange(item.id, e.target.value)}
//
//             // options={
//             //   item.type === "createNewClubDropdown"
//             //     ? [...item.options, { label: inputValue, value: inputValue }]
//             //     : []
//             // }
//         />
//     );
//
// })}
