"use client";

import React from "react";

const RenderButton = () => {
  const handleClick = () => {
    console.debug("I am clicked!");
  };

  return (
    <button type="button" name="cta-btn-render" onClick={handleClick}>
      Click me to proceed
    </button>
  );
};

export default RenderButton;
