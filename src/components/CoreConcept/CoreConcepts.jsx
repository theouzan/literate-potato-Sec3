import CoreConcept from "./CoreConcept";

import componentsImage from "./../../assets/components.png";
import { CORE_CONCEPTS } from "../../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <CoreConcept {...CORE_CONCEPTS[0]} />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} />
      </ul>
    </section>
  );
};

export default CoreConcepts;
