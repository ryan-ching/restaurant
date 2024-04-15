import React from "react";
import little_lemon_logo from "../images/little_lemon_logo.png";
import './Footer.css'
function Footer() {
    return (
      <footer className="footer-container">
        <div className="footer-grid">
          <img 
            src={little_lemon_logo} 
            alt="Little Lemon Logo"
            style={{maxWidth:'200px', maxHeight:'200px'}} 
          />
          <h2><a href="#Footer" className="footer-links">Copyright Notice</a></h2>
          <h2><a href="#Footer" className="footer-links">Terms of Service</a></h2>
          <div className="contact-info">
            <h2>Contact Us</h2>
            <ul className="social-links">
              <li><a href="#Footer" className="social-link">Instagram</a></li>
              <li><a href="#Footer" className="social-link">Yelp</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
export default Footer;