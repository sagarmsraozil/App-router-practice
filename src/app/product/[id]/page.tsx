import { ObjectKeys } from "@/app/shop/[[...slug]]/page";
import React from "react";

const SingleProduct = (props: ObjectKeys) => {
  // Props goes here
  const { params } = props;

  console.debug(params);

  return <div>SingleProduct</div>;
};

export default SingleProduct;
