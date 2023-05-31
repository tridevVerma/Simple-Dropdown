import React from "react";

const Dropdown = ({ menuList, value, handleValueChange }) => {
  return (
    <>
      <button className="dropdown-btn">
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
          {menuList.map((item) => {
            return (
              <li key={item} onClick={(e) => handleValueChange(e, item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
