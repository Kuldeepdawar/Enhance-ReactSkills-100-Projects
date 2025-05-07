// after creating a ACTION and reducer will manage a state related to action
import { INCREMENT, DECREMENT } from "../action/counterAction";

// reducer will take a initial state
const initialState = {
  count: 0,
};

// now reducer function take a initialState and action
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // take previous state
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
