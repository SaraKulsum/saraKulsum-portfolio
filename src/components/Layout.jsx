import React, { children } from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <div className = 'page-content '>
           {children}
       </div>
      <Footer/>
    </>
  );
};

export default Layout;
