import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllDetails } from "@/app/ben-holmes/components/test-suspense";
import ClientProducts from "../client/client-products";
import ClientFetch from "../client/client-fetch";
import Slugs from "./slugs";

const Products = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getAllDetails,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientProducts />
        <ClientFetch />
      </HydrationBoundary>
      <Slugs />
    </>
  );
};

export default Products;
