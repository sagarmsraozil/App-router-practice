"use client";

import { useClientProducts } from "@/app/queries/useProducts";
import React from "react";

const ClientFetch = () => {
  // Hooks goes here
  const { isLoading, data: clientProducts } = useClientProducts();

  if (isLoading) return <p>Loading...</p>;
  if (!clientProducts.length) return <p>No products found</p>;

  return clientProducts.map((product) => (
    <p key={product.id}>{product.brand}</p>
  ));
};

export default ClientFetch;
