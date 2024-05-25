import React from "react";
import { ProductLayoutProps } from "../product/layout";

const AuthLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  return <div>I am a auth layout {children}</div>;
};

export default AuthLayout;
