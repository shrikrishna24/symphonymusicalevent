import React from "react";
import "./content.css";
import Navbar from "../component/navbar/navbar";
import Routing from "../routing/routing";
import Footer from "../component/footer/footer";

const Content = () => {

  return (
      <div className="container">
          <div className="header">
            <Navbar />
          </div>
        <div className="contents">
          <Routing />
        </div>
          <div className="footer-container">
            <Footer />
          </div>
      </div>    
  );
};

export default Content;
