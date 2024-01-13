import { useState } from "react";
import "./App.css";
import CreateClubScreen from "./screens/CreateClubScreen.jsx";
import CreateClubNameScreen from "./screens/CreateClubNameScreen.jsx";

function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [screen, setScreen] = useState("customer-screen");

  const handleTextInputChange = (value) => {
    setTextInputValue(value);
  };

  const handleDropdownChange = (value) => {
    setTextInputValue(value);
  };

  console.log("APP COMPONENT:", textInputValue);

  const navigateToInviteScreen = () => {
    setScreen(
      screen === "customer-screen" ? "invite-screen" : "customer-screen"
    );
  };

  return (
    <div>
      {screen === "customer-screen" ? (
        <CreateClubScreen
          textInputValue={textInputValue}
          setTextInputValue={setTextInputValue}
          handleNavigate={navigateToInviteScreen}
          handleTextInputChange={handleTextInputChange}
        />
      ) : (
        <CreateClubNameScreen
          textInputValue={textInputValue}
          handleDropdownChange={handleDropdownChange}
        />
      )}
    </div>
  );
}

export default App;
