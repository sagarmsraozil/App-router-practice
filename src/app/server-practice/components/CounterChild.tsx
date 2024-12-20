import React, { useState } from "react";

const CounterChild = () => {
  const [name] = useState("Sagar");

  return <div>{name}</div>;
};

export default CounterChild;
