import { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  const [value, setValue] = useState(null);

  const handleValueChange = (e, item) => {
    console.log(item);
    document
      .querySelectorAll(".dropdown-container > ul > li")
      .forEach((element) => element.classList.remove("selected"));

    e.currentTarget.classList.add("selected");
    setValue(item);
  };

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
        menuList={menuList}
        value={value}
        handleValueChange={handleValueChange}
      />
    </div>
  );
}

export default App;
