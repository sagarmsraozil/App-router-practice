import React from "react";

interface SuspensePracticeLayoutProps {
  children: JSX.Element;
}

const SuspensePracticeLayout = (props: SuspensePracticeLayoutProps) => {
  // Props goes here
  const { children } = props;

  return (
    <div style={{ background: "#f3f3f3", color: "black" }}>{children}</div>
  );
};

export default SuspensePracticeLayout;
