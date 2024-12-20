import { getAllDetails } from "@/app/ben-holmes/components/test-suspense";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React, { Suspense } from "react";
import SuspenseClient from "../components/client/suspence-client";

const SuspenseQuery = () => {
  const queryClient = new QueryClient();

  //   queryClient.prefetchQuery({
  //     queryKey: ["products"],
  //     queryFn: getAllDetails,
  //   });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading code...</p>}>
        <SuspenseClient />
      </Suspense>
    </HydrationBoundary>
  );
};

export default SuspenseQuery;
