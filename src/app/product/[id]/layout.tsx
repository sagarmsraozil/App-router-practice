'use client'

import React, { useEffect } from "react";
import { ProductLayoutProps } from "../layout";

const SinglePageLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  // Effect goes here
  useEffect(() => {
    console.debug("Mounted");

    return () => {
      console.debug("Unmounted");
    };
  }, []);

  return <div>SinglePageLayout{children}</div>;
};

export default SinglePageLayout;
