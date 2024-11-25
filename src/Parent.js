import React from "react";
import { CounterProvider } from "./CounterContext";
import Child from "./Child";

function Parent() {
  return (
    <CounterProvider>
      <div>
        <Child />
      </div>
    </CounterProvider>
  );
}

export default Parent;