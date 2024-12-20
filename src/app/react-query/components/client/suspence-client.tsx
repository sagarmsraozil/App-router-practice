"use client";

import { getAllDetails } from "@/app/ben-holmes/components/test-suspense";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";

const SuspenseClient = () => {
  const { data: products } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getAllDetails,
  });

  return (
    <pre>
      <code>{JSON.stringify(products)}</code>
    </pre>
  );
};

export default SuspenseClient;
