import React from "react";
import { Link } from "react-router-dom";

import "./virtual-assistant.css";
import Burger from "../components/burger";
import logo from "../images/turners-logo.png";
import Footer from "../components/footer";

export default function VirtualAssistant() {
  return (
    <div>
      <header className="header header-virtual-assistant">
        <div className="header-left">
          <Link to="/">
            <img src={logo} alt="turners-logo" className="logo" />
          </Link>
        </div>
        <div className="header-right">
          <Burger />
        </div>
      </header>
      <body className="virtual-assistant-body">
        <div className="va-body-left">
          <h3 className="va-body-left-text">
            Hello there, <br /> I am Trixie, <br /> your digital assistant.
            <br />
            Here is what I can help
            <br /> you with!
          </h3>
        </div>
        <div className="va-body-right">
          <div className="va-grid-container">
            <div className="va-grid-item">
              <button className="va-grid-button">Ask me a Question</button>
            </div>
            <div className="va-grid-item">
              <button className="va-grid-button">Vehicle</button>
            </div>
            <div className="va-grid-item">
              <button className="va-grid-button">Quote</button>
            </div>
            <div className="va-grid-item">
              <button className="va-grid-button">Finance</button>
            </div>
            <div className="va-grid-item">
              <button className="va-grid-button">Claims</button>
            </div>
            <div className="va-grid-item">
              <button className="va-grid-button">Offers</button>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </div>
  );
}
