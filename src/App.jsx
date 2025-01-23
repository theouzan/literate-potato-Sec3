import { useState } from "react";
import Header from "./components/Header";
import User from "./components/User";
import FirstCourse from "./components/FirstCourse";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import TabButton from "./components/TabButton";

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
  } else if (switchDisplay === "coreConcepts"){
    content = <CoreConcepts />
  }

  return (
    <main>
      <Header />
      <div>
        <button onClick={onButtonClickHandler} name="first">
          First course
        </button>
        <button onClick={onButtonClickHandler} name="user">
          Add user course
        </button>
        <button onClick={onButtonClickHandler} name="coreConcepts">
          Core concepts course
        </button>
      </div>
      {content}
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
      </section>
    </main>
  );
};

export default App;
