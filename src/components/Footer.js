import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} TradeForRisk. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link" aria-label="Facebook">Facebook</a>
          <a href="#" className="footer-link" aria-label="Twitter">Twitter</a>
          <a href="#" className="footer-link" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
