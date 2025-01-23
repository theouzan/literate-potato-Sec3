import { useState } from "react";
import Header from "./components/Header";
import User from "./components/User";
import FirstCourse from "./components/FirstCourse";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import TabButton from "./components/TabButton";

import { EXAMPLES } from "./data-with-examples";

const USER_DATA = {
  firstName: "Maximilian",
  lastName: "Schwarzmüller",
  title: "Instructor",
};

const App = () => {
  const [switchDisplay, setSwitchDisplay] = useState("first");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleCourseChangeButtonClick = (e) => {
    setSwitchDisplay(e.target.name);
  };

  const handleTabClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  let content = "";
  if (switchDisplay === "first") {
    content = <FirstCourse />;
  } else if (switchDisplay === "user") {
    content = <User user={USER_DATA} />;
  } else if (switchDisplay === "coreConcepts") {
    content = <CoreConcepts />;
  }

  return (
    <main>
      <Header />
      <div>
        <button onClick={handleCourseChangeButtonClick} name="first">
          First course
        </button>
        <button onClick={handleCourseChangeButtonClick} name="user">
          Add user course
        </button>
        <button onClick={handleCourseChangeButtonClick} name="coreConcepts">
          Core concepts course
        </button>
      </div>
      {content}
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleTabClick("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleTabClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleTabClick("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleTabClick("state")}
          >
            State
          </TabButton>
        </menu>

        {selectedTopic !== null ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : (
          <p>Please select a topic.</p>
        )}
      </section>
    </main>
  );
};

export default App;
