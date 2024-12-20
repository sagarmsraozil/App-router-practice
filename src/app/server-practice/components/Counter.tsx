"use client";

import React, { useState } from "react";
import CounterChild from "./CounterChild";

const Counter = () => {
  // State goes here
  const [counter, setCounter] = useState(0);

  // Handler goes here
  const handleCountIncrement = () => setCounter(counter + 1);

  return (
    <div onClick={handleCountIncrement}>
      Hi I am a client component with counter
      {counter}
      <CounterChild />
    </div>
  );
};

export default Counter;
