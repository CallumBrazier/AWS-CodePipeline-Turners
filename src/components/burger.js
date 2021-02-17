import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./navbarData";
import "./navbar.css";

export default function Burger() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div>
        <Link to="#" className="menu-bars">
          <FontAwesomeIcon
            icon={faBars}
            className="burger-bars"
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <Link to="#" className="menu-bars">
            <li className="navbar-toggle">
              <FontAwesomeIcon icon={faHome} onClick={showSidebar} />
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </Link>
        </ul>
      </nav>
    </>
  );
}
