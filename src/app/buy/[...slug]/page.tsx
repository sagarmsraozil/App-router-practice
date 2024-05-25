import { ObjectKeys } from "@/app/shop/[[...slug]]/page";
import React from "react";

const SlugPage = (props: ObjectKeys) => {
  // Props goes here
  const { params } = props;

  console.debug({ params });

  return <div>Hello I am a slug page</div>;
};

export default SlugPage;
