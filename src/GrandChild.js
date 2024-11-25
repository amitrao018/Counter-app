import React from "react";
import { useCounter } from "./CounterContext";

function GrandChild() {
  const { count, increment, decrement } = useCounter(); // Destructure all at once

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default GrandChild;
