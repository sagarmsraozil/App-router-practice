import { ProductLayoutProps } from "@/app/product/layout";
import React from "react";

const ShopLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  return <div>I am shop layout{children}</div>;
};

export default ShopLayout;
