import React, { useState } from "react";

const TemperatureConverter = () => {
  // 🔥 Track temperature value in Celsius
  const [celsius, setCelsius] = useState("");

  // ❄️ Track temperature value in Fahrenheit
  const [fahrenheit, setFahrenheit] = useState("");

  // 🔁 When Celsius changes, convert to Fahrenheit
  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);

    // If it's a valid number, convert
    if (!isNaN(value) && value !== "") {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2)); // Round to 2 decimal places
    } else {
      setFahrenheit("");
    }
  };

  // 🔁 When Fahrenheit changes, convert to Celsius
  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);

    // If it's a valid number, convert
    if (!isNaN(value) && value !== "") {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2>🌡️ Temperature Converter</h2>

      {/* 🔹 Celsius Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Celsius: &nbsp;
          <input
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter °C"
          />
        </label>
      </div>

      {/* 🔸 Fahrenheit Input */}
      <div>
        <label>
          Fahrenheit: &nbsp;
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter °F"
          />
        </label>
      </div>
    </div>
  );
};

export default TemperatureConverter;
