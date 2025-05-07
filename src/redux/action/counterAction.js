// Action takes a action name like increment and decrement

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// this function will return an action obejct to be dispatched

export const increment = () => ({
  type: INCREMENT, // Action type
});

export const decrement = () => ({
  type: DECREMENT,
});
