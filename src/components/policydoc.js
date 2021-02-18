import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

import policy from "../images/policy.png";

import "./policy.css";

export default function Policy() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div>
        <h4 className="insurance-top-info-right-text">
          Policy Document <br />
          <FontAwesomeIcon icon={faChevronDown} onClick={showSidebar} />
        </h4>
      </div>
      <nav className={sidebar ? "policy-nav-menu active" : "policy-nav-menu"}>
        <ul className="nav-menu-items">
          <li className="insurance-navbar-toggle">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={showSidebar}
              className="home-icon"
            />
          </li>

          <img src={policy} alt="policy" className="policy-image" />
        </ul>
      </nav>
    </>
  );
}
