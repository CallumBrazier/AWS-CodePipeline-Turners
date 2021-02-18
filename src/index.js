import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Finance from "./pages/finance";
import Insurance from "./pages/insurance";
import VirtualAssistant from "./pages/virtual-assistant";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/insurance" component={Insurance} />
        <Route path="/finance" component={Finance} />
        <Route path="/virtual-assistant" component={VirtualAssistant} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
