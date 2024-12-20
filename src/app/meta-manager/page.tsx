import { Metadata } from "next";
import React from "react";

// export const metadata: Metadata = {
//   title: "Meta | Practice",
//   description: "I am a metadata page",
// };

type Props = {
  params: { [key: string]: any };
  searchParams: { [key: string]: any };
};

export const generateMetadata = ({ params, searchParams }: Props) => {
  console.debug(params, searchParams);

  return {
    title: "Meta | Practice",
  };
};

const MetaManager = () => {
  return <div>I am a meta manager</div>;
};

export default MetaManager;
