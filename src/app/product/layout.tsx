import React, { ReactNode } from "react";

export interface ProductLayoutProps {
  children: ReactNode;
}

const ProductLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  return <div>Product Layout {children}</div>;
};

export default ProductLayout;
