import React, { useRef, useState } from "react";

const OTPInput = () => {
  // 🧠 State to store the OTP digits in an array format
  const [otp, setOtp] = useState(["", "", "", ""]);

  // 🧭 Refs for all 4 input boxes to control focus programmatically
  const inputRefs = useRef([]);

  // 📥 Handle input change in a specific box
  const handleChange = (e, index) => {
    const value = e.target.value;

    // ✅ Only allow numbers 0-9 or empty string
    if (/^[0-9]?$/.test(value)) {
      // if(/^[0-9]?$/.test(value))
      // otp contain 3456 newIOtp 3456 newOtp[inde] = value
      const newOtp = [...otp];
      newOtp[index] = value; // update that specific index with value
      setOtp(newOtp); // update state

      // 👉 Automatically move focus to the next input if it's not the last one
      if (value && index < otp.length - 1) {
        // value && index < otp.length - 1
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // ⬅️ Handle keyboard actions like Backspace
  const handleKeyDown = (e, index) => {
    // e, index for check indexe.key
    if (e.key === "Backspace") {
      // e.key press backspace
      if (otp[index] === "") {
        // check otp[index] === ""
        // If current box is empty, move focus to the previous one
        if (index > 0) {
          // idex is > 0
          inputRefs.current[index - 1].focus();
        }
      }
    }
  };

  // 🔎 Handle Submit button click – show OTP in alert
  const handleSubmit = () => {
    const fullOtp = otp.join("");
    alert(`Entered OTP: ${fullOtp}`);
  };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2>🔐 Enter OTP</h2>

      {/* 🔢 OTP Input Boxes */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {otp.map((digit, index) => (
          <input
            key={index} // Required for list rendering
            type="text" // Make it number-only
            value={digit} // Controlled input
            onChange={(e) => handleChange(e, index)} // onChange handler
            onKeyDown={(e) => handleKeyDown(e, index)} // backspace handling
            ref={(el) => (inputRefs.current[index] = el)} // Set ref for focus
            maxLength="1" // Only one character allowed
            style={{
              width: "40px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              border: "4px solid #ccc",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>

      {/* 🔘 Submit Button */}
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Submit OTP
      </button>
    </div>
  );
};

export default OTPInput;
