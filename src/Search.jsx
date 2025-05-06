import React, { useState } from "react";

const Search = () => {
  // take a state for editing input or not
  const [isEditing, setEditing] = useState(false);

  // take a text as a current value
  const [text, setText] = useState("edit here");

  // enable to edit click when we click on edit
  const handleEditClick = () => {
    setEditing(true);
  };

  // uodate state when text is changed
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // exist edit mode on blur (click outside)

  const handleOutsideBlue = () => {
    setEditing(false);
  };

  // exit edit mode when enter Enter button
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleOutsideBlue}
          onKeyDown={handleEnterKey}
          autoFocus
          style={{ fontSize: "20px", padding: "4px" }}
        />
      ) : (
        // show plain text when no editing
        <span
          onClick={handleEditClick}
          style={{ cursor: "pointer", fontSize: "20px" }}
          // make focusable for accessbility
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEditClick(); // keyboard access for accessibility
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Search;
