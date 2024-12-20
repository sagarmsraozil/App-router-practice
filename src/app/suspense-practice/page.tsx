import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import PracticeComponent from "./components/PracticeComponent";
import NonSuspenseComponent from "./components/NonSuspenseComponent";
import SecondPracticeComponent from "./components/SecondPracticeComponent";
import ClientComponent from "./components/ClientComponent";

const page = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <PracticeComponent />
        <SecondPracticeComponent />
      </Suspense>
      <div style={{ minHeight: "100vh" }}>
        <Suspense fallback={<p>Loading...</p>}>
          <PracticeComponent />
          <SecondPracticeComponent />
        </Suspense>
      </div>
      <ClientComponent />
      <NonSuspenseComponent />
    </>
  );
};

export default page;
