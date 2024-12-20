"use client";

import { useProducts } from "@/app/queries/useProducts";
import React from "react";

const ClientProducts = () => {
  // Hooks goes here
  const { data: products, isLoading: isProductsLoading } = useProducts();

  // Handlers goes here
  const handleClick = () => {
    console.debug("Click registered!");
  };

  if (isProductsLoading) return <p>Loading products...</p>;
  if (!products.length) return <p>Empty products</p>;

  return (
    <div className="product-wrapper">
      {products.map((p) => (
        <div
          className="product-card"
          style={{ display: "flex", gap: "4px" }}
          key={p.id}
          onClick={handleClick}
        >
          <p className="product-card__text">{p.name}</p>
          <p className="product-card__text product-card__text--price">
            {p.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClientProducts;
