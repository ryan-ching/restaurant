import React from 'react';
import './Nav.css'

function Nav() {
    return (
      <nav className="nav-container">
        <div className="nav-bar">
          <h1 className="nav-item"><a href="#ReserveTable">Reserve A Table</a></h1>
          <h1 className="nav-item"><a href="#Home">Home</a></h1>
          <h1 className="nav-item"><a href="#Menu">Menu</a></h1>
          <h1 className="nav-item"><a href="#Reviews">Reviews</a></h1>
        </div>
      </nav>
    );
  }
export default Nav;