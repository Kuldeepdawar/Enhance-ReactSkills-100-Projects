import React from "react";
import CouterApp from "./Search";
import CounterWithUndoRedo from "./RedoUndo";
import DropdownWithOutsideClick from "./Dropdown";
// import InlineEditableInput from "./EditableInput";
import TemperatureConverter from "./CelsisusFahrenheit";
import OTPInput from "./Otp";
import Papa from "./components/Props";
import Recursive from "./components/Recursive";
import EmployeeCrud from "./crud/EmployeeCrud";
//import Test from "./Test";

const App = () => {
  return (
    <div>
      {/* <CounterWithUndoRedo /> */}
      {/* <DropdownWithOutsideClick /> */}

      {/* <InlineEditableInput /> */}
      {/* <TemperatureConverter /> */}
      {/* <Test /> */}
      {/* <OTPInput /> */}
      {/* <Papa /> */}
      {/* <Recursive /> */}
      <EmployeeCrud />
    </div>
  );
};

export default App;
