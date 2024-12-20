"use client";

import React from "react";

const InnerCounter = () => {
  // Handler goes here
  const handleClick = () => {
    console.debug("Hello world");
  };

  return (
    <div className="click-component" onClick={handleClick}>
      It is a click component.
    </div>
  );
};

export default InnerCounter;
