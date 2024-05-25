"use client";

import React from "react";
import { ErrorInterface } from "./error";

const GlobalError = (props: ErrorInterface) => {
  // Props goes here
  const { error, reset } = props;

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default GlobalError;
