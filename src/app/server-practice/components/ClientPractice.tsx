"use client";

import React, { ReactNode } from "react";
import { Suspense } from "react";

interface ClientPracticeProps {
  serverValue: string;
  children: ReactNode;
}

const ClientPractice = (props: ClientPracticeProps) => {
  // Props goes here
  const { serverValue, children } = props;

  return (
    <div>
      <Suspense fallback={<>Loading...</>}>{serverValue}</Suspense>
      {children}
    </div>
  );
};

export default ClientPractice;
