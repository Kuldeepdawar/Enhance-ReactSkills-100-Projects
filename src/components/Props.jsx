import { flatMap } from "lodash";
import { useState } from "react";

{
  /* Props can be pass parent to child and can't directly modify and jusr read only*/
}

// const Child = ({ color, click }) => {
//   return (
//     <div>
//       <button style={{ backgroundColor: color }}>{click}</button>
//     </div>
//   );
// };

// const Papa = () => {
//   return (
//     <div>
//       <Child color="red" click="submit" />
//     </div>
//   );
// };

// export default Papa;

{
  /* State is managed within a component  and can change using setState in class component and 
  useState in function components
  -- Dynamic Data = data is changed over the time and such as user input and api responses*/
}

// function Form() {
//   const [user, setUser] = useState("");

//   const handleInputChange = (event) => {
//     setUser(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={user}
//         placeholder="Enter user name"
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }

// export default Form;

{
  /* modal  */
}

function Modal() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => setVisible(!visible);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {visible && <div className="modal">i AM MODAL</div>}
    </div>
  );
}

export default Modal;
