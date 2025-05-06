import React, { useEffect, useRef, useState } from "react";

const DropdownWithOutsideClick = () => {
  // 🔘 State to track whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // 📦 Ref to track the dropdown element
  const dropdownRef = useRef(null);

  // 🔁 Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // 🎯 Detect outside clicks and close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // 📌 Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // 🧹 Cleanup listener on unmount or when isOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div style={{ padding: "50px" }}>
      {/* 🔘 Button to open/close dropdown */}
      <button onClick={toggleDropdown}>Toggle Dropdown</button>

      {/* 🔽 Dropdown box, shown only if isOpen is true */}
      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid black",
            width: "200px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <p>This is a dropdown.</p>
          <p>Click outside to close it.</p>
        </div>
      )}
    </div>
  );
};

export default DropdownWithOutsideClick;
