import React from "react";
import CouterApp from "./Search";
import CounterWithUndoRedo from "./RedoUndo";
import DropdownWithOutsideClick from "./Dropdown";
// import InlineEditableInput from "./EditableInput";
import TemperatureConverter from "./CelsisusFahrenheit";
import OTPInput from "./Otp";
//import Test from "./Test";

const App = () => {
  return (
    <div>
      <CounterWithUndoRedo />
      {/* <DropdownWithOutsideClick /> */}

      {/* <InlineEditableInput /> */}
      {/* <TemperatureConverter /> */}
      {/* <Test /> */}
      {/* <OTPInput /> */}
    </div>
  );
};

export default App;
