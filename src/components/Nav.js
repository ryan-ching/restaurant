import React from 'react';
import '../App.css'
function Nav() {
    return (
      <nav>
        <ul className="grid-container">
          <li className="grid-item"><a href="#Header">Home</a></li>
          <li className="grid-item"><a href="#Footer">Contact</a></li>
          <li className="grid-item"><a href="#Main">Menu</a></li>
          <li className="grid-item"><a href="#Main">Reservations</a></li>
        </ul>
      </nav>
    );
  }
export default Nav;