import React from "react";
import { ProductLayoutProps } from "../product/layout";

type DashboardLayoutProps = ProductLayoutProps & {
  analytics: React.ReactNode;
  sales: React.ReactNode;
  logins: React.ReactNode;
  reports: React.ReactNode;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  // Props goes here
  const { children, analytics, sales, logins, reports } = props;

  // Variable goes here
  const isLogin = true;

  if (isLogin) {
    return (
      <div>
        Dashboard Layout {children}
        {analytics}
        {sales}
        {logins}
        {reports}
      </div>
    );
  }

  return <div>Dashboard Layouts {logins}</div>;
};

export default DashboardLayout;
