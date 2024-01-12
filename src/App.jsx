import { useState } from "react";
import "./App.css";
import Customer from "./screens/Customer.jsx";
import Invite from "./screens/Invite.jsx";

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
      screen === "customer-screen" ? "invite-screen" : "customer-screen",
    );
  };

  return (
    <div>
      {screen === "customer-screen" ? (
        <Customer
          textInputValue={textInputValue}
          setTextInputValue={setTextInputValue}
          handleNavigate={navigateToInviteScreen}
          handleTextInputChange={handleTextInputChange}
        />
      ) : (
        <Invite
          textInputValue={textInputValue}
          handleDropdownChange={handleDropdownChange}
        />
      )}
    </div>
  );
}

export default App;
