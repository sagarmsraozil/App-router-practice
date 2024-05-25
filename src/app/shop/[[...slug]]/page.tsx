"use client";

import React from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

export interface ObjectKeys<T = any> {
  [key: string]: T;
}

const PageBySlug = ({ params }: { params: ObjectKeys }) => {
  const router = useRouter();
  const paths = usePathname();
  const paramss = useParams();

  return (
    <div>
      <code>{JSON.stringify(router)}</code>
      <code>{JSON.stringify(paths)}</code>
      <code>{JSON.stringify(paramss)}</code>
    </div>
  );
};

export default PageBySlug;
