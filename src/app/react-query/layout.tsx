import React from "react";
import { ProductLayoutProps } from "../product/layout";

const ReactQueryLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  return <div className="react-query-wrapper">{children}</div>;
};

export default ReactQueryLayout;
