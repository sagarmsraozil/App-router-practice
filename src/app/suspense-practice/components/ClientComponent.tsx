"use client";

import React from "react";
import dynamic from "next/dynamic";

const ComponentA = dynamic(() => import("./LazyComponent"), {
  ssr: false,
  loading: () => <p>Loading lazy component</p>,
});

const ClientComponent = () => {
  return <ComponentA />;
};

export default ClientComponent;
