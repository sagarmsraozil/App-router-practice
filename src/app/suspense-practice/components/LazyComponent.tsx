"use client";

import { getAllDetails } from "@/app/ben-holmes/components/test-suspense";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const LazyComponent = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["prod"],
    queryFn: () => getAllDetails(),
  });

  if (!products.length) return <p>No products available.</p>;

  return <div className="products">I am lazy loaded</div>;
};

export default LazyComponent;
