import { ObjectKeys } from "@/app/shop/[[...slug]]/page";
import React from "react";
import LikeCounter from "./like-counter";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const PRODUCT_API_URL = "http://localhost:5001/api/product/";

export const getAllDetails = async (): Promise<ObjectKeys[]> => {
  const response = await fetch(PRODUCT_API_URL, {
    method: "get",
    cache: "force-cache",
  });

  const responseJSON = await response.json();

  if (!responseJSON) return [];

  return responseJSON.data;
};

const TestSuspenseDetails = async () => {
  const queryClient = new QueryClient();

  // const productDetails = await queryClient.fetchQuery({
  //   queryKey: ["products"],
  //   queryFn: getAllDetails,
  // });

  return <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>;
};

export default TestSuspenseDetails;
