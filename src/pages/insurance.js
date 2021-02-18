import React from "react";

import { Link } from "react-router-dom";

import "./insurance.css";
import Burger from "../components/burger";
import logo from "../images/turners-logo.png";
import Footer from "../components/footer";
import Policy from "../components/policydoc";

export default function Insurance() {
  return (
    <>
      <div className="insurance-body">
        <body>
          <header className="header">
            <div className="header-left">
              <Link to="/">
                <img src={logo} alt="turners-logo" className="logo" />
              </Link>
            </div>
            <div className="header-right">
              <Burger />
            </div>
          </header>
          <div className="insurance-top-info">
            <div className="insurance-top-info-left"></div>
            <div className="insurance-top-info-mid">
              <h3 className="insurance-top-info-mid-title">
                Welcome to Turners Insurance
              </h3>
            </div>
            <div className="insurance-top-info-right">
              <Policy />
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <h3 className="grid-item-title">
                Mechanical <br /> Breakdown <br /> insurance
              </h3>
              <button className="grid-item-button">Get a Quote</button>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">
                Motor <br /> Vehilce <br /> Insurance
              </h3>
              <button className="grid-item-button">Get a Quote</button>
              <br />
              <button className="grid-item-button">
                Features & <br />
                Benefits
              </button>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">
                Make <br /> a <br /> Claim
              </h3>
              <button className="grid-item-button">Start a Claim</button>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">
                Need Help? <br /> Talk to us <br /> Anytime
              </h3>
              <Link to="/virtual-assistant">
                <button className="grid-item-button">Find Out More</button>
              </Link>
            </div>
          </div>

          <Footer />
        </body>
      </div>
    </>
  );
}
