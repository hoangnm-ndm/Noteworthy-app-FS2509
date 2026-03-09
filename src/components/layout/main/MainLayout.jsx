import React from "react";
import { Outlet } from "react-router";
import HeaderMain from "./HeaderMain";

const MainLayout = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
};

export default MainLayout;
