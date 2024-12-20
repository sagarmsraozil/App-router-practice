import React from "react";
import { ProductLayoutProps } from "../product/layout";

const ServerPracticeLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  return (
    <div>
      I am server practice layout
      {children}
    </div>
  );
};

export default ServerPracticeLayout;
