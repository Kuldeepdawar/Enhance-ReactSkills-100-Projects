import React, { useState } from "react";

const CounterWithUndoRedo = () => {
  // 🟢 This state keeps track of the current counter value
  const [count, setCount] = useState(1);

  // 🟢 This stores all the previous values (history)
  const [history, setHistory] = useState([]);

  // 🟢 This stores the undone values (used for redo)
  const [future, setFuture] = useState([]);

  // 🔼 Increase the counter
  const handleIncrement = () => {
    setHistory([...history, count]); // Save current value in history
    setCount(count + 1); // Increase the count
    setFuture([]); // Clear future because new action breaks redo
  };

  // 🔽 Decrease the counter
  const handleDecrement = () => {
    setHistory([...history, count]); // Save current value in history
    setCount(count - 1); // Decrease the count
    setFuture([]); // Clear future
  };

  // 🔄 Undo the last change
  const handleUndo = () => {
    if (history.length === 0) return; // If no history, do nothing

    const lastValue = history[history.length - 1]; // Get last value
    const newHistory = history.slice(0, history.length - 1); // Remove last value

    setHistory(newHistory); // Update history
    setFuture([count, ...future]); // Save current count to future
    setCount(lastValue); // Set counter to last value
  };

  // 🔁 Redo the undone action
  const handleRedo = () => {
    if (future.length === 0) return; // If nothing to redo, do nothing

    const nextValue = future[0]; // Get next value from future
    const newFuture = future.slice(1); // Remove it from future

    setHistory([...history, count]); // Save current count to history
    setCount(nextValue); // Set count to next value
    setFuture(newFuture); // Update future
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={handleIncrement}>+ Increment</button>
      <button onClick={handleDecrement}>- Decrement</button>

      <div style={{ marginTop: "20px" }}>
        {/* 🔙 Undo button (disabled if no history) */}
        <button onClick={handleUndo} disabled={history.length === 0}>
          Undo
        </button>

        {/* 🔄 Redo button (disabled if no future) */}
        <button onClick={handleRedo} disabled={future.length === 0}>
          Redo
        </button>
      </div>
    </div>
  );
};

export default CounterWithUndoRedo;
