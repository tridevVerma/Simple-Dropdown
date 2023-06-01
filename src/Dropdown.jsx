import React from "react";

// Dropdown component with destructured props
const Dropdown = ({ menuList, value, handleValueChange }) => {
  // Function to remove 'hide-dropdown' class from dropdown list
  const showDropdown = () => {
    document
      .querySelector(".dropdown-container > ul")
      .classList.remove("hide-dropdown");
  };

  return (
    <div className="container">
      <button className="dropdown-btn" onMouseOver={showDropdown}>
        <span>{value ? value : "Select"}</span>
        <span
          onClick={(e) => {
            handleValueChange(e, "");
          }}
        >
          {value ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-caret-down"></i>
          )}
        </span>
      </button>
      <div className="dropdown-container">
        <ul>
          {/* Loop over all array items to form menu list item and attach listener */}
          {menuList.map((item) => {
            return (
              <li key={item} onClick={(e) => handleValueChange(e, item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
