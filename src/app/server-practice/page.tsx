import React from "react";
import ClientPractice from "./components/ClientPractice";
import Counter from "./components/Counter";
import InnerCounter from "./components/InnerCounter";

const serverPromiseService = async () => {
  try {
    const data: string[] = [];

    setTimeout(() => {
      data.splice(0, 0, "Sagar", "Samir");
    }, 2000);

    return data;
  } catch (err) {
    const error = err as Error;

    throw new Error(error.message);
  }
};

const ServerPractice = async () => {
  const serverValue = await serverPromiseService();

  console.debug(serverValue);

  return (
    <>
      <InnerCounter />
      <ClientPractice serverValue={serverValue.join(",")}>
        <Counter />
      </ClientPractice>
    </>
  );
};

const MyServerPage = () => {
  return <ServerPractice />;
};

export default MyServerPage;
