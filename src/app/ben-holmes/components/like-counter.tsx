"use client";

import React, { useState } from "react";

const LikeCounter = () => {
  // State goes here
  const [likes, setLikes] = useState(0);

  // Handlers goes here
  const handleClick = () => {
    setLikes(likes + 1);
  };

  return <span onClick={handleClick}>{likes}</span>;
};

export default LikeCounter;
