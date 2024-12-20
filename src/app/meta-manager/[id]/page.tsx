import { Metadata } from "next";
import React from "react";

type Props = {
  params: { [key: string]: any };
  searchParams: { [key: string]: any };
};

export const generateMetadata = ({ params, searchParams }: Props): Metadata => {
  console.debug(params, searchParams);

  return {
    title: "MetaWithID | Practice",
    description: "I have a description value",
  };
};

const MetaWithID = () => {
  return <div>I am meta with id</div>;
};

export default MetaWithID;
