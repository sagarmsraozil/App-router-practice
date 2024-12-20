"use client";

import { useProducts } from "@/app/queries/useProducts";
import React from "react";

const Slugs = () => {
  // Hooks goes here
  const { data: products } = useProducts();

  return products.map((product) => <p key={product.id}>{product.slug}</p>);
};

export default Slugs;
