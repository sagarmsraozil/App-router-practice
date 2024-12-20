import { getAllDetails } from "@/app/ben-holmes/components/test-suspense";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

const PracticeComponent = async () => {
  const products = await getAllDetails();

  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryFn: () => getAllDetails(),
    queryKey: ["prod"],
  });

  if (!products.length) return <p>No products available.</p>;

  return <div className="products">Piza</div>;
};

export default PracticeComponent;
