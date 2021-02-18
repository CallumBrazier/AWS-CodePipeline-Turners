import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer-main">
        <div className="footer-main-left">
          <h3 className="footer-text">FAQ</h3>
        </div>
        <div className="footer-main-mid">
          <h3 className="footer-text">Contact Us</h3>
        </div>
        <div className="footer-main-right">
          <h3 className="footer-text">Feedback</h3>
        </div>
      </footer>
    </div>
  );
}
