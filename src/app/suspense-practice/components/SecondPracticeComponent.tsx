import { getAllDetails } from "@/app/ben-holmes/components/test-suspense";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

const SecondPracticeComponent = async () => {
  const products = await getAllDetails();

  if (!products.length)
    return <p>No products from Second Practice component</p>;

  return <div>SecondPracticeComponent</div>;
};

export default SecondPracticeComponent;
