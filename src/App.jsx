import { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  // Selected value of dropdown
  const [value, setValue] = useState(null);

  // Function to handle change in dropdown value
  const handleValueChange = (e, item) => {
    // On click of one of the options --> hide dropdown list
    document
      .querySelector(".dropdown-container > ul")
      .classList.add("hide-dropdown");

    // On click of one of the options --> add selected class to the selected option value
    document
      .querySelectorAll(".dropdown-container > ul > li")
      .forEach((element) => element.classList.remove("selected"));

    e.currentTarget.classList.add("selected");

    // Set value (passed in arguments)
    setValue(item);
  };

  // Custom Menu-List
  const menuList = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "JAVA",
    "PYTHON",
  ];

  return (
    <div className="App">
      <h1>Simple Dropdown</h1>
      <Dropdown
        menuList={menuList} // array of items of dropdown
        value={value} // current selected value of dropdown
        handleValueChange={handleValueChange} // change handler for value change of dropdown
      />
    </div>
  );
}

export default App;
