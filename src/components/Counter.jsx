// create a react component and interact with redux store and dispatch action
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/action/counterAction";

import React from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h2>
        Counter:
        {count}
      </h2>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
