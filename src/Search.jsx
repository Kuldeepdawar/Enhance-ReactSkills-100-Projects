import React, { useState } from "react";

const Search = () => {
  // track temperature value in celcius
  const [celsius, setCelsius] = useState("");

  // track temperature value in fahrenfiet
  const [fahrenheit, setFahrenheit] = useState("");

  // when celsius changes then convert to fahrenheit
  const handleCelsiusChnage = (event) => {
    const value = event.target;
    setCelsius(value);
  };

  // it's valid value then convert to fahrenheit
  if (!isNaN(value) && value !== "") {
    const f = (parseFloat(value) * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  } else {
    setFahrenheit("");
  }

  const handleFahrenheit = (event) => {
    const value = event.target;
    setFahrenheit(value);

    // it value change feh change then convert to celcisu
    if (!isNaN(value) && value !== "") {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <h1>Temperature Convertor Celsius to fahrenheit</h1>
      <lable Celcius:nbsp>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChnage}
          placeholder="Enter Cel."
        />
      </lable>
      <div>
        <label Fahrenheit nbsp>
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheit}
            placeholder="Enter Feh."
          />
        </label>
      </div>
    </div>
  );
};

export default Search;
