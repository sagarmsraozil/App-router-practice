"use client";

import React, { useEffect } from "react";
import { ProductLayoutProps } from "../layout";

const SinglePageTemplate = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  // Effect goes here
  useEffect(() => {
    console.debug("Mounted");

    return () => {
      console.debug("Unmounted");
    };
  }, []);

  return <div>Product Template{children}</div>;
};

export default SinglePageTemplate;
