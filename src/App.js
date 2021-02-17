import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faTaxi,
  faSearch,
  faBars,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";

import logo from "./images/turners-logo.png";
import logo2 from "./images/logo-transparent.png";

function App() {
  return (
    <div className="App">
      <body>
        <header className="header">
          <div className="header-left">
            <img src={logo2} alt="turners-logo" className="logo" />
            <p className="phone">
              <FontAwesomeIcon icon={faPhoneAlt} /> 0800 887 637
            </p>
          </div>
          <div className="header-left">
            <FontAwesomeIcon icon={faTaxi} className="taxi" />
            <button className="login-buttons">
              Login <FontAwesomeIcon icon={faPortrait} />
            </button>
            <button className="login-buttons">Join us</button>

            <FontAwesomeIcon icon={faBars} className="burger-bars" />
          </div>
        </header>
      </body>
    </div>
  );
}

export default App;
