import { useState } from "react";
import Header from "./components/Header";
import User from "./components/User";
import FirstCourse from "./components/FirstCourse";

const USER_DATA = {
  firstName: "Maximilian",
  lastName: "Schwarzmüller",
  title: "Instructor",
};

const App = () => {
  const [switchDisplay, setSwitchDisplay] = useState("first");

  const onButtonClickHandler = (e) => {
    setSwitchDisplay(e.target.name);
  };

  let content = "";
  if (switchDisplay === "first") {
    content = <FirstCourse />;
  } else if (switchDisplay === "user") {
    content = <User user={USER_DATA} />;
  }

  return (
    <div id="app">
      <Header />
      <div>
        <button onClick={onButtonClickHandler} name="first">
          First course
        </button>
        <button onClick={onButtonClickHandler} name="user">
          Add user course
        </button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default App;
