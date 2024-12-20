import React, { ReactNode } from "react";
import Demo from "../demo/page";

export interface ProductLayoutProps {
  children: ReactNode;
}

const ProductLayout = (props: ProductLayoutProps) => {
  // Props goes here
  const { children } = props;

  return (
    <div>
      Product Layout {children} <Demo />
    </div>
  );
};

export default ProductLayout;
