"use client";

import { useQuery } from "@tanstack/react-query";

import React from "react";
import { getAllDetails } from "./test-suspense";

const DuplicateProduct = () => {
  // Query goes here
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getAllDetails,
  });

  console.debug(products);

  return (
    <>
      <h3>Duplicate Products</h3>
      {products.map((product) => (
        <p className="product__text product__text--title" key={product.id}>
          {product.name}
        </p>
      ))}
    </>
  );
};

export default DuplicateProduct;
