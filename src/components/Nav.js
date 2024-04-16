import React from 'react';
import './Nav.css'
import little_lemon_logo from "../images/little_lemon_logo.png";
function Nav() {
    return (
      <nav className="nav-container">
        <div className="nav-block">
          <img 
              src={little_lemon_logo} 
              alt="Little Lemon Logo"
            />
        </div>
        <div className="nav-block">
          <h1 className="nav-item"><a href="#Home">Home</a></h1>
          <h1 className="nav-item"><a href="#ReserveTable">Reserve A Table</a></h1>
          <h1 className="nav-item"><a href="#Menu">Menu</a></h1>
          <h1 className="nav-item"><a href="#Reviews">Reviews</a></h1>
        </div>
      </nav>
    );
  }
export default Nav;