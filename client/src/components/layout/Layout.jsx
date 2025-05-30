import React from "react";
import Header from "../UI/Header";
import {Outlet} from "react-router-dom";
import Footer from "../UI/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
