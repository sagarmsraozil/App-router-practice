"use client";

import React from "react";

export interface ErrorInterface {
  error: Error;
  reset: () => void;
}

const RootError = (props: ErrorInterface) => {
  // Props goes here
  const { error, reset } = props;

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default RootError;
