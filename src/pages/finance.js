import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./finance.css";
import Burger from "../components/burger";
import logo from "../images/turners-logo.png";
import Footer from "../components/footer";

export default function Finance() {
  return (
    <>
      <div className="finance-body">
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
          <div className="finance-top-info">
            <div className="finance-top-info-left">
              <h3>Car & Personal</h3>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="finance-top-info-mid">
              <h3>Business</h3>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="finance-top-info-right">
              <h3>Loan Calculator</h3>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="finance-title">
            <h3>Welcome to Turners Finance</h3>
          </div>
          <div className="finance-button">
            <button className="finance-button-styles">Apply Now</button>
          </div>

          <div className="finance-main-info">
            <div className="finance-main-info-left">
              <h3 className="finance-main-info-left-title">
                How Can I Apply <br />
                Online?
              </h3>
              <h4 className="finance-main-info-left-subtext">
                <FontAwesomeIcon icon={faChevronRight} /> Follow these simple
                steps
              </h4>
            </div>

            <div className="finance-main-info-mid">
              <div className="finance-main-info-mid-box">
                <h3 className="finance-main-info-mid-box-title">
                  Ask us about Finance <br /> and drive away today
                </h3>
                <h4 className="finance-main-info-mid-box-subtext1">
                  And if you have Finance <br /> We can beat it
                </h4>
                <h4 className="finance-main-info-mid-box-subtext2">
                  We pre-approve Finance <br /> usually within one day
                </h4>
                <button className="finance-main-info-mid-box-button">
                  Find out more
                </button>
              </div>
            </div>

            <div className="finance-main-info-right">
              <button className="finance-main-info-right-button-top">
                Financial Information
              </button>
              <button className="finance-main-info-right-button-mid">
                Our Discounts
              </button>
              <Link to="/virtual-assistant">
                <button className="finance-main-info-right-button-bottom">
                  Need Help?
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </body>
      </div>
    </>
  );
}
