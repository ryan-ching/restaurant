import React from "react";
import little_lemon_logo from "../images/little_lemon_logo.png";
import Nav from './Nav';
import '../App.css'
function Header() {
    return (
      <header className="grid-container">
        <img 
          className="grid-item" 
          src={little_lemon_logo} 
          alt="Little Lemon Logo"
          style={{maxWidth:'200px', maxHeight:'200px'}} />
        <Nav />
      </header>
    );
  }
export default Header;