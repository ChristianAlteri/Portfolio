import React from "react";
import "./Layout.css"; 
import Contact from "../pages/Contact";
import { Navbar } from "react-bootstrap";

const Layout = ({children}) => {
  return (
    <div>
      <section>
        {children}
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
    </div>
  );
};

export default Layout;
