import React, { lazy, Suspense } from "react";
import RenderButton from "./components/render-button";
import TestSuspenseDetails, { getAllDetails } from "./components/test-suspense";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import DuplicateProduct from "./components/duplicate-product";

const LazyDuplicateProduct = lazy(
  () => import("./components/duplicate-product")
);

const BenHolmes = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getAllDetails,
    staleTime: 60 * 1000, // 1min
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        BenHolmes Component
        <RenderButton />
        <TestSuspenseDetails />
        <DuplicateProduct />
      </div>
    </HydrationBoundary>
  );
};

export default BenHolmes;
