import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Burger from "./components/burger";

import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faTaxi,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";

import logo2 from "./images/logo-transparent.png";

function App() {
  return (
    <>
      <div className="App">
        <body>
          <header className="header">
            <div className="header-left">
              <img src={logo2} alt="turners-logo" className="logo" />
              <p className="phone">
                <FontAwesomeIcon icon={faPhoneAlt} transform={{ rotate: 42 }} />
                0800 887 637
              </p>
            </div>
            <div className="header-right">
              <FontAwesomeIcon icon={faTaxi} className="taxi-icon" />
              <button className="login-buttons">
                Login{" "}
                <FontAwesomeIcon icon={faPortrait} className="user-icon" />
              </button>
              <button className="login-buttons">Join us</button>

              <Burger />
            </div>
          </header>
          <div className="searchbar">
            <input
              type="search"
              className="search"
              placeholder="&#xF002; Find a Car..."
            />
          </div>
          <footer className="footer">
            <h3 className="footer-left">Book an Appraisal</h3>
            <h3 className="footer-mid">About us</h3>
            <h3 className="footer-right">Help</h3>
          </footer>
        </body>
      </div>
    </>
  );
}

export default App;
