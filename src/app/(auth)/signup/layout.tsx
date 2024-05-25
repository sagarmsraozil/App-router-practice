import { ProductLayoutProps } from "@/app/product/layout";
import React from "react";

const SignupLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  return <div>Signup Layout {children}</div>;
};

export default SignupLayout;
