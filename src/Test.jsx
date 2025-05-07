import { last } from "lodash";
import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const [history, setHistory] = useState([]);

  const [future, setFuture] = useState([]);

  // handle incretment and store hostore and future
  const handleIncrement = () => {
    setHistory([...history, count]);
    setCount(count + 1);
    setFuture([]);
  };

  // handle Decrement
  const handleDecrement = () => {
    setHistory([...history, count]);
    setCount(count - 1);
    setFuture([]);
  };

  // undo the last change
  const undoFun = () => {
    if (history.length === 0) return;

    const lastValue = history[history.length - 1];

    const newValue = history.slice(0, history.length - 1);

    setHistory(newValue);
    setFuture([count, ...future]);
    setCount(lastValue);
  };

  const handleRedo = () => {
    if (future.length === 0) return;

    const newValue = [0];
    const newFuture = future.slice(1);

    setFuture(newFuture);
    setCount(nextValue);
    setHistory([...NavigationHistoryEntry, count]);
  };

  return <div>Test</div>;
};

export default Test;
