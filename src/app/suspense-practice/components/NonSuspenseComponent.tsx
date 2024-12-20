import { getAllDetails } from "@/app/ben-holmes/components/test-suspense";
import React from "react";

const NonSuspenseComponent = async () => {
  const products = await getAllDetails();

  if (!products.length) return <p>No products available.</p>;

  return (
    <div className="products">
      {products.map((product) => (
        <div className="products__product-card" key={product.id}>
          <h3 className="products__text products__text--title">
            {product.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default NonSuspenseComponent;
