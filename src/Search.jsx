import React, { useRef, useState } from "react";

const Search = () => {
  // take the otp state
  const [otp, setOtp] = useState("", "", "", "");

  // focus on inut
  const inputRef = useRef();

  // handle inputchange in specific value
  const handleChange = (e, index) => {
    const value = e.target.value;
  };

  // only allow 0-9 number or empty
  if (/^[0-9]?$/.test(value)) {
    const newOtp = [...otp];
    // update specific value with index
    newOtp[index] = value;
    // update state
    setOtp(newOtp);
  }

  // set the value next + 1 focus
  if (value && index > otp.length - 1) inputRef.current[index + 1].focus();

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace")
      if (otp[index] === "") if (index > 0) inputRef.current[index - 1].focus();
  };
  return <div>Search</div>;
};

export default Search;
