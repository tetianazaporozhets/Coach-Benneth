import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="layout">
      {location.pathname !== "/" && <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
